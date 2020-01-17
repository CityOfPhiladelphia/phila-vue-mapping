<template>
  <div
    id="mbmap-container"
    :class="mapContainerClass"
  >
    <!-- the mapbox map -->
    <div
      id="mbmap"
      ref="mbmap"
      class="mbmap"
    >
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>

// import {
//   Map,
//   LatLng,
//   LatLngBounds,
// } from 'mapbox-gl';

import * as mapboxgl from 'mapbox-gl';
// import { accessToken } from 'mapbox-gl';
console.log('mapboxgl:', mapboxgl, 'process.env.VUE_APP_MAPBOX_TOKEN:', process.env.VUE_APP_MAPBOX_TOKEN);

mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_TOKEN;

import bindEvents from './util/bind-events';

export default {
  name: 'MbMap',
  props: [
    'center',
    'zoom',
    'attributionPosition',
    'zoomControlPosition',
    'minZoom',
    'maxZoom',
    'container',
    'style_'
  ],
  computed: {
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
        value = 'height50';
        // value = this.$config.map.containerClassWCyclo;
      } else if (this.$config.map.containerClass) {
        value = this.$config.map.containerClass;
      } else {
        value = 'mbmap-container';
      }
      return value;
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
      // console.log('Map.vue watch center is firing, nextCenter:', nextCenter)
      if (typeof nextCenter[0] == 'number') {
        this.setMapView(nextCenter);
      }
    },
    zoom(nextZoom) {
      if (!nextZoom) {
        return;
      }
      this.$mapboxElement.setZoom(nextZoom);
      this.$store.commit('setMapZoom', nextZoom);
    },
    mapBounds(nextBounds) {
      // console.log('watch nextBounds is firing, nextBounds:', nextBounds, 'this.$mapboxElement:', this.$mapboxElement);
      this.setMapBounds(nextBounds);
    },
    fullScreenMapEnabled() {
      // console.log('Map.vue fullScreenMapEnabled watch is firing');
      this.$mapboxElement.invalidateSize();
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
    console.log('Map.vue mounted, this.center:', this.center, 'this.$props.zoom:', this.$props.zoom);
    const map = this.$mapboxElement = this.createMapboxElement();

    // move attribution and zoom controls
    // map.attributionControl.setPosition(this.$props.attributionPosition || 'bottomright');
    console.log('still going');
    // map.zoomControl.setPosition(this.$props.zoomControlPosition);

    // put in state
    // this.$store.commit('setMap', { map });

    // this.setMapView(this.center);

    // this.$nextTick(() => {
    //   map.attributionControl.setPrefix('<a target="_blank" href="//www.phila.gov/it/aboutus/units/Pages/GISServicesGroup.aspx">City of Philadelphia | CityGeo</a>');
    // });

    map.on('load', function() {

      map.addLayer({
        // "id": "road2",
        // "type": "line",
        "sources": {
          "type": "vector",
          // "tiles": ["https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/PVL_Original/VectorTileServer?token=gkbUYrWehy4cJuI1wh0fKWg19jKXm-_zjzSFpuiniRXOLcj1kTThOfc0YeI4WMqyINSiOVqN0evdNTc5bYAGkKhYdmEV4IaWBsDzbZzzfpv2DbWhj4X1mQVjOsYUZSMBCZNFrWhuk5cyKeMpbI6iDuegPC2yQZA46QqUT14PRpGUwI9U-ML_C4-5NZbdAFjqmsxVBEoW0lLG4b-Ibk4NQm3WXVGYUH9bPg24kGhaWFpjoA9zV-5OcyFYqk9FAdge/tile/{z}/{y}/{x}.pbf"]
          // "tiles": ["https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/PVL_Original/VectorTileServer/tile/{z}/{y}/{x}.pbf?token=gkbUYrWehy4cJuI1wh0fKWg19jKXm-_zjzSFpuiniRXOLcj1kTThOfc0YeI4WMqyINSiOVqN0evdNTc5bYAGkKhYdmEV4IaWBsDzbZzzfpv2DbWhj4X1mQVjOsYUZSMBCZNFrWhuk5cyKeMpbI6iDuegPC2yQZA46QqUT14PRpGUwI9U-ML_C4-5NZbdAFjqmsxVBEoW0lLG4b-Ibk4NQm3WXVGYUH9bPg24kGhaWFpjoA9zV-5OcyFYqk9FAdge"]
          "tiles": ["https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/PVL_Original/VectorTileServer/tile/{z}/{y}/{x}.pbf"]
        },
        // "source-layer": "road",
        // "layout": {
        //   "line-cap": "butt",
        //   "line-join": "miter"
        // },
        // "paint": {
        //   "line-color": "rgba(65,244,244,0.3)",
        //   "line-width": 3
        // }
      }, 'waterway-label');
    })

    // signal children to mount
    for (let child of this.$children) {
      // REVIEW it seems weird to pass children their own props. trying to
      // remember why this was necessary... binding issue?
      child.parentMounted(this, child.$props);
    }

    // TODO warn if trying to bind an event that doesn't exist
    bindEvents(this, this.$mapboxElement, this._events);
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

  },
  methods: {
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
      this.$store.commit('setDrawStart', null);
    },
    createMapboxElement() {
      const { zoomControlPosition, ...options } = this.$props;
      options.style=options.style_
      console.log('createMapboxElement is running, options:', options, 'this.$refs.mbmap:', this.$refs.mbmap);
      // return new Map(this.$refs.map, options);
      return new mapboxgl.Map(options);
    },
    childDidMount(child) {
      child.addTo(this.$mapboxElement);
    },
    setMapView(xy = [], zoom = this.zoom) {
      // console.log('Map.vue setMapView is running, xy:', xy)
      if (xy.length === 0) {
        return;
      }
      const [ lng, lat ] = xy;
      const latLng = new LatLng(lat, lng);

      // we used "setView" here because when you refreshed the app with an address in the url,
      // "panTo" was getting stepped on by "setZoom" and it was not happening
      this.$nextTick(() => {
        // console.log('Map.vue this.$mapboxElement.setView is running, latLng:', latLng);
        this.$mapboxElement.setView(latLng, zoom);
      });
    },
    setMapBounds(bounds) {
      // console.log('setMapBounds is running, bounds:', bounds, bounds.isValid(), 'this.$mapboxElement:', this.$mapboxElement);
      if (bounds._northEast) {
        // console.log('MAP.VUE SETMAPBOUNDS IS RUNNING:', bounds._northEast.lat, bounds._northEast.lng, bounds._southWest.lat, bounds._southWest.lng);
        // const corner1 = L.latLng(bounds._northEast.lat, bounds._northEast.lng);
        // const corner2 = L.latLng(bounds._southWest.lat, bounds._southWest.lng);
        // const bounds2 = L.latLngBounds(corner2, corner1);
        // console.log('bounds2:', bounds2, bounds2.isValid())
        // this.$mapboxElement.fitBounds(bounds);
        const map = this.$mapboxElement;
        // console.log('bounds:', bounds, 'this.$mapboxElement:', this.$mapboxElement, 'map:', map);
        // map.fitBounds(bounds2);
        map.fitBounds([[ bounds._northEast.lat, bounds._northEast.lng ],[ bounds._southWest.lat, bounds._southWest.lng ]]);
      }
    },
  },
};
</script>

<style>
  .mbmap-container {
    height: 100%;
  }

  .mbmap-container-350 {
    height: 100%;
  }

  .mbmap-container-type2 {
    height: 100%;
    /* height: calc(100vh - 109px); */
  }

  .map {
    height: 100%;
  }

  .height100 {
    height: 100%;
  }

  .height50 {
    height: 50%;
  }

  @media (max-width: 749px) {
    .height50 {
      height: 300px;
    }

    .mbmap-container {
      height: 300px;
    }

    .mbmap-container-350 {
      height: 350px;
    }
  }

  /* @media screen and (max-width: 40em) { */
  @media screen and (max-width: 750px) {
    .mbmap-container-type2 {
      height: 100%;
      /* height: calc(100vh - 141px); */
    }
  }
</style>
