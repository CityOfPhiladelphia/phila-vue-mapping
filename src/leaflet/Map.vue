<template>
  <div
    id="map-container"
    :class="mapContainerClass"
  >
    <!-- the leaflet map -->
    <div
      id="map"
      ref="map"
      class="map"
    >
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
  LatLngBounds,
} from 'leaflet';
import bindEvents from './util/bind-events';

export default {
  name: 'Map',
  props: [
    'center',
    'zoom',
    'attributionPosition',
    'zoomControlPosition',
    'minZoom',
    'maxZoom',
  ],
  computed: {
    shouldInitializeMap() {
      return this.$store.state.map.shouldInitialize;
    },
    cyclomediaActive() {
      return this.$store.state.cyclomedia.active;
    },
    pictometryActive() {
      return this.$store.state.pictometry.active;
    },
    picOrCycloActive() {
      if (this.cyclomediaActive || this.pictometryActive) {
        return true;
      }
      return false;
    },
    mapContainerClass() {
      let value;
      if (this.picOrCycloActive && (this.$config.cyclomedia.orientation === 'horizontal' || this.$config.pictometry.orientation === 'horizontal')) {
        if (this.$config.map.containerClassWCyclo) {
          value = this.$config.map.containerClassWCyclo;
        } else {
          value = 'height50';
        }
      } else if (this.picOrCycloActive) {
        if (this.$config.map.containerClassWCyclo) {
          value = this.$config.map.containerClassWCyclo;
        } else {
          value = 'height50';
        }
      } else if (this.$config.map.containerClass) {
        value = this.$config.map.containerClass;
      } else {
        value = 'map-container';
      }
      return value;
    },
    fullScreenCycloEnabled() {
      return this.$store.state.fullScreenCycloEnabled;
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
    },
  },
  watch: {
    center(nextCenter) {
      // console.log('Map.vue watch center is firing, nextCenter:', nextCenter);
      if (typeof nextCenter[0] == 'number') {
        // let center = L.latLng(nextCenter[1], nextCenter[0]);
        this.setMapView(nextCenter);
      }
    },
    zoom(nextZoom) {
      if (!nextZoom) {
        return;
      }
      this.$leafletElement.setZoom(nextZoom);
      this.$store.commit('setMapZoom', nextZoom);
    },
    mapBounds(nextBounds) {
      // console.log('watch nextBounds is firing, nextBounds:', nextBounds, 'this.$leafletElement:', this.$leafletElement);
      this.setMapBounds(nextBounds);
    },
    shouldInitializeMap(nextShouldInitializeMap) {
      if (nextShouldInitializeMap === true) {
        this.initializeMap();
      }
    },
    fullScreenCycloEnabled() {
      // console.log('Map.vue fullScreenCycloEnabled watch is firing, this.$leafletElement:', this.$leafletElement.invalidateSize);
      if (this.$leafletElement) {
        let leaf = this.$leafletElement;
        setTimeout(function() {
          leaf.invalidateSize();
        }, 500, this.$leafletElement);
      }
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
      // console.log('map.vue watch nextWebMapDisplayedLayers:', nextWebMapDisplayedLayers, 'intersectingLayers:', intersectingLayers);
      for (let layer of intersectingLayers) {
        if (!nextWebMapDisplayedLayers.includes(layer)) {
          this.$store.commit('setIntersectingFeatures', []);
          return;
        }
      }
    },
  },
  mounted() {
    // console.log('Map.vue mounted, this.center:', this.center, 'this.$props.zoom:', this.$props.zoom);
    if (this.$store.state.map.shouldInitialize) {
      this.initializeMap();
    }
  },
  methods: {
    initializeMap() {
      // console.log('Map.vue initializeMap is running');
      const map = this.$leafletElement = this.createLeafletElement();

      // move attribution and zoom controls
      map.attributionControl.setPosition(this.$props.attributionPosition || 'bottomright');
      map.zoomControl.setPosition(this.$props.zoomControlPosition);

      // put in state
      this.$store.commit('setMap', { map });

      this.setMapView(this.center);

      this.$nextTick(() => {
        map.attributionControl.setPrefix('<a target="_blank" href="//www.phila.gov/it/aboutus/units/Pages/GISServicesGroup.aspx">City of Philadelphia | CityGeo</a>');
      });

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
      // if (this.$config.map.clickToIdentifyFeatures) {
      //   map.on('click', this.identifyFeatures);
      // }

      const editableLayers = this.$store.state.editableLayers;
      if (editableLayers !== null) {
        map.addLayer(editableLayers);
      }

      map.on('draw:drawstart', () => {
        if(this.$store.state.editableLayers !== null){
          this.$store.state.editableLayers.clearLayers();
        }
        this.drawStartChange();
      });
      map.on('draw:drawstop', this.drawStopChange);
      map.on('draw:created', this.drawShapeChange);
      map.on('draw:created', (e) => {
        editableLayers.addLayer(e.layer);
      });

      this.$store.commit('setInitializedMap', true);
    },
    drawShapeChange(shape) {
      // console.log("drawShapeChange:", shape.layer);
      this.$store.commit('setDrawShape', shape.layer);
      this.$store.commit('setShapeSearchInput', shape.layer._latlngs[0]);
    },
    drawStartChange() {
      // console.log("DrawStart is working");
      this.$store.commit('setDrawStart', 'start');
    },
    drawStopChange() {
      // console.log("DrawStart is working");
      let store = this.$store;
      const myMethod = (function() {
        store.commit('setDrawStart', null);
      }).bind(store);
      setTimeout(myMethod, 250);
    },
    createLeafletElement() {
      const { zoomControlPosition, ...options } = this.$props;
      return new Map(this.$refs.map, options);
    },
    childDidMount(child) {
      child.addTo(this.$leafletElement);
    },
    setMapView(xy = [], zoom = this.zoom) {
      // console.log('Map.vue setMapView is running, xy:', xy);
      if (xy.length === 0) {
        return;
      }
      const [ lng, lat ] = xy;
      const latLng = new LatLng(lat, lng);

      // we used "setView" here because when you refreshed the app with an address in the url,
      // "panTo" was getting stepped on by "setZoom" and it was not happening
      // this.$nextTick(() => {
      // console.log('Map.vue this.$leafletElement.setView is running, latLng:', latLng);
      if (this.$leafletElement) {
        this.$leafletElement.setView(latLng, zoom);
      }
      // });
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
        map.fitBounds([[ bounds._northEast.lat, bounds._northEast.lng ],[ bounds._southWest.lat, bounds._southWest.lng ]]);
      }
    },

    // // this is used when the click should identify features
    // identifyFeatures(e) {
    //   console.log('identifyFeatures is running, e:', e);
    //   const map = this.$leafletElement;
    //   const clickBounds = new LatLngBounds(e.latlng, e.latlng);
    //   // console.log('map._layers', map._layers);
    //   let intersectingFeatures = [];
    //   let geometry;
    //   for (let layer in map._layers) {
    //     var overlay = map._layers[layer];
    //     // console.log('layer:', layer, 'overlay:', overlay);
    //     if (overlay._layers) {
    //       for (let oLayer in overlay._layers) {
    //         const feature = overlay._layers[oLayer];
    //         // console.log('feature:', feature);
    //         if (feature.feature) {
    //           geometry = feature.feature.geometry.type;
    //           // console.log('clickHandler LAYER:', layer, 'FEATURE:', feature, 'GEOMETRY:', geometry);
    //           let bounds;
    //           if (geometry === 'Polygon' || geometry === 'MultiPolygon') {
    //             // console.log('polygon or multipolygon');
    //             if (feature.contains(e.latlng)) {
    //               // console.log('about to run checkForDuplicates')
    //               this.checkForDuplicates(layer, feature, intersectingFeatures);
    //             }
    //           } else if (geometry === 'LineString') {
    //             // console.log('Line');
    //             bounds = feature.getBounds();
    //             if (bounds && clickBounds.intersects(bounds)) {
    //               this.checkForDuplicates(layer, feature, intersectingFeatures);
    //             }
    //           } else if (geometry === 'Point') {
    //             // console.log('Point');
    //             bounds = new LatLngBounds(feature._latlng, feature._latlng);
    //             if (bounds && clickBounds.intersects(bounds)) {
    //               this.checkForDuplicates(layer, feature, intersectingFeatures);
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    //   this.$store.commit('setPopupCoords', e.latlng);
    //   this.$store.commit('setIntersectingFeatures', intersectingFeatures);
    // },
    // checkForDuplicates(layer, feature, intersectingFeatures) {
    //   // console.log('checkForDuplicates is running, layer:', layer, 'feature:', feature);
    //   let ids = [];
    //   for (let i = 0; i < intersectingFeatures.length; i++) {
    //     ids[i] = layer + '_' + intersectingFeatures[i].feature.id;
    //   }
    //   // console.log('layer:', layer, 'feature.feature.id:', feature.feature.id);
    //   if (!ids.includes(layer + '_' + feature.feature.id)) {
    //     // console.log('checkForDuplicates going to push to intersectingFeatures:', layer, feature.feature.id);
    //     intersectingFeatures.push(feature);
    //   }
    // },
  },
};
</script>

<style>
  .map-container {
    height: 100%;
  }

  .map {
    height: 100%;
  }

  .map-container-350 {
    height: 100%;
  }

  /*
  .map-container {
    height: 100%;
  }

  .map-container-type2 {
    height: 100%;
  }

  .map {
    height: 100%;
  }

  .height100 {
    height: 100%;
  }

*/
  .height50 {
    height: 50%;
  }

/*
  @media (max-width: 749px) {
    .height50 {
      height: 300px;
    }

    .map-container {
      height: 300px;
    }

    .map-container-350 {
      height: 350px;
    }
  }

  @media screen and (max-width: 750px) {
    .map-container-type2 {
      height: 100%;
    }
  } */
</style>
