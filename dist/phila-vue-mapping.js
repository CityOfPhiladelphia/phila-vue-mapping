(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@fortawesome/fontawesome-svg-core'), require('@fortawesome/vue-fontawesome'), require('esri-leaflet'), require('L-esri-WebMap'), require('lodash.debounce'), require('leaflet-vector-icon'), require('leaflet-measure'), require('axios'), require('leaflet'), require('proj4'), require('jquery'), require('blueimp-md5')) :
	typeof define === 'function' && define.amd ? define(['exports', '@fortawesome/fontawesome-svg-core', '@fortawesome/vue-fontawesome', 'esri-leaflet', 'L-esri-WebMap', 'lodash.debounce', 'leaflet-vector-icon', 'leaflet-measure', 'axios', 'leaflet', 'proj4', 'jquery', 'blueimp-md5'], factory) :
	(factory((global.philaVueMapping = {}),global.fontawesomeSvgCore,global.vueFontAwesome,global.L.esri,global.LEsriWebMap,global.debounce,global.leafletVectorIcon,global.L.Control.Measure,global.axios,global.L,global.proj4,global.$,global.md5));
}(this, (function (exports,fontawesomeSvgCore,vueFontawesome,esriLeaflet,LEsriWebMap,debounce,VectorIcon,MeasureControl,axios,L$1,proj4,$$1,md5) { 'use strict';

	debounce = debounce && debounce.hasOwnProperty('default') ? debounce['default'] : debounce;
	VectorIcon = VectorIcon && VectorIcon.hasOwnProperty('default') ? VectorIcon['default'] : VectorIcon;
	MeasureControl = MeasureControl && MeasureControl.hasOwnProperty('default') ? MeasureControl['default'] : MeasureControl;
	axios = axios && axios.hasOwnProperty('default') ? axios['default'] : axios;
	proj4 = proj4 && proj4.hasOwnProperty('default') ? proj4['default'] : proj4;
	$$1 = $$1 && $$1.hasOwnProperty('default') ? $$1['default'] : $$1;
	md5 = md5 && md5.hasOwnProperty('default') ? md5['default'] : md5;

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var faDotCircle = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	var prefix = 'far';
	var iconName = 'dot-circle';
	var width = 512;
	var height = 512;
	var ligatures = [];
	var unicode = 'f192';
	var svgPathData = 'M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z';

	exports.definition = {
	  prefix: prefix,
	  iconName: iconName,
	  icon: [
	    width,
	    height,
	    ligatures,
	    unicode,
	    svgPathData
	  ]};

	exports.faDotCircle = exports.definition;
	exports.prefix = prefix;
	exports.iconName = iconName;
	exports.width = width;
	exports.height = height;
	exports.ligatures = ligatures;
	exports.unicode = unicode;
	exports.svgPathData = svgPathData;
	});

	unwrapExports(faDotCircle);
	var faDotCircle_1 = faDotCircle.definition;
	var faDotCircle_2 = faDotCircle.faDotCircle;
	var faDotCircle_3 = faDotCircle.prefix;
	var faDotCircle_4 = faDotCircle.iconName;
	var faDotCircle_5 = faDotCircle.width;
	var faDotCircle_6 = faDotCircle.height;
	var faDotCircle_7 = faDotCircle.ligatures;
	var faDotCircle_8 = faDotCircle.unicode;
	var faDotCircle_9 = faDotCircle.svgPathData;

	var faSearch = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	var prefix = 'fas';
	var iconName = 'search';
	var width = 512;
	var height = 512;
	var ligatures = [];
	var unicode = 'f002';
	var svgPathData = 'M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z';

	exports.definition = {
	  prefix: prefix,
	  iconName: iconName,
	  icon: [
	    width,
	    height,
	    ligatures,
	    unicode,
	    svgPathData
	  ]};

	exports.faSearch = exports.definition;
	exports.prefix = prefix;
	exports.iconName = iconName;
	exports.width = width;
	exports.height = height;
	exports.ligatures = ligatures;
	exports.unicode = unicode;
	exports.svgPathData = svgPathData;
	});

	unwrapExports(faSearch);
	var faSearch_1 = faSearch.definition;
	var faSearch_2 = faSearch.faSearch;
	var faSearch_3 = faSearch.prefix;
	var faSearch_4 = faSearch.iconName;
	var faSearch_5 = faSearch.width;
	var faSearch_6 = faSearch.height;
	var faSearch_7 = faSearch.ligatures;
	var faSearch_8 = faSearch.unicode;
	var faSearch_9 = faSearch.svgPathData;

	var faTimes = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	var prefix = 'fas';
	var iconName = 'times';
	var width = 352;
	var height = 512;
	var ligatures = [];
	var unicode = 'f00d';
	var svgPathData = 'M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z';

	exports.definition = {
	  prefix: prefix,
	  iconName: iconName,
	  icon: [
	    width,
	    height,
	    ligatures,
	    unicode,
	    svgPathData
	  ]};

	exports.faTimes = exports.definition;
	exports.prefix = prefix;
	exports.iconName = iconName;
	exports.width = width;
	exports.height = height;
	exports.ligatures = ligatures;
	exports.unicode = unicode;
	exports.svgPathData = svgPathData;
	});

	unwrapExports(faTimes);
	var faTimes_1 = faTimes.definition;
	var faTimes_2 = faTimes.faTimes;
	var faTimes_3 = faTimes.prefix;
	var faTimes_4 = faTimes.iconName;
	var faTimes_5 = faTimes.width;
	var faTimes_6 = faTimes.height;
	var faTimes_7 = faTimes.ligatures;
	var faTimes_8 = faTimes.unicode;
	var faTimes_9 = faTimes.svgPathData;

	var faMapMarkerAlt = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	var prefix = 'fas';
	var iconName = 'map-marker-alt';
	var width = 384;
	var height = 512;
	var ligatures = [];
	var unicode = 'f3c5';
	var svgPathData = 'M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z';

	exports.definition = {
	  prefix: prefix,
	  iconName: iconName,
	  icon: [
	    width,
	    height,
	    ligatures,
	    unicode,
	    svgPathData
	  ]};

	exports.faMapMarkerAlt = exports.definition;
	exports.prefix = prefix;
	exports.iconName = iconName;
	exports.width = width;
	exports.height = height;
	exports.ligatures = ligatures;
	exports.unicode = unicode;
	exports.svgPathData = svgPathData;
	});

	unwrapExports(faMapMarkerAlt);
	var faMapMarkerAlt_1 = faMapMarkerAlt.definition;
	var faMapMarkerAlt_2 = faMapMarkerAlt.faMapMarkerAlt;
	var faMapMarkerAlt_3 = faMapMarkerAlt.prefix;
	var faMapMarkerAlt_4 = faMapMarkerAlt.iconName;
	var faMapMarkerAlt_5 = faMapMarkerAlt.width;
	var faMapMarkerAlt_6 = faMapMarkerAlt.height;
	var faMapMarkerAlt_7 = faMapMarkerAlt.ligatures;
	var faMapMarkerAlt_8 = faMapMarkerAlt.unicode;
	var faMapMarkerAlt_9 = faMapMarkerAlt.svgPathData;

	var faCaretLeft = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	var prefix = 'fas';
	var iconName = 'caret-left';
	var width = 192;
	var height = 512;
	var ligatures = [];
	var unicode = 'f0d9';
	var svgPathData = 'M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z';

	exports.definition = {
	  prefix: prefix,
	  iconName: iconName,
	  icon: [
	    width,
	    height,
	    ligatures,
	    unicode,
	    svgPathData
	  ]};

	exports.faCaretLeft = exports.definition;
	exports.prefix = prefix;
	exports.iconName = iconName;
	exports.width = width;
	exports.height = height;
	exports.ligatures = ligatures;
	exports.unicode = unicode;
	exports.svgPathData = svgPathData;
	});

	unwrapExports(faCaretLeft);
	var faCaretLeft_1 = faCaretLeft.definition;
	var faCaretLeft_2 = faCaretLeft.faCaretLeft;
	var faCaretLeft_3 = faCaretLeft.prefix;
	var faCaretLeft_4 = faCaretLeft.iconName;
	var faCaretLeft_5 = faCaretLeft.width;
	var faCaretLeft_6 = faCaretLeft.height;
	var faCaretLeft_7 = faCaretLeft.ligatures;
	var faCaretLeft_8 = faCaretLeft.unicode;
	var faCaretLeft_9 = faCaretLeft.svgPathData;

	var faCaretRight = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	var prefix = 'fas';
	var iconName = 'caret-right';
	var width = 192;
	var height = 512;
	var ligatures = [];
	var unicode = 'f0da';
	var svgPathData = 'M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z';

	exports.definition = {
	  prefix: prefix,
	  iconName: iconName,
	  icon: [
	    width,
	    height,
	    ligatures,
	    unicode,
	    svgPathData
	  ]};

	exports.faCaretRight = exports.definition;
	exports.prefix = prefix;
	exports.iconName = iconName;
	exports.width = width;
	exports.height = height;
	exports.ligatures = ligatures;
	exports.unicode = unicode;
	exports.svgPathData = svgPathData;
	});

	unwrapExports(faCaretRight);
	var faCaretRight_1 = faCaretRight.definition;
	var faCaretRight_2 = faCaretRight.faCaretRight;
	var faCaretRight_3 = faCaretRight.prefix;
	var faCaretRight_4 = faCaretRight.iconName;
	var faCaretRight_5 = faCaretRight.width;
	var faCaretRight_6 = faCaretRight.height;
	var faCaretRight_7 = faCaretRight.ligatures;
	var faCaretRight_8 = faCaretRight.unicode;
	var faCaretRight_9 = faCaretRight.svgPathData;

	// inspired by https://github.com/KoRiGaN/Vue2Leaflet/blob/master/src/utils/eventsBinder.js
	function bindEvents(vue, leafletElement, events) {
	  // get just leaflet events
	  var leafletEvents = Object.keys(events)
	                              .filter(function (eventName) {
	                                return eventName.startsWith('l-');
	                              })
	                              .map(function (eventName) { return eventName.slice(2); });

	  var loop = function () {
	    var leafletEvent = list[i];

	    var vueEvent = 'l-' + leafletEvent;
	    leafletElement.on(leafletEvent, function (e) {
	      vue.$emit(vueEvent, e);
	    });
	  };

	  for (var i = 0, list = leafletEvents; i < list.length; i += 1) loop();
	}

	function objectWithoutProperties (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .map-container { height: 100%; } .map-container-type2 { height: calc(100vh - 109px); } .map { height: 100%; } @media (max-width: 749px) { .map-container { height: 300px; } } /* @media screen and (max-width: 40em) { */ @media screen and (max-width: 750px) { .map-container-type2 { height: calc(100vh - 141px); } } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var _Map = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:this.mapContainerClass},[_c('div',{ref:"map",staticClass:"map",attrs:{"id":"map"}}),_vm._v(" "),_c('div',[_vm._t("default")],2)])},staticRenderFns: [],
	  props: [
	    'center',
	    'zoom',
	    'zoomControlPosition',
	    'minZoom',
	    'maxZoom' ],
	  mounted: function mounted() {
	    var map = this.$leafletElement = this.createLeafletElement();

	    // move zoom control
	    map.zoomControl.setPosition(this.$props.zoomControlPosition);

	    // put in state
	    this.$store.commit('setMap', { map: map });

	    this.setMapView(this.center);

	    this.$nextTick(function () {
	      map.attributionControl.setPrefix('<a target="_blank" href="//www.phila.gov/it/aboutus/units/Pages/GISServicesGroup.aspx">City of Philadelphia | CityGeo</a>');
	    });

	    // signal children to mount
	    for (var i = 0, list = this.$children; i < list.length; i += 1) {
	      // REVIEW it seems weird to pass children their own props. trying to
	      // remember why this was necessary... binding issue?
	      var child = list[i];

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
	    center: function center(nextCenter) {
	      this.setMapView(nextCenter);
	    },
	    zoom: function zoom(nextZoom) {
	      if (!nextZoom) { return; }
	      this.$leafletElement.setZoom(nextZoom);
	      this.$store.commit('setMapZoom', nextZoom);
	    },
	    mapBounds: function mapBounds(nextBounds) {
	      console.log('watch nextBounds is firing, nextBounds:', nextBounds, 'this.$leafletElement:', this.$leafletElement);
	      this.setMapBounds(nextBounds);
	    },
	    fullScreenMapEnabled: function fullScreenMapEnabled() {
	      // console.log('Map.vue fullScreenMapEnabled watch is firing');
	      this.$leafletElement.invalidateSize();
	    },
	    webMapDisplayedLayers: function webMapDisplayedLayers(nextWebMapDisplayedLayers) {
	      var intersectingLayers = [];
	      for (var i = 0, list = this.intersectingFeatures; i < list.length; i += 1) {
	        var feature = list[i];

	        intersectingLayers.push(feature.feature.layerName);
	      }
	      console.log('map.vue watch nextWebMapDisplayedLayers:', nextWebMapDisplayedLayers, 'intersectingLayers:', intersectingLayers);
	      for (var i$1 = 0, list$1 = intersectingLayers; i$1 < list$1.length; i$1 += 1) {
	        var layer = list$1[i$1];

	        if (!nextWebMapDisplayedLayers.includes(layer)) {
	          this.$store.commit('setIntersectingFeatures', []);
	          return;
	        }
	      }
	    },
	  },
	  computed: {
	    mapContainerClass: function mapContainerClass() {
	      if (this.$config.map.containerClass) {
	        return this.$config.map.containerClass
	      } else {
	        return 'map-container'
	      }
	    },
	    fullScreenMapEnabled: function fullScreenMapEnabled() {
	      return this.$store.state.fullScreenMapEnabled;
	    },
	    mapBounds: function mapBounds() {
	      return this.$store.state.map.bounds;
	    },
	    webMapDisplayedLayers: function webMapDisplayedLayers() {
	      return this.$store.state.map.webMapDisplayedLayers;
	    },
	    intersectingFeatures: function intersectingFeatures() {
	      return this.$store.state.map.intersectingFeatures;
	    }
	  },
	  methods: {
	    createLeafletElement: function createLeafletElement() {
	      var ref = this.$props;
	      var zoomControlPosition = ref.zoomControlPosition;
	      var rest = objectWithoutProperties( ref, ["zoomControlPosition"] );
	      var options = rest;
	      return new L$1.Map(this.$refs.map, options);
	    },
	    childDidMount: function childDidMount(child) {
	      child.addTo(this.$leafletElement);
	    },
	    setMapView: function setMapView(xy, zoom) {
	      if ( xy === void 0 ) xy = [];
	      if ( zoom === void 0 ) zoom = this.zoom;

	      if (xy.length === 0) { return; }
	      var lng = xy[0];
	      var lat = xy[1];
	      var latLng = new L$1.LatLng(lat, lng);

	      // we used "setView" here because when you refreshed the app with an address in the url,
	      // "panTo" was getting stepped on by "setZoom" and it was not happening
	      // this.$nextTick(() => {
	      // console.log('Map.vue this.$leafletElement.setView is running, latLng:', latLng);
	      this.$leafletElement.setView(latLng, zoom);
	      // })
	    },
	    setMapBounds: function setMapBounds(bounds) {
	      // console.log('setMapBounds is running, bounds:', bounds, bounds.isValid(), 'this.$leafletElement:', this.$leafletElement);
	      if (bounds._northEast) {
	        // console.log('MAP.VUE SETMAPBOUNDS IS RUNNING:', bounds._northEast.lat, bounds._northEast.lng, bounds._southWest.lat, bounds._southWest.lng);
	        // const corner1 = L.latLng(bounds._northEast.lat, bounds._northEast.lng);
	        // const corner2 = L.latLng(bounds._southWest.lat, bounds._southWest.lng);
	        // const bounds2 = L.latLngBounds(corner2, corner1);
	        // console.log('bounds2:', bounds2, bounds2.isValid())
	        // this.$leafletElement.fitBounds(bounds);
	        var map = this.$leafletElement;
	        // console.log('bounds:', bounds, 'this.$leafletElement:', this.$leafletElement, 'map:', map);
	        // map.fitBounds(bounds2);
	        map.fitBounds([[bounds._northEast.lat, bounds._northEast.lng],[bounds._southWest.lat, bounds._southWest.lng]]);
	      }
	    },

	    // this is used when the click should identify features
	    identifyFeatures: function identifyFeatures(e) {
	      var map = this.$leafletElement;
	      var clickBounds = L.latLngBounds(e.latlng, e.latlng);
	      // console.log('clickHandler in Map is starting, e:', e, 'clickBounds:', clickBounds);
	      // console.log('map._layers', map._layers);
	      var intersectingFeatures = [];
	      var geometry;
	      for (var layer in map._layers) {
	        var overlay = map._layers[layer];
	        // console.log('layer:', layer, 'overlay:', overlay);
	        if (overlay._layers) {
	          for (var oLayer in overlay._layers) {
	            var feature = overlay._layers[oLayer];
	            // console.log('feature:', feature);
	            if (feature.feature) {
	              geometry = feature.feature.geometry.type;
	              // console.log('clickHandler LAYER:', layer, 'FEATURE:', feature, 'GEOMETRY:', geometry);
	              var bounds = (void 0);
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
	    checkForDuplicates: function checkForDuplicates(layer, feature, intersectingFeatures) {
	      // console.log('checkForDuplicates is running, layer:', layer, 'feature:', feature);
	      var ids = [];
	      for (var i = 0; i < intersectingFeatures.length; i++) {
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

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var Control = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("default")],2)},staticRenderFns: [],
	  props: ['position'],
	  methods: {
	    createLeafletElement: function createLeafletElement(L) {
	      // console.log('Control.vue createLeafletElement is running')
	      // subclass Control to accept an el which gets mounted to the map
	      var ControlParent = /*@__PURE__*/(function (superclass) {
	        function ControlParent(el, options) {
	          superclass.call(this, options);
	          this.el = el;
	        }

	        if ( superclass ) ControlParent.__proto__ = superclass;
	        ControlParent.prototype = Object.create( superclass && superclass.prototype );
	        ControlParent.prototype.constructor = ControlParent;
	        ControlParent.prototype.onAdd = function onAdd () {
	          var el = this.el;

	          // keep clicks from hitting the map
	          L.DomEvent.disableClickPropagation(el);
	          L.DomEvent.disableScrollPropagation(el);

	          return el;
	        };

	        return ControlParent;
	      }(L.Control));

	      var el = this.$el;
	      // console.log('Control.vue el:', el);
	      return new ControlParent(el, {
	        position: this.position
	      });
	    },
	    parentMounted: function parentMounted(parent, props) {
	      // console.log('Control.vue parentMounted is running, parent:', parent, 'props:', props);
	      var leafletElement = this.createLeafletElement(L$1);
	      this.$leafletElement = leafletElement;
	      var map = parent.$leafletElement;
	      // console.log('Control.vue parentMounted is calling addTo(map)');
	      leafletElement.addTo(map);
	    }
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .leaflet-fullleft { position: absolute; bottom: 0px; /* possible because the placeholder's parent is the map */ left: 0px; padding-bottom: 10px; z-index: 500; } .leaflet-fulltop { position: absolute; top: 10px; left: 0px; padding-bottom: 10px; z-index: 500; } .leaflet-centervert { /* position: relative; */ /* top: 100px; left: 0px; */ /* padding-top: 40%; */ padding-bottom: 30%; z-index: 500; } .leaflet-almostleft { position: absolute; bottom: 0px; left: 30px; padding-bottom: 10px; z-index: 500; } .leaflet-almostleft .leaflet-control { margin-bottom: 0px; } .leaflet-almostright { position: absolute; top: 0px; right: 60px; padding-bottom: 10px; z-index: 500; } .leaflet-almostright .leaflet-control { margin-top: 10px; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .leaflet-popup-content { margin-top: 8px; margin-bottom: 8px; } .pagination { margin-bottom: 0px; } .leaflet-popup-close-button { font-size: 24px !important; height: 24px !important; line-height: 24px !important; width: 24px !important; } .inline-div { display: inline-block; } .popup-div { font-size: 14px; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .opacity_slider_control .ui-slider-range { background-image: none; background-color: #646464; height: 200px; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /*# sourceMappingURL=FeatureLayer.vue.map */"; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	function generateUniqueId() {
	  return 'id-' + Math.random().toString(36).substring(7);
	}

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .pvm-search-control-form[data-v-6340ff46] { display: inline-block; } /* Container */ .pvm-search-control-container[data-v-6340ff46] { display: inline-block; border-radius: 2px; box-shadow:0 2px 4px rgba(0,0,0,0.2),0 -1px 0px rgba(0,0,0,0.02); width: 305px; } .pvm-container-non-mobile[data-v-6340ff46] { height: 48px; } .pvm-container-mobile[data-v-6340ff46] { height: 38px; } /* Input */ .pvm-search-control-input[data-v-6340ff46] { display: inline-block; border: 0; padding: 15px; font-family: 'Montserrat', 'Tahoma', sans-serif; font-size: 16px; width: 250px; } .pvm-input-non-mobile[data-v-6340ff46] { height: 48px; } .pvm-input-mobile[data-v-6340ff46] { height: 38px; } /* Button */ .pvm-search-control-button[data-v-6340ff46] { display: inline-block; color: #fff; background: #2176d2; padding: 0px; width: 50px; } .pvm-button-non-mobile[data-v-6340ff46] { height: 48px; line-height: 48px; } .pvm-button-mobile[data-v-6340ff46] { height: 38px; line-height: 38px; padding-top: 1px; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	({render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:'pvm-search-control-container ' + this.containerClass,style:(this.containerStyle)},[_c('form',{staticClass:"pvm-search-control-form",attrs:{"autocomplete":"off","id":"search-form"},on:{"submit":function($event){$event.preventDefault();return _vm.handleSearchFormSubmit($event)}}},[_c('input',{class:'pvm-search-control-input ' + this.inputClass,style:(this.inputStyle),attrs:{"id":_vm.inputID,"placeholder":this.$props.placeholder || 'Search the map',"tabindex":"0"},domProps:{"value":this.addressEntered},on:{"keyup":_vm.didType}})]),_vm._v(" "),(this.addressEntered != '' && this.addressEntered != null)?_c('button',{class:'pvm-search-control-button ' + this.buttonClass,on:{"click":_vm.handleFormX}},[_c('font-awesome-icon',{attrs:{"icon":"times"}})],1):_vm._e(),_vm._v(" "),_c('button',{class:'pvm-search-control-button ' + this.buttonClass,attrs:{"name":"pvm-search-control-button","tabindex":"-1"},on:{"click":this.handleSearchFormSubmit}},[_c('font-awesome-icon',{attrs:{"icon":"search"}})],1),_vm._v(" "),_vm._t("address-candidates-slot")],2)},staticRenderFns: [],_scopeId: 'data-v-6340ff46',
	  props: [
	    'position',
	    'widthFromConfig',
	    'placeholder' ],
	  data: function data() {
	    var data = {
	      containerStyle: {
	        'width': '305px',
	      },
	      inputStyle: {
	        'width': '250px',
	      },
	      inputID: generateUniqueId(),
	      addressEntered: null,
	    };
	    return data;
	  },
	  created: function created() {
	    window.addEventListener('resize', this.handleWindowResize);
	    this.handleWindowResize();
	  },
	  watch: {
	    addressEntered: function addressEntered(nextValue) {
	      this.handleWindowResize();
	    }
	  },
	  computed: {
	    map: function map() {
	      return this.$store.state.map.map;
	    },
	    // addressEntered() {
	    //   return this.$store.state.addressEntered;
	    // },
	    inputWidth: function inputWidth() {
	      // if (this.addressAutocompleteEnabled) {
	        if (this.addressEntered === '' || this.addressEntered === null) {
	          return this.$props.widthFromConfig - 55;
	        } else {
	          return this.$props.widthFromConfig - 108;
	        }
	      // } else {
	      //   return this.$props.widthFromConfig - 55;
	      // }
	    },
	    inputClass: function inputClass() {
	      if (this.isMobileOrTablet) {
	        return 'pvm-input-mobile';
	      } else {
	        return 'pvm-input-non-mobile';
	      }
	    },
	    containerClass: function containerClass() {
	      if (this.isMobileOrTablet) {
	        return 'pvm-container-mobile';
	      } else {
	        return 'pvm-container-non-mobile';
	      }
	    },
	    buttonClass: function buttonClass() {
	      if (this.isMobileOrTablet) {
	        return 'pvm-button-mobile'
	      } else {
	        return 'pvm-button-non-mobile'
	      }
	    },
	    addressAutocompleteEnabled: function addressAutocompleteEnabled() {
	      // TODO this is temporarily disabled
	      if (this.$config.addressInput) {
	        if (this.$config.addressInput.autocompleteEnabled === true) {
	          return true;
	        } else {
	          return false;
	        }
	      } else {
	        return false;
	      }
	    },
	    isMobileOrTablet: function isMobileOrTablet() {
	      return this.$store.state.isMobileOrTablet;
	    },
	  },
	  methods: {
	    createLeafletElement: function createLeafletElement(L) {
	      // console.log('AddressInput.vue createLeafletElement is running')
	      // subclass Control to accept an el which gets mounted to the map
	      var ControlParent = /*@__PURE__*/(function (superclass) {
	        function ControlParent(el, options) {
	          superclass.call(this, options);
	          this.el = el;
	        }

	        if ( superclass ) ControlParent.__proto__ = superclass;
	        ControlParent.prototype = Object.create( superclass && superclass.prototype );
	        ControlParent.prototype.constructor = ControlParent;
	        ControlParent.prototype.onAdd = function onAdd () {
	          var el = this.el;

	          // keep clicks from hitting the map
	          L.DomEvent.disableClickPropagation(el);
	          L.DomEvent.disableScrollPropagation(el);

	          return el;
	        };

	        return ControlParent;
	      }(L.Control));

	      var el = this.$el;
	      return new ControlParent(el, {
	        position: this.position
	      });
	    },
	    parentMounted: function parentMounted(parent, props) {
	      // console.log('AddressInput.vue parentMounted is running, parent:', parent, 'props:', props);
	      var leafletElement = this.createLeafletElement(L$1);
	      this.$leafletElement = leafletElement;
	      var map = this.map;
	      leafletElement.addTo(map);
	    },
	    didType: debounce(function (e) {
	        // console.log('debounce is running');
	        var ref = e.target;
	        var value = ref.value;
	        this.$data.addressEntered = value;
	        // this.$store.commit('setAddressEntered', value);

	        if (this.addressAutocompleteEnabled) {
	          // console.log('debounce is running, e:', e, 'this:', this);
	          if (e.key === "ArrowDown") {
	            document.getElementById('address-candidate-list-0').focus();
	            return;
	          }
	          // const { value } = e.target;
	          this.getCandidates(value);
	          // this.$store.commit('setAddressEntered', value);
	          if (e.key !== "Enter") {
	            // console.log('AddressInput.vue didType is running, e.key !== "Enter"');
	            this.$store.commit('setShouldShowAddressCandidateList', true);
	          }
	        }
	      }, 300
	    ),
	    getCandidates: function getCandidates(address) {
	      // console.log('getCandidates is running, address:', address);
	      axios.get('https://cqvfg1pm72.execute-api.us-east-1.amazonaws.com/dev/first-api-test/', {
	        params: {
	          address: address,
	        },
	      })
	        .then(this.didGetCandidates)
	        .catch(this.didGetCandidatesError);
	    },
	    didGetCandidates: function didGetCandidates(res) {
	      var ref = res.data;
	      var matches = ref.matches;
	      // console.log('matches:', matches, 'matches map:', matches.map(x => x.address));
	      var matchesArray = matches.map(function (x) { return x.address; });
	      this.$store.commit('setCandidates', matchesArray);
	    },
	    didGetCandidatesError: function didGetCandidatesError(err) {
	      console.log('error getting candidates', err);
	      this.$store.commit('setCandidates', []);
	    },
	    handleFormX: function handleFormX() {
	      console.log('handleFormX is running');
	      this.$data.addressEntered = '';
	      // this.$store.commit('setAddressEntered', '');
	      this.$store.commit('setShouldShowAddressCandidateList', false);
	      this.$store.commit('setCandidates', []);
	    },
	    handleSearchFormSubmit: function handleSearchFormSubmit() {
	      console.log('handleSearchFormSubmit is running');
	      var value;
	      if (this.addressAutocompleteEnabled){
	        value = addressEntered;
	        // value = this.$store.state.addressEntered;
	      } else {
	        // if (document.querySelector('#' + inputID)) {
	        value = document.querySelector('#' + this.$data.inputID.toString()).value;
	        // } else if (document.querySelector('#pvm-search-control-input')) {
	        //   value = document.querySelector('#pvm-search-control-input')
	        // } else {
	        //   return;
	        // }
	      }
	      // console.log('phila-vue-comps AddressInput.vue, handleSearchFormSubmit is running, value:', value);
	      this.$controller.handleSearchFormSubmit(value);
	      // this.$store.commit('setAddressEntered', value);
	    },
	    handleWindowResize: function handleWindowResize() {
	      var addressEntered = this.addressEntered;
	      // console.log('AddressInput.vue handleWindowResize is running', window.innerWidth, 'addressEntered:', addressEntered);
	      if (window.innerWidth >= 850) {
	        this.containerStyle.width = this.$props.widthFromConfig + 'px';
	        if (addressEntered === '' || addressEntered === null) {
	          this.inputStyle.width = this.$props.widthFromConfig - 55 + 'px';
	        } else {
	          this.inputStyle.width = this.$props.widthFromConfig - 108 + 'px';
	        }
	      } else if (window.innerWidth >= 750) {
	        this.containerStyle.width = this.$props.widthFromConfig - 100 + 'px';
	        if (addressEntered === '' || addressEntered === null) {
	          this.inputStyle.width = this.$props.widthFromConfig - 155 + 'px';
	        } else {
	          this.inputStyle.width = this.$props.widthFromConfig - 208 + 'px';
	        }
	      } else {
	        this.containerStyle.width = '300px';
	        if (addressEntered === '' || addressEntered === null) {
	          this.inputStyle.width = '245px';
	        } else {
	          this.inputStyle.width = '192px';
	        }
	      }
	    }
	  }
	});

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .list-group[data-v-557d70bd] { height: 300px; width: 250px; overflow: auto; margin-top: 1px !important; } .list-group-full[data-v-557d70bd] { height: 300px; width: 197px; overflow: auto; margin-top: 1px !important; } .list-group-mobile[data-v-557d70bd] { height: 300px; width: 250px; overflow: auto; margin-top: 1px !important; } .list-group-mobile-full[data-v-557d70bd] { height: 300px; width: 197px; overflow: auto; margin-top: 1px !important; } ul[data-v-557d70bd] { list-style-type: none; margin-left: 0px; } .list-group-item[data-v-557d70bd] { /* width: 237px; */ display: block; border-radius: 2px; box-shadow:0 2px 4px rgba(0,0,0,0.2),0 -1px 0px rgba(0,0,0,0.02); border: 2; background-color: white; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; font-family: 'Montserrat', 'Tahoma', sans-serif; font-size: 14px; font-weight: normal; } .list-group-item[data-v-557d70bd]:hover { background-color: #ffefa2; font-weight: bold; } /*small*/ @media screen and (max-width: 39.9375em) { .list-group[data-v-557d70bd] { width: 200px; } .list-group-mobile[data-v-557d70bd] { width: 200px; } .list-group-full[data-v-557d70bd] { width: 147px; } .list-group-mobile-full[data-v-557d70bd] { width: 158px; } } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /* .fa-lg { vertical-align: -10%; } */ "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .button-image[data-v-24c2c164] { vertical-align: top; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
	var methods = Control.methods;

	({render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"leaflet-bar easy-button-container leaflet-control"},[_c('button',{on:{"click":_vm.handleImageryToggleButtonClick}},[_c('span',{staticClass:"button-state state-unnamed-state unnamed-state-active"},[_c('img',{staticClass:"button-image",attrs:{"src":_vm.toggleButtonImgSrc}})])])])},staticRenderFns: [],_scopeId: 'data-v-24c2c164',
	  props: [
	    'position'
	  ],
	  computed: {
	    toggleButtonImgSrc: function toggleButtonImgSrc() {
	      var shouldShowImagery = this.$store.state.map.shouldShowImagery;
	      var src;
	      if (shouldShowImagery) {
	        src = "images/basemap_small.png";
	      }
	      else {
	        src = "images/imagery_small.png";
	      }
	      return src;
	    },
	  },
	  methods: Object.assign(methods, {
	    handleImageryToggleButtonClick: function handleImageryToggleButtonClick(e) {
	      // document.getElementById('addressSearch').blur();
	      var prevShouldShowImagery = this.$store.state.map.shouldShowImagery;
	      var nextShouldShowImagery = !prevShouldShowImagery;
	      this.$store.commit('setShouldShowImagery', nextShouldShowImagery);
	    },
	  })
	});

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /*# sourceMappingURL=BasemapSelectControl.vue.map */"; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
	var methods$1 = Control.methods;

	({render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.shouldShowImagery),expression:"shouldShowImagery"}]},[_c('select',{attrs:{"id":"year-select"},on:{"change":_vm.handleImageryChange}},_vm._l((_vm.imageryTypes),function(imageryTypeDef,imageryType){return _c('optgroup',{attrs:{"label":imageryTypeDef.label}},_vm._l((_vm.basemapsForImageryType(imageryType)),function(basemap){return _c('option',{attrs:{"data-key":basemap.key}},[_vm._v(" "+_vm._s(basemap.label)+" ")])}))}))])},staticRenderFns: [],_scopeId: 'data-v-48c5e6b4',
	  props: [
	    'position' ],
	  computed: {
	    shouldShowImagery: function shouldShowImagery() {
	      return this.$store.state.map.shouldShowImagery;
	    },
	    imageryTypes: function imageryTypes() {
	      return this.$config.map.imageryTypes;
	    },
	    currentImagery: function currentImagery() {
	      return this.$store.state.map.imagery;
	    },
	  },
	  watch: {
	    currentImagery: function currentImagery(nextCurrentImagery) {
	      var nextYear = nextCurrentImagery.replace(/\D/g,'');
	      var el = document.getElementById('year-select');
	      el.value = nextYear;
	    }
	  },
	  methods: Object.assign(methods$1, {
	    handleImageryChange: function handleImageryChange() {
	      var el = document.getElementById('year-select');
	      var group = el.options[el.selectedIndex].parentElement.label;
	      var year = el.options[el.selectedIndex].value;
	      var nextBasemap = group.toLowerCase() + year;

	      this.$store.commit('setImagery', nextBasemap);
	    },
	    // returns keys of basemaps of a certain type (e.g. historic, imagery)
	    basemapsForImageryType: function basemapsForImageryType(targetType) {
	      var basemapConfig = this.$config.map.basemaps;
	      var basemapKeys = Object.keys(basemapConfig);
	      var basemaps = [];

	      for (var i = 0, list = basemapKeys; i < list.length; i += 1) {
	        var basemapKey = list[i];

	        var basemapDef = basemapConfig[basemapKey];
	        var basemapType = basemapDef.type;

	        if (basemapType === targetType) {
	          var basemapLabel = basemapDef.label;
	          basemaps.push({
	            type: basemapType,
	            label: basemapLabel
	          });
	        }
	      }
	      return basemaps;
	    }
	  })
	});

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /* .toggle-tab { position: absolute; left: 0px; border-width: 1.3px; border-color: #CAC9C9; height: 48px; line-height: 58px; width:24px; background-color: white; display: inline-block; z-index: 500; */ /* border-left-style: solid; */ /* box-shadow: 2px 2px 7px grey; */ /* } */ .toggle-tab[data-v-10e5c930] { display: none; } .align-span[data-v-10e5c930] { margin-left: 6px; } @media screen and (min-width: 46.875em) { .toggle-tab[data-v-10e5c930] { position: absolute; left: 0px; border-width: 1.3px; border-style: solid; border-color: #CAC9C9; height: 48px; line-height: 56px; width:24px; background-color: white; display: inline-block; z-index: 500; opacity: 0.7; /* border-left-style: solid; */ /* box-shadow: 2px 2px 7px grey; */ } } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .toggle-tab[data-v-78e67c74] { display: none; } .align-span[data-v-78e67c74] { margin-left: 14px; } @media screen and (min-width: 46.875em) { .toggle-tab[data-v-78e67c74] { position: absolute; bottom: 0px; border-width: 1.3px; border-style: solid; border-color: #CAC9C9; height: 24px; line-height: 16px; width:48px; background-color: white; display: inline-block; z-index: 500; opacity: 0.7; /* border-left-style: solid; */ /* box-shadow: 2px 2px 7px grey; */ } } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /*# sourceMappingURL=LocationControl.vue.map */"; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
	var methods$2 = Control.methods;

	({render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"leaflet-bar easy-button-container leaflet-control"},[_c('button',{on:{"click":_vm.handleLocationButtonClick}},[_c('span',{staticClass:"button-state state-unnamed-state unnamed-state-active"},[_c('font-awesome-icon',{staticClass:"fa-lg",attrs:{"icon":['far', 'dot-circle']}})],1)])])},staticRenderFns: [],_scopeId: 'data-v-15e73008',
	  props: [
	    'position'
	  ],
	  data: function data() {
	    return {
	      locationOn: false
	    }
	  },
	  mounted: function mounted() {
	    console.log('location control mounted');
	  },
	  methods: Object.assign(methods$2, {

	    handleLocationButtonClick: function handleLocationButtonClick(e) {
	      // document.getElementById('addressSearch').blur()
	      // alert('handleLocationButtonClick is running');
	      var watchPositionOn = this.$store.state.map.watchPositionOn;
	      // console.log('watchPositionOn', watchPositionOn);
	      if (!watchPositionOn) {
	        this.$store.commit('setWatchPositionOn', true);
	        navigator.geolocation.watchPosition(this.geofindSuccess, this.geofindError, {enableHighAccuracy: true, timeout: 1000, maximumAge: 0, distanceFilter: 5});
	      } else {
	        this.moveToPosition();
	      }
	    },
	    geofindSuccess: function geofindSuccess(position) {
	      // alert('geofindSuccess is running, position:', position);
	      var payload = {
	        lat: position.coords.latitude,
	        lng: position.coords.longitude
	      };
	      this.$store.commit('setLocation', payload);
	      // console.log('latitude', payload.lat, 'longitude', payload.lng);
	      if (!this.locationOn) {
	        this.moveToPosition();
	        this.locationOn = true;
	      }
	    },
	    moveToPosition: function moveToPosition() {
	      var map = this.$store.state.map.map;
	      var location = this.$store.state.map.location;
	      // console.log('LocationControl.vue moveToPosition is running, location:', location);
	      map.setView([location.lat, location.lng], 19);
	    },
	    geofindError: function geofindError() {
	      console.log('GeofindError');
	    }
	  })
	});

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /*# sourceMappingURL=MeasureControl.vue.map */"; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .legend { display: inline-block; padding: 6px 8px; font: 14px/16px Arial, Helvetica, sans-serif; background: white; background: rgba(255,255,255,1); box-shadow: 0 0 15px rgba(0,0,0,0.2); border-radius: 5px; line-height: 18px; color: #555; } .legend-box { display: inline-block; width: 18px; height: 18px; opacity: 1; vertical-align: middle; margin-right: 4px; } .list-text { display: inline-block; vertical-align: middle; } .legend-list { list-style: none; padding-top: 2px; padding-left: 2px; margin-left: 0px; /*override standards*/ margin-bottom: 0; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
	var methods$3 = Control.methods;

	({render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(this.shouldShowLegend),expression:"this.shouldShowLegend"}]},[_c('div',{staticClass:"legend"},[_c('ul',{staticClass:"legend-list"},_vm._l((this.keys),function(key){return _c('li',{staticClass:"legend-listitem",style:("font-size:"+_vm.items[key]["font-size"]+";")},[_c('div',{staticClass:"legend-box",style:("background-color:"+_vm.items[key]["background-color"]+
	           "; border-color:"+_vm.items[key]["border-color"]+
	           "; border-style:"+_vm.items[key]["border-style"]+
	           "; border-width:"+_vm.items[key]["border-weight"]+
	           "; width:"+_vm.items[key].width+
	           "; height:"+_vm.items[key].height+";")}),_vm._v(" "),_c('div',{staticClass:"list-text"},[_vm._v(" "+_vm._s(key)+" ")])])}))])])},staticRenderFns: [],
	  props: [
	    'position',
	    'options',
	    'items'
	  ],
	  computed: {
	    keys: function keys() {
	      return Object.keys(this.$props.items);
	    },
	    activeTopic: function activeTopic() {
	      return this.$store.state.activeTopic;
	    },
	    shouldShowImagery: function shouldShowImagery() {
	      return this.$store.state.map.shouldShowImagery;
	    },
	    shouldShowLegend: function shouldShowLegend() {
	      var result = true;
	      if (!this.$props.options.topics.includes(this.activeTopic)) {
	        result = false;
	      }
	      if (this.$props.options.showWithBaseMapOnly) {
	        if (this.shouldShowImagery) {
	          result = false;
	        }
	      }
	      return result;
	    }
	    // style() {
	    //   // const string = "background: " + this.$props.items[key].background + " color: " + this.$props.items[key].color
	    //   const string = this.$props.items[]
	    //   console.log('style string', string);
	    //   return string
	    // }
	  },
	  methods: Object.assign(methods$3)
	});

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .basetooltip { width: 32px; height: 32px; padding: 5px 13px; font: 20px/22px Arial, Helvetica, sans-serif; background: white; background: rgba(255,255,255,1); box-shadow: 0 0 15px rgba(0,0,0,0.2); border-radius: 5px; } .basetooltip2 { float: right; width: 80%; height: 32px; padding: 3px 10px; padding-right: 40px; font: 12px/14px Arial, Helvetica, sans-serif; background: white; background: rgba(255,255,255,1); box-shadow: 0 0 15px rgba(0,0,0,0.2); border-radius: 5px; } .basetooltip a { color: black } .basetooltip2 a { color: black } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
	var methods$4 = Control.methods;

	({render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{class:this.basemap === 'none' ? 'basetooltip': 'basetooltip2',on:{"mouseover":_vm.onMouseover,"mouseout":_vm.onMouseout}},[(this.basemap === 'pwd')?_c('div',[_vm._v(" The property boundaries displayed on the map are for reference only and may not be used in place of recorded deeds or land surveys. Boundaries are generalized for ease of visualization. Source: Philadelphia Water ")]):(this.basemap === 'dor')?_c('div',[_vm._v(" The property boundaries displayed on the map are for reference only and may not be used in place of recorded deeds or land surveys. Dimension lengths are calculated using the GIS feature. Source: Department of Records. ")]):_c('div',[_vm._v(" i ")])])])},staticRenderFns: [],
	  props: [
	    'position' ],
	  data: function data() {
	    return {
	      'basemap': 'none'
	    }
	  },
	  computed: {
	    activeBasemap: function activeBasemap() {
	      return this.$store.state.map.basemap;
	    },
	    activeTopic: function activeTopic() {
	      return this.$store.state.activeTopic;
	    }
	  },
	  methods: Object.assign(methods$4, {
	    onMouseover: function onMouseover() {
	      var stateBasemap = this.activeBasemap;
	      var finalBasemap = stateBasemap;
	      if (stateBasemap.includes('imagery') || stateBasemap.includes('historic')) {
	        if (this.activeTopic === 'deeds' || this.activeTopic === 'zoning') {
	          finalBasemap = 'dor';
	        } else {
	          finalBasemap = 'pwd';
	        }
	      }
	      this.basemap = finalBasemap;
	    },
	    onMouseout: function onMouseout() {
	      this.basemap = 'none';
	    }
	  })
	});

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /* <style lang=\"scss\" scoped> */ .icon-div[data-v-0ccfd0f0] { margin: 10px; } .text-div[data-v-0ccfd0f0] { } .street-view-image[data-v-0ccfd0f0] { height: 40px; width: 73px; color: blue; } .openmaps-modal[data-v-0ccfd0f0] { color: rgb(15, 77, 144); width: 97%; height: 80%; padding: 20px; overflow: hidden; position: absolute; top: 70px; left: 10px; background: white; z-index:1000; opacity: 0.85; } /* .modal-content { overflow-y: auto; } */ .openmaps-modal.openmaps-modal--open[data-v-0ccfd0f0]{ z-index:1000; /* border-left: 3px solid color(ghost-gray); */ opacity: 1; } .openmaps-modal-content[data-v-0ccfd0f0]{ width: 95%; height: 85%; margin: 20px auto; overflow-y: auto; } .openmaps-modal-close[data-v-0ccfd0f0]{ position: absolute; top:15px; left:15px; background: white; height: 30px; width: 30px; } /* @include breakpoint(medium down) { .openmaps-modal{ position:fixed; width: 100%; height:calc(100vh - #{$header-height-mobile}); left:0; top: $header-height-mobile; background: $white; padding:10%; } .openmaps-modal-content{ width: 100%; } .openmaps-modal-close{ position: absolute; top:15px; left:15px; } } */ "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .inactive[data-v-461b7da4] { background-color: #ffffff; } .inactive[data-v-461b7da4]:hover { background-color: #ffffff; } .active[data-v-461b7da4] { background-color: rgb(243, 198, 19); } .active[data-v-461b7da4]:hover { background-color: rgb(243, 198, 19); } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	// Based on:

	var SvgIcon = L$1.DivIcon.extend({
	    options: {
	        "circleText": "",
	        "className": "svg-icon",
	        "circleAnchor": null, //defaults to [iconSize.x/2, iconSize.x/2]
	        "circleColor": null, //defaults to color
	        "circleOpacity": null, // defaults to opacity
	        "circleFillColor": "rgb(255,255,255)",
	        "circleFillOpacity": null, //default to opacity
	        "circleRatio": 0.5,
	        "circleWeight": null, //defaults to weight
	        "color": "rgb(0,102,255)",
	        "fillColor": null, // defaults to color
	        "fillOpacity": 0.4,
	        "fontColor": "rgb(0, 0, 0)",
	        "fontOpacity": "1",
	        "fontSize": null, // defaults to iconSize.x/4
	        "iconAnchor": null, //defaults to [iconSize.x/2, iconSize.y] (point tip)
	        "iconSize": L$1.point(32,48),
	        "opacity": 1,
	        "popupAnchor": null,
	        "weight": 2
	    },
	    initialize: function(options) {
	        options = L$1.Util.setOptions(this, options);

	        if (!options.circleAnchor) {
	            options.circleAnchor = L$1.point(Number(options.iconSize.x)/2, Number(options.iconSize.x)/2);
	        }
	        if (!options.circleColor) {
	            options.circleColor = options.color;
	        }
	        if (!options.circleFillOpacity) {
	            options.circleFillOpacity = options.opacity;
	        }
	        if (!options.circleOpacity) {
	            options.circleOpacity = options.opacity;
	        }
	        if (!options.circleWeight) {
	            options.circleWeight = options.weight;
	        }
	        if (!options.fillColor) {
	            options.fillColor = options.color;
	        }
	        if (!options.fontSize) {
	            options.fontSize = Number(options.iconSize.x/4);
	        }
	        if (!options.iconAnchor) {
	            options.iconAnchor = L$1.point(Number(options.iconSize.x)/2, Number(options.iconSize.y));
	        }
	        if (!options.popupAnchor) {
	            options.popupAnchor = L$1.point(0, (-0.75)*(options.iconSize.y));
	        }

	        var path = this._createPath();
	        var circle = this._createCircle();

	        options.html = this._createSVG();
	    },
	    _createCircle: function() {
	        var cx = Number(this.options.circleAnchor.x);
	        var cy = Number(this.options.circleAnchor.y);
	        var radius = this.options.iconSize.x/2 * Number(this.options.circleRatio);
	        var fill = this.options.circleFillColor.replace("rgb(", "rgba(").replace(")", "," + this.options.circleFillOpacity + ")");
	        var stroke = this.options.circleColor.replace("rgb(", "rgba(").replace(")", "," + this.options.circleOpacity + ")");
	        var strokeWidth = this.options.circleWeight;
	        var className = this.options.className + "-circle";

	        var circle = '<circle class="' + className + '" cx="' + cx + '" cy="' + cy + '" r="' + radius + '" fill="' + fill + '" stroke="' + stroke + '" stroke-width="' + strokeWidth + '"/>';

	        return circle
	    },
	    _createPathDescription: function() {
	        var height = Number(this.options.iconSize.y);
	        var width = Number(this.options.iconSize.x);
	        var weight = Number(this.options.weight);
	        var margin = weight / 2;

	        var startPoint = "M " + margin + " " + (width/2) + " ";
	        var leftLine = "L " + (width/2) + " " + (height - weight) + " ";
	        var rightLine = "L " + (width - margin) + " " + (width/2) + " ";
	        var arc = "A " + (width/4) + " " + (width/4) + " 0 0 0 " + margin + " " + (width/2) + " Z";

	        var d = startPoint + leftLine + rightLine + arc;

	        return d
	    },
	    _createPath: function() {
	        var pathDescription = this._createPathDescription();
	        var strokeWidth = this.options.weight;
	        var stroke = this.options.color.replace("rgb(", "rgba(").replace(")", "," + this.options.opacity + ")");
	        var fill = this.options.fillColor.replace("rgb(", "rgba(").replace(")", "," + this.options.fillOpacity + ")");
	        var className = this.options.className + "-path";

	        var path = '<path class="' + className + '" d="' + pathDescription + '" stroke-width="' + strokeWidth + '" stroke="' + stroke + '" fill="' + fill + '"/>';

	        return path
	    },
	    _createSVG: function() {
	        var path = this._createPath();
	        var circle = this._createCircle();
	        var text = this._createText();
	        var className = this.options.className + "-svg";

	        var style = "width:" + this.options.iconSize.x + "; height:" + this.options.iconSize.y + ";";

	        var svg = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="' + className + '" style="' + style + '">' + path + circle + text + '</svg>';

	        return svg
	    },
	    _createText: function() {
	        var fontSize = this.options.fontSize + "px";
	        var lineHeight = Number(this.options.fontSize);

	        var x = Number(this.options.iconSize.x) / 2;
	        var y = x + (lineHeight * 0.35); //35% was found experimentally
	        var circleText = this.options.circleText;
	        var textColor = this.options.fontColor.replace("rgb(", "rgba(").replace(")", "," + this.options.fontOpacity + ")");

	        var text = '<text text-anchor="middle" x="' + x + '" y="' + y + '" style="font-size: ' + fontSize + '" fill="' + textColor + '">' + circleText + '</text>';

	        return text
	    }
	});

	// L.divIcon.svgIcon = function(options) {
	//     return new L.DivIcon.SVGIcon(options)
	// }

	// L.Marker.SVGMarker = L.Marker.extend({
	//     options: {
	//         "iconFactory": L.divIcon.svgIcon,
	//         "iconOptions": {}
	//     },
	//     initialize: function(latlng, options) {
	//         options = L.Util.setOptions(this, options)
	//         options.icon = options.iconFactory(options.iconOptions)
	//         this._latlng = latlng
	//     },
	//     onAdd: function(map) {
	//         L.Marker.prototype.onAdd.call(this, map)
	//     },
	//     setStyle: function(style) {
	//         if (this._icon) {
	//             var svg = this._icon.children[0]
	//             var iconBody = this._icon.children[0].children[0]
	//             var iconCircle = this._icon.children[0].children[1]
	//
	//             if (style.color && !style.iconOptions) {
	//                 var stroke = style.color.replace("rgb","rgba").replace(")", ","+this.options.icon.options.opacity+")")
	//                 var fill = style.color.replace("rgb","rgba").replace(")", ","+this.options.icon.options.fillOpacity+")")
	//                 iconBody.setAttribute("stroke", stroke)
	//                 iconBody.setAttribute("fill", fill)
	//                 iconCircle.setAttribute("stroke", stroke)
	//
	//                 this.options.icon.fillColor = fill
	//                 this.options.icon.color = stroke
	//                 this.options.icon.circleColor = stroke
	//             }
	//             if (style.opacity) {
	//                 this.setOpacity(style.opacity)
	//             }
	//             if (style.iconOptions) {
	//                 if (style.color) { style.iconOptions.color = style.color }
	//                 iconOptions = L.Util.setOptions(this.options.icon, style.iconOptions)
	//                 this.setIcon(L.divIcon.svgIcon(iconOptions))
	//             }
	//         }
	//     }
	// })
	//
	// L.marker.svgMarker = function(latlng, options) {
	//     return new L.Marker.SVGMarker(latlng, options)
	// }

	// L.DivIcon.SVGIcon.noCircleIcon = L.DivIcon.SVGIcon.extend({

	var TriangleIcon = SvgIcon.extend({
	  initialize: function(options) {
	    options = L$1.Util.setOptions(this, options);
	    var circleAnchor = L$1.point(Number(options.iconSize.x) / 2,
	                                 Number(options.iconSize.y) / 2);
	    options.circleAnchor = circleAnchor;
	    options.circleRatio = 0;
	    options.className = options.className + "-noClick";
	    SvgIcon.prototype.initialize.call(this, options);

	    return options;
	  },

	  _createPathDescription: function () {
	    var height = Number(this.options.iconSize.y);
	    var width = Number(this.options.iconSize.x);
	    var weight = Number(this.options.weight);
	    var margin = weight;

	    var startPoint = "M " + margin + " " + (0) + " ";
	    var leftLine = "L " + (width / 2) + " " + (height - margin) + " ";
	    var rightLine = "L " + (width - margin) + " " + (0) + " Z";
	    var d = startPoint + leftLine + rightLine;

	    return d;
	  }
	});

	// L.divIcon.svgIcon.triangleIcon = function(options) {
	//     return new L.DivIcon.SVGIcon.TriangleIcon(options)
	// }

	// L.Marker.SVGMarker.TriangleMarker = L.Marker.SVGMarker.extend({
	//     options: {
	//         "iconFactory": L.divIcon.svgIcon.triangleIcon
	//     }
	// })
	//
	// L.marker.svgMarker.triangleMarker = function(latlng, options) {
	//     return new L.Marker.SVGMarker.TriangleMarker(latlng, options)
	// }

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .svg-icon-noClick-svg { pointer-events: none; } .svg-icon-noClick { pointer-events: none; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" #cyclo-container { padding: 0px; height: 50%; display: none; } @media screen and (min-width: 46.875em) { #cyclo-container { display: block; } } #inCycloDiv { /* position: absolute; */ position: absolute; /* top: 0px; */ right: 0px; /* float: right; */ background-color: white; border: 0px solid; width: 30px; height: 30px; cursor:pointer; z-index: 10; } .popout-icon { margin-top: 8.5px; font-size: 15px; margin-left: 8.5px; } .panoramaViewerWindow { display: block; width: 100%; height:100%; } @media screen and (max-width: 46.875em) { .cyclo-container { display: none; } } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .inactive[data-v-651e14cc] { background-color: #ffffff; } .inactive[data-v-651e14cc]:hover { background-color: #ffffff; } .active[data-v-651e14cc] { background-color: rgb(243, 198, 19); } .active[data-v-651e14cc]:hover { background-color: rgb(243, 198, 19); } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" header.site-header > .row[data-v-b47b60a8]:last-of-type { background: #2176d2; } #in-pict-div[data-v-b47b60a8] { position: absolute; top: 0px; right: 0px; background-color: white; border: 0px solid; width: 30px; height: 30px; cursor:pointer; /* float: right; */ /*display:none;*/ /*z-index: 2000000;*/ /*position: relative; top: 0px; right: 0px;*/ } .popout-icon[data-v-b47b60a8] { margin-top: 8.5px; font-size: 15px; margin-left: 8.5px; } #pict-container[data-v-b47b60a8] { padding: 0px; height: 50%; position: relative; display: none; } @media screen and (min-width: 46.875em) { #pict-container[data-v-b47b60a8] { display: block; } } /*#iframe-div { }*/ #pictometry-ipa[data-v-b47b60a8] { height: 100%; width: 100%; border: 0px; } #search-container[data-v-b47b60a8] { float: right; } #search-input[data-v-b47b60a8] { float: left; width: 400px; } #search-button[data-v-b47b60a8] { height: 2.78571rem; } #data-panel[data-v-b47b60a8] { background: #fff; padding-left: 12px; padding-right: 12px; height: 100%; } #data-panel > h1[data-v-b47b60a8] { color: #666; } #data-row-list > a[data-v-b47b60a8] { background: #f5f5f5; border: 1px solid #ddd; display: block; font-size: 18px; font-weight: normal; height: 70px; line-height: 45px; /*margin-left: 10px;*/ /*margin-right: 10px;*/ padding: 10px; /*vertical-align: middle;*/ /*text-align: middle;*/ box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); margin-bottom: 8px; } #data-row-list > a[data-v-b47b60a8]:hover { background: #fff; color: inherit; } #data-row-list .data-row-link-icon[data-v-b47b60a8] { padding-right: 30px; } .data-row[data-v-b47b60a8] { padding: 10px; margin-bottom: 10px; display: none; } .data-row table th[data-v-b47b60a8], .data-row table td[data-v-b47b60a8] { font-size: 15px; margin-left: 8.5px; } #pict-container[data-v-b47b60a8] { padding: 0px; height: 50%; position: relative; } /*#iframe-div { }*/ "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	// some default values, which get overwritten by the app importing

	fontawesomeSvgCore.dom.watch(); // This will kick of the initial replacement of i to svg tags and configure a MutationObserver
	fontawesomeSvgCore.library.add(faSearch_2, faTimes_2, faMapMarkerAlt_2, faDotCircle_2, faCaretLeft_2, faCaretRight_2);

	exports.Map_ = _Map;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=phila-vue-mapping.js.map
