<template>
  <div :class="this.mapContainerClass">
    <!-- the leaflet map -->
    <div class="map"
         ref="map"
         id="map"
    />
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
    name: 'Map_',
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
      if (this.$config.map.clickToIdentifyFeatures) {
        map.on('click', this.identifyFeatures);
      }
    },
    watch: {
      center(nextCenter) {
        this.setMapView(nextCenter);
      },
      zoom(nextZoom) {
        if (!nextZoom) return;
        this.$leafletElement.setZoom(nextZoom);
        this.$store.commit('setMapZoom', nextZoom);
      },
      mapBounds(nextBounds) {
        console.log('watch nextBounds is firing, nextBounds:', nextBounds, 'this.$leafletElement:', this.$leafletElement);
        this.setMapBounds(nextBounds)
      },
      fullScreenMapEnabled() {
        // console.log('Map.vue fullScreenMapEnabled watch is firing');
        this.$leafletElement.invalidateSize();
      },
      webMapDisplayedLayers(nextWebMapDisplayedLayers) {
        let intersectingLayers = [];
        for (let feature of this.intersectingFeatures) {
          intersectingLayers.push(feature.feature.layerName);
        }
        console.log('map.vue watch nextWebMapDisplayedLayers:', nextWebMapDisplayedLayers, 'intersectingLayers:', intersectingLayers);
        for (let layer of intersectingLayers) {
          if (!nextWebMapDisplayedLayers.includes(layer)) {
            this.$store.commit('setIntersectingFeatures', []);
            return;
          }
        }
      },
    },
    computed: {
      mapContainerClass() {
        if (this.$config.map.containerClass) {
          return this.$config.map.containerClass
        } else {
          return 'map-container'
        }
      },
      fullScreenMapEnabled() {
        return this.$store.state.fullScreenMapEnabled;
      },
      mapBounds() {
        return this.$store.state.map.bounds;
      },
      webMapDisplayedLayers() {
        return this.$store.state.map.webMapDisplayedLayers;
      },
      intersectingFeatures() {
        return this.$store.state.map.intersectingFeatures;
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
        // this.$nextTick(() => {
        // console.log('Map.vue this.$leafletElement.setView is running, latLng:', latLng);
        this.$leafletElement.setView(latLng, zoom);
        // })
      },
      setMapBounds(bounds) {
        // console.log('setMapBounds is running, bounds:', bounds, bounds.isValid(), 'this.$leafletElement:', this.$leafletElement);
        if (bounds._northEast) {
          // console.log('MAP.VUE SETMAPBOUNDS IS RUNNING:', bounds._northEast.lat, bounds._northEast.lng, bounds._southWest.lat, bounds._southWest.lng);
          // const corner1 = L.latLng(bounds._northEast.lat, bounds._northEast.lng);
          // const corner2 = L.latLng(bounds._southWest.lat, bounds._southWest.lng);
          // const bounds2 = L.latLngBounds(corner2, corner1);
          // console.log('bounds2:', bounds2, bounds2.isValid())
          // this.$leafletElement.fitBounds(bounds);
          const map = this.$leafletElement;
          // console.log('bounds:', bounds, 'this.$leafletElement:', this.$leafletElement, 'map:', map);
          // map.fitBounds(bounds2);
          map.fitBounds([[bounds._northEast.lat, bounds._northEast.lng],[bounds._southWest.lat, bounds._southWest.lng]]);
        }
      },

      // this is used when the click should identify features
      identifyFeatures(e) {
        const map = this.$leafletElement
        const clickBounds = new LatLngBounds(e.latlng, e.latlng);
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
                  bounds = new LatLngBounds(feature._latlng, feature._latlng);
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

  .map-container-type2 {
    height: calc(100vh - 109px);
  }

  .map {
    height: 100%;
  }

  @media (max-width: 749px) {
    .map-container {
      height: 300px;
    }
  }

  /* @media screen and (max-width: 40em) { */
  @media screen and (max-width: 750px) {
    .map-container-type2 {
      height: calc(100vh - 141px);
    }
  }
</style>
