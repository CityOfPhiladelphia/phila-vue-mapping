<template>
  <!-- we need a container because this component can only contain one root div
  -->
  <div class="map-container">
    <!-- the leaflet map -->
    <div class="map" ref="map" />
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
    LatLng
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
    computed: {
      fullScreenMapEnabled() {
        return this.$store.state.fullScreenMapEnabled;
      },
      mapBounds() {
        return this.$store.state.map.bounds;
      }
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
    // updated(next, prev) {
    //   const markers = this.getMarkers();
    //   if (markers.length === 0) return;
    //   const latlngs = markers.map(marker => marker.getLatLng());
    //   console.log('updated', markers);
    //   const latLngBounds = new LatLngBounds(latlngs);
    //   console.log('llb', latLngBounds);
    //   this.$leafletElement.fitBounds(latLngBounds);
    // },
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
      }
      // getMarkers() {
      //   const children = this.$children;
      //   const MARKER_CLASSES = [
      //     '<Geojson>',
      //     '<VectorMarker>',
      //   ];
      //   const markers = children.filter(child => {
      //     const name = child._name;
      //     return MARKER_CLASSES.includes(name);
      //   });
      //   return markers.map(marker => marker.$leafletElement);
      // },
      // refit() {
      //   const markers = this.getMarkers();
      //   if (markers.length === 0) return;
      //   const latlngs = markers.map(marker => marker.getLatLng());
      //   console.log('updated', markers);
      //   const latLngBounds = new LatLngBounds(latlngs);
      //   console.log('llb', latLngBounds);
      //   this.$leafletElement.fitBounds(latLngBounds);
      // }
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
