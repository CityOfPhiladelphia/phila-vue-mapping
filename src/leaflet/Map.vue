<template>
  <!-- we need a container because this component can only contain one root div
  -->
  <div class="map-container">
    <!-- the leaflet map -->
    <div class="map"
         ref="map"
         id="map"
    />
      <!-- container for vue elements wrapping leaflet elements. these aren't
           actually rendered, they just allow us to make the map reactive.
      -->
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
  import {
    Map,
    LatLng,
    LatLngBounds
  } from 'leaflet';
  import bindEvents from './util/bind-events';

  export default {
    props: [
      'center',
      'zoom',
      'zoomControlPosition',
      'minZoom',
      'maxZoom',
    ],
    mounted() {
      const map = this.$leafletElement = this.createLeafletElement();

      // move zoom control
      map.zoomControl.setPosition(this.$props.zoomControlPosition);

      // put in state
      // REVIEW do we want to do this? is it serializable?
      this.$store.commit('setMap', { map });

      this.setMapView(this.center);

      this.$nextTick(() => {
        map.attributionControl.setPrefix('<a target="_blank" href="//www.phila.gov/it/aboutus/units/Pages/GISServicesGroup.aspx">City of Philadelphia | CityGeo</a>');
      })

      // signal children to mount
      for (let child of this.$children) {
        // REVIEW it seems weird to pass children their own props. trying to
        // remember why this was necessary... binding issue?
        child.parentMounted(this, child.$props);
      }

      // bind events
      // http://leafletjs.com/reference.html#map-click

      // const MAP_EVENTS = [
      //   'click',
      //   'dblclick',
      //   'mousedown',
      //   'mouseup',
      //   'mouseover',
      //   'mouseout',
      //   'mousemove',
      //   'contextmenu',
      //   'focus',
      //   'blur',
      //   'preclick',
      //   'load',
      //   'unload',
      //   'viewreset',
      //   'movestart',
      //   'move',
      //   'moveend',
      //   'dragstart',
      //   'drag',
      //   'dragend',
      //   'zoomstart',
      //   'zoomend',
      //   'zoomlevelschange',
      //   'resize',
      //   'autopanstart',
      //   'layeradd',
      //   'layerremove',
      //   'baselayerchange',
      //   'overlayadd',
      //   'overlayremove',
      //   'locationfound',
      //   'locationerror',
      //   'popupopen',
      //   'popupclose'
      // ];

      // TODO warn if trying to bind an event that doesn't exist
      bindEvents(this, this.$leafletElement, this._events);
    },
    watch: {
      center(nextCenter) {
        this.setMapView(nextCenter);
      },
      zoom(nextZoom) {
        if (!nextZoom) return;

        this.$leafletElement.setZoom(nextZoom);
      },
      mapBounds(nextBounds) {
        this.setMapBounds(nextBounds)
      },
      fullScreenMapEnabled() {
        console.log('Map.vue fullScreenMapEnabled watch is firing');
        this.$leafletElement.invalidateSize();
      }
    },
    computed: {
      fullScreenMapEnabled() {
        return this.$store.state.fullScreenMapEnabled;
      },
      mapBounds() {
        return this.$store.state.map.bounds;
      }
    },
    methods: {
      createLeafletElement() {
        const { zoomControlPosition, ...options } = this.$props;
        return new Map(this.$refs.map, options);
      },
      childDidMount(child) {
        child.addTo(this.$leafletElement);
      },
      setMapView(xy = [], zoom = this.zoom) {
        if (xy.length === 0) return;
        const [ lng, lat ] = xy;
        const latLng = new LatLng(lat, lng);

        // we used "setView" here because when you refreshed the app with an address in the url,
        // "panTo" was getting stepped on by "setZoom" and it was not happening
        this.$nextTick(() => {
          this.$leafletElement.setView(latLng, zoom);
        })
      },
      setMapBounds(bounds) {
        if (bounds._northEast) {
          console.log('MAP.VUE SETMAPBOUNDS IS RUNNING:', bounds._northEast.lat, bounds._northEast.lng, bounds._southWest.lat, bounds._southWest.lng);
          this.$leafletElement.fitBounds(bounds);
        }
      },


      // for OpenMaps
      // nearly the same function is in WebMapLayer.Vue
      // this one is used when the click is NOT on a point
      clickHandler(e) {
        const map = this.$leafletElement
        const clickBounds = L.latLngBounds(e.latlng, e.latlng);
        // console.log('clickHandler in Map is starting, e:', e, 'clickBounds:', clickBounds);
        // console.log('map._layers', map._layers);
        let intersectingFeatures = [];
        let geometry;
        for (let layer in map._layers) {
          var overlay = map._layers[layer];
          // console.log('layer:', layer, 'overlay:', overlay);
          if (overlay._layers) {
            for (let oLayer in overlay._layers) {
              const feature = overlay._layers[oLayer];
              // console.log('feature:', feature);
              if (feature.feature) {
                geometry = feature.feature.geometry.type;
                // console.log('clickHandler LAYER:', layer, 'FEATURE:', feature, 'GEOMETRY:', geometry);
                let bounds;
                if (geometry === 'Polygon' || geometry === 'MultiPolygon') {
                  // console.log('polygon or multipolygon');
                  if (feature.contains(e.latlng)) {
                    // console.log('about to run checkForDuplicates')
                    this.checkForDuplicates(layer, feature, intersectingFeatures);
                  }
                }
                else if (geometry === 'LineString') {
                  // console.log('Line');
                  bounds = feature.getBounds();
                  if (bounds && clickBounds.intersects(bounds)) {
                    this.checkForDuplicates(layer, feature, intersectingFeatures);
                  }
                } else if (geometry === 'Point') {
                  // console.log('Point');
                  bounds = L.latLngBounds(feature._latlng, feature._latlng);
                  if (bounds && clickBounds.intersects(bounds)) {
                    this.checkForDuplicates(layer, feature, intersectingFeatures);
                  }
                }
              }
            }
          }
        }
        this.$store.commit('setPopupCoords', e.latlng);
        this.$store.commit('setIntersectingFeatures', intersectingFeatures);
      },
      checkForDuplicates(layer, feature, intersectingFeatures) {
        // console.log('checkForDuplicates is running, layer:', layer, 'feature:', feature);
        let ids = []
        for (let i = 0; i < intersectingFeatures.length; i++) {
          ids[i] = layer + '_' + intersectingFeatures[i].feature.id;
        }
        // console.log('layer:', layer, 'feature.feature.id:', feature.feature.id);
        if (!ids.includes(layer + '_' + feature.feature.id)) {
          // console.log('checkForDuplicates going to push to intersectingFeatures:', layer, feature.feature.id);
          intersectingFeatures.push(feature);
        }
      }

    }
  };
</script>

<style>
  .map-container {
    height: 100%;
  }
  .map {
    height: 100%;
  }
  @media (max-width: 749px) {
    .map {
      height: 300px;
    }
  }
</style>
