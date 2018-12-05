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

	var Map_ = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:this.mapContainerClass},[_c('div',{ref:"map",staticClass:"map",attrs:{"id":"map"}}),_vm._v(" "),_c('div',[_vm._t("default")],2)])},staticRenderFns: [],
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

	function objectWithoutProperties$1 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	// pascal case
	var GeoJson = L$1.geoJSON;

	var Geojson = {
	  props: [
	    'geojson',
	    'fillColor',
	    'color',
	    'weight',
	    'opacity',
	    'fillOpacity',
	    'data'
	  ],
	  mounted: function mounted() {
	    var leafletElement = this.$leafletElement = this.createLeafletElement();
	    var map = this.$store.state.map.map;
	    // REVIEW kind of hacky/not reactive?
	    if (map) {
	      leafletElement.addTo(map);
	    }

	    bindEvents(this, this.$leafletElement, this._events);
	  },
	  destroyed: function destroyed() {
	    this.$leafletElement._map.removeLayer(this.$leafletElement);
	  },
	  // we don't actually render anything, but need to define either a template
	  // or a render function
	  render: function render(h) {
	    return;
	  },
	  methods: {
	    createLeafletElement: function createLeafletElement() {
	      var props = this.$props;
	      var geojson = props.geojson;
	      var rest = objectWithoutProperties$1( props, ["geojson"] );
	      var options = rest;

	      // console.log('geojson', geojson)
	      var newGeojson = new GeoJson(geojson, options);
	      //this.$store.commit('setCircleMarkers', newCircleMarker);
	      return newGeojson;
	      // if the geoJSON feature is a point, it needs to be styled through "pointToLayer"
	      // const type = this.$props.overlay.type;
	      // const style = this.$props.overlay.style;
	      // return new GeoJson(this.$props.geojson, {
	      //   color: this.$props.color,
	      //   weight: this.$props.weight,
	      //   // pointToLayer: function (feature, latlng) {
	    	// 	// 	return type(latlng, style)
	      //   // }
	      // });
	    },
	    parentMounted: function parentMounted(parent) {
	      var map = parent.$leafletElement;
	      this.$leafletElement.addTo(map);
	    }
	  }
	};

	function objectWithoutProperties$2 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var CircleMarker = {
	  props: [
	    'latlng',
	    'radius',
	    'fillColor',
	    'color',
	    'weight',
	    'opacity',
	    'fillOpacity',
	    'data',
	    'pane'
	  ],
	  watch: {
	    latlng: function latlng(nextLatlng) {
	      // alert('watch circleMarker props latlng is running nextLatlng:', nextLatlng);
	      this.$leafletElement._map.removeLayer(this.$leafletElement);
	      var leafletElement = this.$leafletElement = this.createLeafletElement();
	      var map = this.$store.state.map.map;
	      if (map) {
	        leafletElement.addTo(map);
	      }
	    }
	  },
	  mounted: function mounted() {
	    var leafletElement = this.$leafletElement = this.createLeafletElement();
	    var map = this.$store.state.map.map;
	    if (map) {
	      leafletElement.addTo(map);
	    }

	    // bind events
	    // TODO warn if trying to bind an event that doesn't exist
	    bindEvents(this, this.$leafletElement, this._events);
	  },
	  destroyed: function destroyed() {
	    this.$leafletElement._map.removeLayer(this.$leafletElement);
	  },
	  // we don't actually render anything, but need to define either a template
	  // or a render function
	  render: function render(h) {
	    return;
	  },
	  methods: {
	    createLeafletElement: function createLeafletElement() {
	      var props = this.$props;
	      var latlng = props.latlng;
	      var rest = objectWithoutProperties$2( props, ["latlng"] );
	      var options = rest;
	      var newCircleMarker = new L$1.CircleMarker(latlng, options);
	      return newCircleMarker;
	    },
	    parentMounted: function parentMounted(parent) {
	      var map = parent.$leafletElement;
	      this.$leafletElement.addTo(map);
	    },
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .leaflet-fullleft { position: absolute; bottom: 0px; /* possible because the placeholder's parent is the map */ left: 0px; padding-bottom: 10px; z-index: 500; } .leaflet-fulltop { position: absolute; top: 10px; left: 0px; padding-bottom: 10px; z-index: 500; } .leaflet-centervert { /* position: relative; */ /* top: 100px; left: 0px; */ /* padding-top: 40%; */ padding-bottom: 30%; z-index: 500; } .leaflet-almostleft { position: absolute; bottom: 0px; left: 30px; padding-bottom: 10px; z-index: 500; } .leaflet-almostleft .leaflet-control { margin-bottom: 0px; } .leaflet-almostright { position: absolute; top: 0px; right: 60px; padding-bottom: 10px; z-index: 500; } .leaflet-almostright .leaflet-control { margin-top: 10px; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var ControlCorner = {
	  props: [
	    'vSide',
	    'hSide'
	  ],
	  render: function render(h) {
	    return;
	  },
	  methods: {
	    parentMounted: function parentMounted(parent) {
	      var map = parent.$leafletElement;
	      map._controlCorners[this.vSide + this.hSide] = L$1.DomUtil.create('div', 'leaflet-'+this.vSide+' leaflet-'+this.hSide, map._controlContainer);
	    }
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
	var PopUp = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("default")],2)},staticRenderFns: [],
	  mounted: function mounted() {
	    // console.log('popup mounted is running');
	    var leafletElement = this.$leafletElement = this.createLeafletElement();
	    // leafletElement.addTo(this._map);
	    leafletElement.on('remove', this.removePopup);
	  },
	  destroyed: function destroyed() {
	    // console.log('pop-up destroyed is running')
	    this.$leafletElement.removeFrom(this._map);
	  },
	  watch: {
	    intersectingFeatures: function intersectingFeatures(nextIntersectingFeatures) {
	      // console.log('Popup WATCH intersectingFeatures is firing');
	      var leafletElement = this.$leafletElement = this.createLeafletElement();
	      // leafletElement.addTo(this._map);
	      leafletElement.on('remove', this.removePopup);
	    }
	  },
	  computed: {
	    _map: function _map() {
	      return this.$store.state.map.map;
	    },
	    intersectingFeatures: function intersectingFeatures() {
	      return this.$store.state.map.intersectingFeatures;
	    },
	    popupCoords: function popupCoords() {
	      return this.$store.state.map.popupCoords;
	    }
	  },
	  methods: {
	    removePopup: function removePopup() {
	      // console.log('closed Popup, this:', this);
	      this.$store.commit('setIntersectingFeatures', []);
	    },
	    createLeafletElement: function createLeafletElement() {
	      var popup = L$1.popup({
	        minWidth: 300,
	        offset: L$1.point(0, -24)
	      }).setLatLng(this.popupCoords)
	        .setContent(this.$children[0].$el)
	        .openOn(this._map);

	      return popup;
	    }
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .leaflet-popup-content { margin-top: 8px; margin-bottom: 8px; } .pagination { margin-bottom: 0px; } .leaflet-popup-close-button { font-size: 24px !important; height: 24px !important; line-height: 24px !important; width: 24px !important; } .inline-div { display: inline-block; } .popup-div { font-size: 14px; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();





















































	var PopUpContent = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(this.popupHtmlArray.length > 1)?_c('div',{staticClass:"text-center"},[_c('ul',{staticClass:"pagination text-center"},[_c('li',{class:this.previousIsDisabled},[(this.previousIsDisabled !== 'pagination-previous')?_c('span',[_vm._v(" Previous ")]):_vm._e(),_vm._v(" "),(this.previousIsDisabled === 'pagination-previous')?_c('a',{on:{"click":function($event){_vm.changePopup(_vm.currentPopup-1);}}},[_vm._v(" Previous ")]):_vm._e()]),_vm._v(" "),(this.popupHtmlArrayLength <= 9)?_c('div',{staticClass:"inline-div"},_vm._l((this.popupHtmlArray),function(popup,index){return _c('li',{class:_vm.isCurrent(index)},[(_vm.isCurrent(index) === 'current')?_c('span',[_vm._v(" "+_vm._s(index + 1)+" ")]):_vm._e(),_vm._v(" "),(_vm.isCurrent(index) !== 'current')?_c('a',{on:{"click":function($event){_vm.changePopup(index);}}},[_vm._v(" "+_vm._s(index + 1)+" ")]):_vm._e()])})):_vm._e(),_vm._v(" "),(this.popupHtmlArrayLength >= 10)?_c('div',{staticClass:"inline-div popup-div"},[_vm._v(" "+_vm._s(_vm.currentPopup + 1)+" of "+_vm._s(this.popupHtmlArrayLength)+" ")]):_vm._e(),_vm._v(" "),_c('li',{class:this.nextIsDisabled},[(this.nextIsDisabled !== 'pagination-next')?_c('span',[_vm._v(" Next ")]):_vm._e(),_vm._v(" "),(this.nextIsDisabled === 'pagination-next')?_c('a',{on:{"click":function($event){_vm.changePopup(_vm.currentPopup+1);}}},[_vm._v(" Next ")]):_vm._e()])])]):_vm._e(),_vm._v(" "),_c('div',{domProps:{"innerHTML":_vm._s(this.popupHtmlArray[this.currentPopup])}})])},staticRenderFns: [],
	  data: function data() {
	    return {
	      'currentPopup': 0
	    }
	  },
	  mounted: function mounted() {
	    // console.log('POPUPCONTENT MOUNTED')
	    this.$store.commit('setSelectedPopupLayer', this.intersectingFeatures[0]);
	  },
	  destroyed: function destroyed() {
	    // console.log('PopupContent destroyed')
	    this.$store.commit('setSelectedPopupLayer', null);
	  },
	  watch: {
	    popupHtmlArray: function popupHtmlArray(nextPopupHtmlArray) {
	      this.currentPopup = 0;
	      this.$store.commit('setSelectedPopupLayer', this.intersectingFeatures[0]);
	    }
	  },
	  methods: {
	    changePopup: function changePopup(index) {
	      this.currentPopup = index;
	      this.$store.commit('setSelectedPopupLayer', this.intersectingFeatures[index]);
	    },
	    isCurrent: function isCurrent(index) {
	      if (index === this.currentPopup) {
	        return 'current'
	      }
	    },
	  },
	  computed: {
	    previousIsDisabled: function previousIsDisabled() {
	      if (this.currentPopup === 0) {
	        return 'pagination-previous disabled'
	      } else {
	        return 'pagination-previous'
	      }
	    },
	    nextIsDisabled: function nextIsDisabled() {
	      if (this.currentPopup === this.popupHtmlArray.length - 1) {
	        return 'pagination-next disabled'
	      } else {
	        return 'pagination-next'
	      }
	    },
	    intersectingFeatures: function intersectingFeatures() {
	      return this.$store.state.map.intersectingFeatures;
	    },
	    popupHtmlArray: function popupHtmlArray() {
	      var htmlArray = [];
	      for (var feature in this.$store.state.map.intersectingFeatures) {
	        htmlArray.push(this.$store.state.map.intersectingFeatures[feature].feature.popupHtml);
	      }
	      return htmlArray;
	    },
	    popupHtmlArrayLength: function popupHtmlArrayLength() {
	      return this.popupHtmlArray.length;
	    }
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var Polygon_ = {
	  props: [
	    'latlngs',
	    'color',
	    'weight',
	    'fill',
	    'pane'
	  ],
	  mounted: function mounted() {
	    // console.log('Polygon mounted is firing');
	    var leafletElement = this.$leafletElement = this.createLeafletElement();
	    var map = this.$store.state.map.map;
	    if (map) {
	      // console.log('Polygon adding to map, element:', leafletElement);
	      leafletElement.addTo(map);
	    }
	  },
	  destroyed: function destroyed() {
	    this.$leafletElement._map.removeLayer(this.$leafletElement);
	  },
	  render: function render(h) {
	    return;
	  },
	  watch: {
	    latlngs: function latlngs(nextLatLngs) {
	      // console.log('polygon latlngs changed');
	      this.$leafletElement._map.removeLayer(this.$leafletElement);
	      var leafletElement = this.$leafletElement = this.createLeafletElement();
	      var map = this.$store.state.map.map;
	      if (map) {
	        // console.log('on update, polygon adding to map, element:', leafletElement);
	        leafletElement.addTo(map);
	      }
	    }
	  },
	  methods: {
	    createLeafletElement: function createLeafletElement() {
	      // console.log('Polygon createLeafletElement is firing', this.$props.latlngs);
	      return new L$1.Polygon(this.$props.latlngs, {
	        color: this.$props.color,
	        weight: this.$props.weight,
	        fill: this.$props.fill,
	        pane: this.$props.pane,
	        'z-index': 9999,
	      });
	    },
	    parentMounted: function parentMounted(parent) {
	      // console.log('Polygon parentMounted is firing, this.$leafletElement:', this.$leafletElement);
	      var map = parent.$leafletElement;
	      this.$leafletElement.addTo(map);
	    },
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var Polyline_ = {
	  props: [
	    'latlngs',
	    'color',
	    'weight',
	    'pane'
	  ],
	  mounted: function mounted() {
	    console.log('polyline mounted is firing');
	    var leafletElement = this.$leafletElement = this.createLeafletElement();
	    var map = this.$store.state.map.map;
	    if (map) {
	      console.log('polyline adding to map, element:', leafletElement);
	      leafletElement.addTo(map);
	    }
	  },
	  destroyed: function destroyed() {
	    this.$leafletElement._map.removeLayer(this.$leafletElement);
	  },
	  render: function render(h) {
	    return;
	  },
	  watch: {
	    latlngs: function latlngs(nextLatLngs) {
	      console.log('polyline latlngs changed');
	      this.$leafletElement._map.removeLayer(this.$leafletElement);
	      var leafletElement = this.$leafletElement = this.createLeafletElement();
	      var map = this.$store.state.map.map;
	      if (map) {
	        console.log('on update, polyline adding to map, element:', leafletElement);
	        leafletElement.addTo(map);
	      }
	    }
	  },
	  methods: {
	    createLeafletElement: function createLeafletElement() {
	      console.log('polyline createLeafletElement is firing, latlngs:', this.$props.latlngs);
	      return new L$1.Polyline(this.$props.latlngs, {
	        color: this.$props.color,
	        weight: this.$props.weight,
	        pane: this.$props.pane,
	        'z-index': 10000,
	      });
	    },
	    parentMounted: function parentMounted(parent) {
	      console.log('polyline parentMounted is firing, this.$leafletElement:', this.$leafletElement);
	      var map = parent.$leafletElement;
	      this.$leafletElement.addTo(map);
	    },
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var EsriTiledMapLayer = {
	  props: [
	    'url',
	    'minZoom',
	    'maxZoom',
	    'zIndex',
	    'attribution'
	  ],
	  mounted: function mounted() {
	    var leafletElement = this.$leafletElement = this.createLeafletElement();
	    var map = this.$store.state.map.map;

	    // REVIEW kind of hacky/not reactive?
	    if (map) {
	      leafletElement.addTo(map);
	      map.attributionControl.removeAttribution('overwrite');
	      map.attributionControl.removeAttribution('<span class="esri-attributions" style="line-height:14px; vertical-align: -3px; text-overflow:ellipsis; white-space:nowrap; overflow:hidden; display:inline-block; max-width:1385px;"></span>');
	    }
	  },
	  destroyed: function destroyed() {
	    this.$leafletElement._map.removeLayer(this.$leafletElement);
	  },
	  // we don't actually render anything, but need to define either a template
	  // or a render function
	  render: function render(h) {
	    return;
	  },
	  methods: {
	    createLeafletElement: function createLeafletElement() {
	      var props = Object.assign({}, this.$props);
	      var mapLayer = new esriLeaflet.tiledMapLayer(props);
	      return mapLayer;

	    },
	    parentMounted: function parentMounted(parent) {
	      var map = parent.$leafletElement;
	      this.$leafletElement.addTo(map);
	      map.attributionControl.removeAttribution('overwrite');
	      map.attributionControl.removeAttribution('<span class="esri-attributions" style="line-height:14px; vertical-align: -3px; text-overflow:ellipsis; white-space:nowrap; overflow:hidden; display:inline-block; max-width:1385px;"></span>');
	    }
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .opacity_slider_control .ui-slider-range { background-image: none; background-color: #646464; height: 200px; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	// TODO look into a cleaner way of importing from esri-leaflet
	// import Control from '../leaflet/Control';
	//
	// // REVIEW is there a better way to extend a vue component?
	// const {props, methods} = Control;

	var opacity_layer;

	var OpacitySlider = {
	  props: [
	    'layer',
	    'position',
	    'initialOpacity'
	  ],
	  created: function created() {
	    var opacityValue = this.$props.initialOpacity * 100;
	    // console.log("opacityValue", opacityValue);

	    L$1.Control.opacitySlider = L$1.Control.extend({
	      options: {
	        position: 'topright'
	      },
	      setOpacityLayer: function (layer) {
	        opacity_layer = layer;
	      },
	      onAdd: function (map) {
	        // console.log('on add', this, this.$props);
	        var opacity_slider_div = L$1.DomUtil.create('div', 'opacity_slider_control');

	        $(opacity_slider_div).slider({
	          orientation: "vertical",
	          range: "min",
	          min: 0,
	          max: 100,
	          value: opacityValue,
	          step: 10,
	          start: function ( event, ui) {
	            //When moving the slider, disable panning.
	            map.dragging.disable();
	            map.once('mousedown', function (e) {
	              map.dragging.enable();
	            });
	          },
	          slide: function ( event, ui ) {
	            var slider_value = ui.value / 100;
	            opacity_layer.setOpacity(slider_value);
	          }
	        });

	        $(opacity_slider_div).click(function(e) {
	          e.stopPropagation();
	        });

	        return opacity_slider_div;
	      }
	    });
	  },
	  mounted: function mounted() {

	    var leafletElement = this.$leafletElement = this.createLeafletElement();
	    var map = this.$store.state.map;
	    // REVIEW kind of hacky/not reactive?
	    if (map) {
	      this.$nextTick(function () {
	        leafletElement.addTo(map.map);
	      });
	    }
	  },
	  destroyed: function destroyed() {
	    this.$leafletElement._map.removeControl(this.$leafletElement);
	  },
	  // we don't actually render anything, but need to define either a template
	  // or a render function
	  render: function render(h) {
	    return;
	  },
	  methods: {
	    createLeafletElement: function createLeafletElement() {
	      var OpacitySlider = new L$1.Control.opacitySlider;
	      OpacitySlider.setPosition(this.$props.position);
	      OpacitySlider.setOpacityLayer(this.$props.layer);
	      return OpacitySlider;
	    },
	    parentMounted: function parentMounted(parent) {
	      var map = parent.$leafletElement;
	      map.addControl(this.$leafletElement);
	    }
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var EsriTiledOverlay = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('opacity-slider',{attrs:{"layer":this.$leafletElement,"position":'topleft',"initialOpacity":_vm.opacity}})},staticRenderFns: [],
	  components: {
	    OpacitySlider: OpacitySlider
	  },
	  props: [
	    'url',
	    'minZoom',
	    'maxZoom',
	    'zIndex',
	    'attribution',
	    'opacity'
	  ],
	  created: function created() {
	    var leafletElement = this.$leafletElement = this.createLeafletElement();
	    var map = this.$store.state.map.map;

	    // REVIEW kind of hacky/not reactive?
	    if (map) {
	      leafletElement.addTo(map);
	      map.attributionControl.removeAttribution('overwrite');
	    }
	  },
	  destroyed: function destroyed() {
	    this.$leafletElement._map.removeLayer(this.$leafletElement);
	  },
	  // we don't actually render anything, but need to define either a template
	  // or a render function
	  // render(h) {
	  //   return;
	  // },
	  methods: {
	    createLeafletElement: function createLeafletElement() {
	      var props = Object.assign({}, this.$props);
	      var mapLayer = new esriLeaflet.tiledMapLayer(props);
	      return mapLayer;
	    },
	    parentMounted: function parentMounted(parent) {
	      var map = parent.$leafletElement;
	      this.$leafletElement.addTo(map);
	    }
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var EsriDynamicMapLayer = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('opacity-slider',{attrs:{"layer":this.$leafletElement,"position":'topleft',"initialOpacity":_vm.opacity}})},staticRenderFns: [],
	  components: {
	    OpacitySlider: OpacitySlider
	  },
	  props: {
	    url: {

	    },
	    minZoom: {

	    },
	    maxZoom: {

	    },
	    zIndex: {

	    },
	    opacity: {
	      default: 1.0
	    },
	    layers: {

	    },
	    layerDefs: {

	    },
	    transparent: {

	    },
	  },
	  created: function created() {
	    var leafletElement = this.$leafletElement = this.createLeafletElement();
	    var map = this.$store.state.map.map;
	    // REVIEW kind of hacky/not reactive?
	    if (map) {
	      leafletElement.addTo(map);
	    }
	  },
	  destroyed: function destroyed() {
	    this.$leafletElement._map.removeLayer(this.$leafletElement);
	  },
	  // we don't actually render anything, but need to define either a template
	  // or a render function
	  // render(h) {
	  //   return;
	  // },
	  computed: {

	  },
	  methods: {
	    createLeafletElement: function createLeafletElement() {
	      var props = Object.assign({}, this.$props);
	      return new esriLeaflet.dynamicMapLayer(props);
	    },
	    parentMounted: function parentMounted(parent) {
	      var map = parent.$leafletElement;
	      this.$leafletElement.addTo(map);
	    }
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /*# sourceMappingURL=FeatureLayer.vue.map */"; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	// min and max zooms are not handled by esri leaflet, but are handled by vue
	var EsriFeatureLayer = {
	  props: [
	    'url',
	    'minZoom',
	    'maxZoom',
	    'zIndex',
	    'layerName',
	    'color',
	    'fillColor',
	    'fillOpacity',
	    'weight',
	    'style_',
	    'markerType',
	    'radius',
	    'interactive' ],
	  created: function created() {
	    var leafletElement = this.$leafletElement = this.createLeafletElement();
	    console.log('leafletElement:', leafletElement);
	    var map = this.$store.state.map.map;
	    // REVIEW kind of hacky/not reactive?
	    if (map) {
	      leafletElement.addTo(map);
	    }
	  },
	  destroyed: function destroyed() {
	    this.$leafletElement._map.removeLayer(this.$leafletElement);
	  },
	  // we don't actually render anything, but need to define either a template
	  // or a render function
	  render: function render(h) {
	    return;
	  },
	  methods: {
	    createLeafletElement: function createLeafletElement() {
	      var props = Object.assign({}, this.$props);

	      var map = this.$store.state.map.map;
	      var layerName = props.layerName;
	      if (!map.getPane(layerName)) {
	        map.createPane(layerName);
	      }

	      // remove underscore from style_ prop. `style` is a vue reserved word.
	      var style_ = props.style_;
	      delete props.style_;
	      props.style = style_;

	      if (props.markerType === 'circleMarker') {
	        var pointToLayer = function (geojson, latlng) {
	          return L$1.circleMarker(latlng, {
	            pane: layerName,
	            color: props.color,
	            fillColor: props.fillColor,
	            fillOpacity: props.fillOpacity,
	            weight: props.weight,
	            radius: props.radius,
	            interactive: props.interactive,
	          });
	        };
	        props.pointToLayer = pointToLayer;
	      }

	      return new esriLeaflet.featureLayer(props);
	    },
	    parentMounted: function parentMounted(parent) {
	      var map = parent.$leafletElement;
	      this.$leafletElement.addTo(map);
	    }
	  }
	};

	function generateUniqueId() {
	  return 'id-' + Math.random().toString(36).substring(7);
	}

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var WebMap = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("default")],2)},staticRenderFns: [],
	  computed: {
	    webmapId: function webmapId() {
	      // console.log('config', this.$config);
	      return this.$config.webmapId;
	    }
	  },
	  methods: {
	    parentMounted: function parentMounted(parent) {
	      var this$1 = this;

	      var self = this;
	      var map = this.$store.state.map.map;

	      var esriUrl = "https://www.arcgis.com/sharing/rest/content/items/"+ this.webmapId +"/data";
	      var params = {
	        dataType: 'json',
	        webmapId: this.webmapId
	      };
	      var webMapLayersAndRest = [];

	      axios.get(esriUrl, { params: params }).then(function (response) {
	        var restData = response.data;
	        var webMap;
	        if (this$1.$config.bundled) {
	          webMap = this$1.$webMap = LEsriWebMap.webMap(this$1.webmapId, { map: map });
	        } else {
	          webMap = this$1.$webMap = L.esri.webMap(this$1.webmapId, { map: map });
	        }

	        // console.log('WEBMAP', webMap, 'restData', restData);
	        self.$store.commit('setWebMap', webMap);

	        webMap.on('load', function() {

	          map.attributionControl.setPrefix('<a target="_blank" href="//www.phila.gov/it/aboutus/units/Pages/GISServicesGroup.aspx">City of Philadelphia | CityGeo</a>');

	          var ignore = ["CityBasemap", "CityBasemap_Labels"];

	          // create layerUrls - object mapping layerName to url
	          var layerUrls = {};
	          for (var i = 0, list = webMap.layers; i < list.length; i += 1) {
	            // console.log('layer.title:', layer.title);
	            var layer = list[i];

	            var title = layer.title;
	            if (!ignore.includes(title)) {
	              if (title.includes('_')) {
	                var curLayer = title.split('_')[1];
	                if (layer.layer.service) {
	                  // console.log('good', title, layer.layer.service.options.url.replace('https://', '').replace('http://', '').replace(/\/$/, "").toLowerCase());
	                  layerUrls[curLayer]=layer.layer.service.options.url.replace('https://', '').replace('http://', '').replace(/\/$/, "").toLowerCase();
	                } else if (layer.layer._layers){
	                  // console.log('bad1, then good', title, layer.layer._layers[Object.keys(layer.layer._layers)[0]].service.options.url.replace('https://', '').replace('http://', '').replace(/\/$/, "").toLowerCase());
	                  layerUrls[curLayer]=layer.layer._layers[Object.keys(layer.layer._layers)[0]].service.options.url.replace('https://', '').replace('http://', '').replace(/\/$/, "").toLowerCase();
	                }
	              }
	            }
	          }
	          self.$store.commit('setLayerUrls', layerUrls);

	          // create webMapLayersAndRest
	          // let webMapLayersAndRest = []
	          var opLayers = restData.operationalLayers;

	          // start of for loop
	          var loop = function () {
	          // for (let [index, layer] of webMap.layers.splice(1).entries()) {
	            var layer$1 = list$2[i$2];

	            if (layer$1.title === 'CityBasemap') {
	              return;
	            }
	            var curOpLayer = (void 0);
	            for (var i$1 = 0, list$1 = opLayers; i$1 < list$1.length; i$1 += 1) {
	              var opLayer = list$1[i$1];

	              if (opLayer.title === layer$1.title) {
	                curOpLayer = opLayer;
	              }
	            }

	            var webmapMetaDataRequestUrl = 'https://www.arcgis.com/sharing/rest/content/items/' + curOpLayer.itemId;
	            var id = generateUniqueId();
	            var layerObj = {
	              'category': layer$1.title.split('_')[0],
	              'title': layer$1.title.split('_')[1],
	              'layer': layer$1.layer,
	              'id': id,
	              'serviceItemId': null,
	              // 'serviceItemId': curOpLayer.itemId,
	              'rest': curOpLayer,
	              'opacity': curOpLayer.opacity,
	              'type': curOpLayer.layerType,
	              'type2': layer$1.type,
	              'legend': null,
	              'tags': null,
	              'tagsString': null,
	            };

	            var params2 = {};

	            if (curOpLayer.itemId){

	              L.esri.request(webmapMetaDataRequestUrl, params2, function (error, response) {
	                if (error) {
	                  // console.log('L.esri.request ERROR:', error, 'webmapMetaDataRequestUrl:', webmapMetaDataRequestUrl, 'layerObj:', layerObj);
	                  webMapLayersAndRest.push(layerObj);
	                  webMapLayersAndRest.sort(function(a, b) {
	                    var titleA = a.title.toLowerCase();
	                    var titleB=b.title.toLowerCase();
	                    if (titleA < titleB) //sort string ascending
	                    { return -1 }
	                    if (titleA > titleB)
	                    { return 1 }
	                    return 0 //default return value (no sorting)
	                  });

	                } else {
	                  // console.log('WebMap MetaData:', response);
	                  var tags = response.tags.map(function (x) { return typeof x === 'string' ? x.toLowerCase() : x; });
	                  var filteredTags =  Array.from(new Set(tags));
	                  layerObj.tags = filteredTags;
	                  layerObj.tagsString = response.tags.join();
	                  webMapLayersAndRest.push(layerObj);
	                  webMapLayersAndRest.sort(function(a, b) {
	                    var titleA = a.title.toLowerCase();
	                    var titleB=b.title.toLowerCase();
	                    if (titleA < titleB) //sort string ascending
	                    { return -1 }
	                    if (titleA > titleB)
	                    { return 1 }
	                    return 0 //default return value (no sorting)
	                  });
	                } // end of if/else error
	              }); // end of L.esri.request

	            } else {
	              webMapLayersAndRest.push(layerObj);
	              webMapLayersAndRest.sort(function(a, b) {
	                var titleA = a.title.toLowerCase();
	                var titleB=b.title.toLowerCase();
	                if (titleA < titleB) //sort string ascending
	                { return -1 }
	                if (titleA > titleB)
	                { return 1 }
	                return 0 //default return value (no sorting)
	              });
	            } // end of if/else curOpLayer.itemId

	          };

	          for (var i$2 = 0, list$2 = webMap.layers; i$2 < list$2.length; i$2 += 1) loop(); // end of for loop

	          // webMapLayersAndRest.sort(function(a, b) {
	          //   const titleA = a.title.toLowerCase()
	          //   const titleB=b.title.toLowerCase()
	          //   if (titleA < titleB) //sort string ascending
	          //       return -1
	          //   if (titleA > titleB)
	          //       return 1
	          //   return 0 //default return value (no sorting)
	          // })

	          var categories = [''];
	          for (var i$3 = 0, list$3 = webMapLayersAndRest; i$3 < list$3.length; i$3 += 1) {
	            var layer$2 = list$3[i$3];

	            if (!categories.includes(layer$2.category)) {
	              categories.push(layer$2.category);
	            }
	          }

	          categories.sort(function(a, b) {
	            var titleA = a.toLowerCase();
	            var titleB=b.toLowerCase();
	            if (titleA < titleB) //sort string ascending
	                { return -1 }
	            if (titleA > titleB)
	                { return 1 }
	            return 0 //default return value (no sorting)
	          });

	          self.$store.commit('setWebMapLayersAndRest', webMapLayersAndRest);
	          self.$store.commit('setCategories', categories);
	          map.createPane('highlightOverlay');
	        }); // end of webmap onload
	      }, function (response) {
	        console.log('AXIOS ERROR WebMap.vue');
	      }); // end of axios

	    }, // end of parentMounted

	  } // end of methods

	}; // end of export

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
	var WebMapLayer = {
	  props: [
	    'layer',
	    'layerName',
	    // minScale, maxScale, and drawingInfo are stored in layerDefinition
	    'layerDefinition',
	    'opacity',
	    'type' ],
	  data: function data() {
	    return {
	      'geometryType': null
	    }
	  },
	  watch: {
	    opacity: function opacity(nextOpacity) {
	      this.changeOpacity(nextOpacity);
	    },
	    geometryType: function geometryType(nextGeometryType) {
	      // console.log('WATCH GEO TYPE:', nextGeometryType);
	      if (nextGeometryType === 'esriGeometryPoint') {
	        // console.log('GEOMETRY TYPE IS POINT!');
	        if (this.$leafletElement.metadata) {
	          this.$leafletElement.on('click', function(e) {
	            L.DomEvent.stopPropagation(e);
	          });
	          this.$leafletElement.on('click', this.clickHandler);
	        } else if (this.$leafletElement._layers[Object.keys(this.$leafletElement._layers)[0]].metadata) {
	          // console.log('watch leafletelement._layers');
	          for (var i$1 = 0, list$1 = Object.keys(this.$leafletElement._layers); i$1 < list$1.length; i$1 += 1) {
	            // console.log('OBJECT KEYS', Object.keys(this.$leafletElement._layers[layer]._layers));
	            var layer = list$1[i$1];

	            for (var i = 0, list = Object.keys(this.$leafletElement._layers[layer]._layers); i < list.length; i += 1) {
	              var innerLayer = list[i];

	              this.$leafletElement._layers[layer]._layers[innerLayer].options.bubblingMouseEvents = false;
	              // console.log('!!!!THIS', this.$leafletElement._layers[layer]._layers[innerLayer]);
	            }
	            // console.log('layer', layer, this.$leafletElement, 'this.$leafletElement._layers[layer]', this.$leafletElement._layers[layer]);
	            this.$leafletElement._layers[layer].on('click', function(e) {
	              L.DomEvent.stopPropagation(e);
	            });
	            this.$leafletElement._layers[layer].on('click', this.clickHandler);// {
	            // console.log('e', e, 'this', this, 'layer', layer, 'this._layers', this._layers, 'this._layers[layer]', this._layers[layer]);
	          }
	        }
	      }
	    }
	  },
	  computed: {
	    scale: function scale() {
	      return this.$store.state.map.scale;
	    },
	  },
	  created: function created() {
	    var leafletElement = this.$leafletElement = this.layer;
	    if (this.layer.metadata) {
	      this.layer.metadata(function(error, metadata) {
	        // console.log('metadata', metadata);
	        this.geometryType = metadata.geometryType;
	      }, this);
	    } else if (this.layer._layers[Object.keys(this.layer._layers)[0]].metadata){
	      this.layer._layers[Object.keys(this.layer._layers)[0]].metadata(function(error, metadata) {
	        // console.log('metadata', metadata);
	        this.geometryType = metadata.geometryType;
	      }, this);
	    }
	  },
	  mounted: function mounted() {
	    // console.log('THE LAYER:', this.$leafletElement, 'THE GEO TYPE:', this.geometryType);
	    var map = this.$store.state.map.map;
	    if (map) {
	      this.$leafletElement.addTo(map);
	    }
	  },
	  destroyed: function destroyed() {
	    this.$leafletElement._map.removeLayer(this.$leafletElement);
	  },
	  render: function render(h) {
	    return;
	  },
	  methods: {
	    parentMounted: function parentMounted(parent) {
	      var map = parent.$leafletElement;
	      this.$leafletElement.addTo(map);
	    },
	    changeOpacity: function changeOpacity(nextOpacity) {
	      // console.log('webMapLayer changeOpacity is running, nextOpacity:', nextOpacity, 'LEAFLET ELEMENT:', this.$leafletElement);
	      var element;
	      // sometimes you have to dig into the leafletElement to get to the objects being shown
	      // one way to know whether you have to do that is whether the leafletElement has a "legend" function
	      if (!this.$leafletElement.legend) {
	        element = this.$leafletElement._layers[Object.keys(this.$leafletElement._layers)[0]];
	      } else {
	        element = this.$leafletElement;
	      }

	      // if it is not a feature layer, you can change the opacity of the entire layer
	      if (this.$props.type != 'FL') {
	        element.setOpacity(nextOpacity);
	      } else {
	        element.eachFeature(function(layer){
	          // console.log('LAYER', layer);
	          if (layer._icon) {
	            // console.log('LAYER icon', layer);
	            var style = layer._icon.attributes.style.nodeValue;
	            var styleSlice = style.slice(0, style.indexOf('; opacity'));
	            var styleConcat = styleSlice.concat('; opacity:', nextOpacity, '; fill-opacity:', nextOpacity, ';');
	            layer._icon.attributes.style.nodeValue = styleConcat;
	          } else if (layer._path) {
	            // console.log('LAYER path', layer);
	            if (layer.options.fillOpacity === 0) {
	              layer.setStyle({
	                opacity: nextOpacity,
	              });
	            } else if (layer.options.opacity === 0) {
	              layer.setStyle({
	                fillOpacity: nextOpacity
	              });
	            } else {
	              layer.setStyle({
	                opacity: nextOpacity,
	                fillOpacity: nextOpacity
	              });
	            }
	          } // end of elseIf layer._path
	        }); // end of eachFeature
	      } // end of else - it is a FL
	    }, // end of changeOpacity

	    // nearly the same function is in Map.vue
	    // this one is used when the click is ON a point
	    clickHandler: function clickHandler(e) {
	      var map = this.$store.state.map.map;
	      var clickBounds = L.latLngBounds(e.layer._latlng, e.layer._latlng);
	      // console.log('clickHandler in WebMapLayer is starting, e:', e, 'e.layer._latlng', e.layer._latlng);
	      // console.log('map._layers', map._layers);
	      var intersectingFeatures = [];
	      var geometry;
	      for (var layer in map._layers) {
	        var overlay = map._layers[layer];
	        if (overlay._layers) {
	          // console.log('IF overlay._layers');
	          for (var oLayer in overlay._layers) {
	            var feature = overlay._layers[oLayer];
	            // feature.layerName = this.$props.layerName;

	            if (feature.feature) {
	              geometry = feature.feature.geometry.type;
	              // console.log('clickHandler LAYER:', layer, 'FEATURE:', feature, 'GEOMETRY:', geometry);
	              var bounds = (void 0);
	              if (geometry === 'Polygon' || geometry === 'MultiPolygon') {
	                // console.log('polygon or multipolygon');
	                if (feature.contains(e.latlng)) {
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
	                bounds = L.latLngBounds(feature._latlng, feature._latlng);
	                // console.log('Point, bounds:', bounds, 'clickBounds:', clickBounds);
	                if (bounds && clickBounds.intersects(bounds)) {
	                  // console.log('Winner - feature:', feature, 'bounds:', bounds, 'clickBounds:', clickBounds);
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
	      if (!ids.includes(layer + '_' + feature.feature.id)) {
	        intersectingFeatures.push(feature);
	      }
	    }
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .pvm-search-control-form[data-v-6340ff46] { display: inline-block; } /* Container */ .pvm-search-control-container[data-v-6340ff46] { display: inline-block; border-radius: 2px; box-shadow:0 2px 4px rgba(0,0,0,0.2),0 -1px 0px rgba(0,0,0,0.02); width: 305px; } .pvm-container-non-mobile[data-v-6340ff46] { height: 48px; } .pvm-container-mobile[data-v-6340ff46] { height: 38px; } /* Input */ .pvm-search-control-input[data-v-6340ff46] { display: inline-block; border: 0; padding: 15px; font-family: 'Montserrat', 'Tahoma', sans-serif; font-size: 16px; width: 250px; } .pvm-input-non-mobile[data-v-6340ff46] { height: 48px; } .pvm-input-mobile[data-v-6340ff46] { height: 38px; } /* Button */ .pvm-search-control-button[data-v-6340ff46] { display: inline-block; color: #fff; background: #2176d2; padding: 0px; width: 50px; } .pvm-button-non-mobile[data-v-6340ff46] { height: 48px; line-height: 48px; } .pvm-button-mobile[data-v-6340ff46] { height: 38px; line-height: 38px; padding-top: 1px; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var AddressInput = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:'pvm-search-control-container ' + this.containerClass,style:(this.containerStyle)},[_c('form',{staticClass:"pvm-search-control-form",attrs:{"autocomplete":"off","id":"search-form"},on:{"submit":function($event){$event.preventDefault();return _vm.handleSearchFormSubmit($event)}}},[_c('input',{class:'pvm-search-control-input ' + this.inputClass,style:(this.inputStyle),attrs:{"id":_vm.inputID,"placeholder":this.$props.placeholder || 'Search the map',"tabindex":"0"},domProps:{"value":this.addressEntered},on:{"keyup":_vm.didType}})]),_vm._v(" "),(this.addressEntered != '' && this.addressEntered != null)?_c('button',{class:'pvm-search-control-button ' + this.buttonClass,on:{"click":_vm.handleFormX}},[_c('font-awesome-icon',{attrs:{"icon":"times"}})],1):_vm._e(),_vm._v(" "),_c('button',{class:'pvm-search-control-button ' + this.buttonClass,attrs:{"name":"pvm-search-control-button","tabindex":"-1"},on:{"click":this.handleSearchFormSubmit}},[_c('font-awesome-icon',{attrs:{"icon":"search"}})],1),_vm._v(" "),_vm._t("address-candidates-slot")],2)},staticRenderFns: [],_scopeId: 'data-v-6340ff46',
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
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .list-group[data-v-557d70bd] { height: 300px; width: 250px; overflow: auto; margin-top: 1px !important; } .list-group-full[data-v-557d70bd] { height: 300px; width: 197px; overflow: auto; margin-top: 1px !important; } .list-group-mobile[data-v-557d70bd] { height: 300px; width: 250px; overflow: auto; margin-top: 1px !important; } .list-group-mobile-full[data-v-557d70bd] { height: 300px; width: 197px; overflow: auto; margin-top: 1px !important; } ul[data-v-557d70bd] { list-style-type: none; margin-left: 0px; } .list-group-item[data-v-557d70bd] { /* width: 237px; */ display: block; border-radius: 2px; box-shadow:0 2px 4px rgba(0,0,0,0.2),0 -1px 0px rgba(0,0,0,0.02); border: 2; background-color: white; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; font-family: 'Montserrat', 'Tahoma', sans-serif; font-size: 14px; font-weight: normal; } .list-group-item[data-v-557d70bd]:hover { background-color: #ffefa2; font-weight: bold; } /*small*/ @media screen and (max-width: 39.9375em) { .list-group[data-v-557d70bd] { width: 200px; } .list-group-mobile[data-v-557d70bd] { width: 200px; } .list-group-full[data-v-557d70bd] { width: 147px; } .list-group-mobile-full[data-v-557d70bd] { width: 158px; } } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var AddressCandidateList = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(this.shouldShowAddressCandidateList),expression:"this.shouldShowAddressCandidateList"}],class:this.listGroupClass},[_c('ul',_vm._l((_vm.candidates),function(candidate,i){return _c('li',[_c('a',{staticClass:"list-group-item",attrs:{"href":_vm.createLink(candidate),"tabindex":"-1","id":'address-candidate-list-' + i},on:{"click":function($event){_vm.closeAddressCandidateList(candidate);},"keydown":_vm.maybeUsedArrow}},[_vm._v(" "+_vm._s(candidate)+" ")])])}))])},staticRenderFns: [],_scopeId: 'data-v-557d70bd',
	  props: ['position'],
	  computed: {
	    map: function map() {
	      return this.$store.state.map.map;
	    },
	    candidates: function candidates() {
	      return this.$store.state.candidates;
	    },
	    shouldShowAddressCandidateList: function shouldShowAddressCandidateList() {
	      return this.$store.state.shouldShowAddressCandidateList;
	    },
	    activeTopic: function activeTopic() {
	      return this.$store.state.activeTopic;
	    },
	    isMobileOrTablet: function isMobileOrTablet() {
	      return this.$store.state.isMobileOrTablet;
	    },
	    listGroupClass: function listGroupClass() {
	      if (this.isMobileOrTablet) {
	        if (this.addressAutocompleteEnabled) {
	          if (this.addressEntered === '' || this.addressEntered === null) {
	            return 'list-group-mobile';
	          } else {
	            return 'list-group-mobile-full';
	          }
	        } else {
	          return 'list-group-mobile';
	        }
	      } else {
	        if (this.addressAutocompleteEnabled) {
	          if (this.addressEntered === '' || this.addressEntered === null) {
	            return 'list-group';
	          } else {
	            return 'list-group-full';
	          }
	        } else {
	          return 'list-group';
	        }
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
	  },
	  watch: {
	    shouldShowAddressCandidateList: function shouldShowAddressCandidateList(nextValue) {
	      // console.log('AddressCandidateList.vue watch shouldShowAddressCandidateList is running, nextValue:', nextValue);
	      if (nextValue === true) {
	        this.createControl();
	      }
	    },
	  },
	  methods: {
	    createLink: function createLink(candidate) {
	      if (this.$store.state.activeTopic) {
	        return '#/' + candidate + '/' + this.activeTopic;
	      } else {
	        return '#/' + candidate;
	      }
	    },
	    createLeafletElement: function createLeafletElement(L) {
	      // console.log('AddressCandidateList.vue createLeafletElement is running')
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
	    createControl: function createControl() {
	      // console.log('AddressCandidateList.vue createControl is running');
	      var leafletElement = this.createLeafletElement(L$1);
	      this.$leafletElement = leafletElement;
	      var map = this.map;
	      leafletElement.addTo(map);
	    },
	    parentMounted: function parentMounted(parent, props) {
	      // console.log('AddressCandidateList.vue parentMounted is running, parent:', parent, 'props:', props);
	    },
	    maybeUsedArrow: function maybeUsedArrow(e) {
	      var id = e.target.id;
	      var index = parseInt(id.substring(id.lastIndexOf('-') + 1));
	      var indexUp, indexDown;
	      if (index < this.candidates.length - 1) {
	        indexUp = index + 1;
	      } else { (
	        indexUp = index
	      ); }
	      if (index !== 0) {
	        indexDown = index - 1;
	      } else {
	        indexDown = 0;
	      }
	      // console.log('maybeUsedArrow running, e:', e, 'index:', index, 'indexUp:', indexUp, 'indexDown:', indexDown);
	      if (e.key === "ArrowDown") {
	        document.getElementById('address-candidate-list-' + indexUp).focus();
	      }
	      if (e.key === "ArrowUp") {
	        document.getElementById('address-candidate-list-' + indexDown).focus();
	      }
	    },
	    closeAddressCandidateList: function closeAddressCandidateList(addressCandidate) {
	      // console.log('closeAddressCandidateList, addressCandidate:', addressCandidate);
	      // this.$controller.handleSearchFormSubmit(addressCandidate);
	      this.$store.commit('setAddressEntered', addressCandidate);
	      this.$store.commit('setShouldShowAddressCandidateList', false);
	    },
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /* .fa-lg { vertical-align: -10%; } */ "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var VectorMarker = {_scopeId: 'data-v-106712ed',
	  props: [
	    'latlng',
	    'markerColor',
	    'icon'
	  ],
	  render: function render(h) {
	    var a = this.$props.latlng;
	    return;
	  },
	  mounted: function mounted() {
	    var leafletElement = this.$leafletElement = this.createLeafletElement();
	    var map = this.$store.state.map.map;

	    // REVIEW kind of hacky/not reactive?
	    if (map) {
	      leafletElement.addTo(map);
	    }
	  },
	  updated: function updated() {
	    this.$leafletElement._map.removeLayer(this.$leafletElement);
	    var leafletElement = this.$leafletElement = this.createLeafletElement();
	    var map = this.$store.state.map.map;

	    // REVIEW kind of hacky/not reactive?
	    if (map) {
	      leafletElement.addTo(map);
	    }
	  },
	  destroyed: function destroyed() {
	    this.$leafletElement._map.removeLayer(this.$leafletElement);
	  },
	  methods: {
	    createLeafletElement: function createLeafletElement() {
	      var icon = new VectorIcon({
	        icon:  this.$props.icon || 'circle',
	        markerColor: this.$props.markerColor || '#2176d2',
	      });
	      // const icon = {};

	      return new L$1.Marker(this.latlng, { icon: icon });
	    },
	    parentMounted: function parentMounted(parent) {
	      var map = parent.$leafletElement;
	      this.$leafletElement.addTo(map);
	    },
	  },
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var PngMarker = {
	  props: [
	    'icon',
	    'latlng',
	    'rotationAngle'
	  ],
	  render: function render(h) {
	    // for some reason, the react prop that `this.orientation` depends on has
	    // to be evaluated once in order to receive updates.
	    // this.orientation;

	    return;
	  },
	  mounted: function mounted() {
	    var proto_initIcon = L$1.Marker.prototype._initIcon;
	    var proto_setPos = L$1.Marker.prototype._setPos;

	    var oldIE = (L$1.DomUtil.TRANSFORM === 'msTransform');

	    L$1.Marker.addInitHook(function () {
	        var iconOptions = this.options.icon && this.options.icon.options;
	        var iconAnchor = iconOptions && this.options.icon.options.iconAnchor;
	        if (iconAnchor) {
	            iconAnchor = (iconAnchor[0] + 'px ' + iconAnchor[1] + 'px');
	        }
	        this.options.rotationOrigin = this.options.rotationOrigin || iconAnchor || 'center bottom' ;
	        this.options.rotationAngle = this.options.rotationAngle || 0;

	        // Ensure marker keeps rotated during dragging
	        this.on('drag', function(e) { e.target._applyRotation(); });
	    });

	    L$1.Marker.include({
	        _initIcon: function() {
	            proto_initIcon.call(this);
	        },

	        _setPos: function (pos) {
	            proto_setPos.call(this, pos);
	            this._applyRotation();
	        },

	        _applyRotation: function () {
	            if(this.options.rotationAngle) {
	                this._icon.style[L$1.DomUtil.TRANSFORM+'Origin'] = this.options.rotationOrigin;

	                if(oldIE) {
	                    // for IE 9, use the 2D rotation
	                    this._icon.style[L$1.DomUtil.TRANSFORM] = 'rotate(' + this.options.rotationAngle + 'deg)';
	                } else {
	                    // for modern browsers, prefer the 3D accelerated version
	                    this._icon.style[L$1.DomUtil.TRANSFORM] += ' rotateZ(' + this.options.rotationAngle + 'deg)';
	                }
	            }
	        },

	        setRotationAngle: function(angle) {
	            this.options.rotationAngle = angle;
	            this.update();
	            return this;
	        },

	        setRotationOrigin: function(origin) {
	            this.options.rotationOrigin = origin;
	            this.update();
	            return this;
	        }
	    });

	    var leafletElement = this.$leafletElement = this.createLeafletElement();
	    var map = this.$store.state.map.map;

	    // REVIEW kind of hacky/not reactive?
	    if (map) {
	      leafletElement.addTo(map);
	    }
	  },
	  destroyed: function destroyed() {
	    //console.log('pngMarker destroyed fired, latlng is', this.latlng);
	    this.$leafletElement._map.removeLayer(this.$leafletElement);
	  },
	  watch: {
	    rotationAngle: function rotationAngle(nextRotationAngle) {
	      // console.log('pngMarker orientation changed', nextRotationAngle);
	      this.$leafletElement._map.removeLayer(this.$leafletElement);
	      var leafletElement = this.$leafletElement = this.createLeafletElement();
	      var map = this.$store.state.map.map;

	      // REVIEW kind of hacky/not reactive?
	      if (map) {
	        leafletElement.addTo(map);
	      }
	    },
	    latlng: function latlng(nextLatLng) {
	      // console.log('pngMarker orientation changed', nextRotationAngle);
	      this.$leafletElement._map.removeLayer(this.$leafletElement);
	      var leafletElement = this.$leafletElement = this.createLeafletElement();
	      var map = this.$store.state.map.map;

	      // REVIEW kind of hacky/not reactive?
	      if (map) {
	        leafletElement.addTo(map);
	      }
	    }
	  },
	  methods: {
	    createLeafletElement: function createLeafletElement() {
	      // console.log('pngMarker createLeafletElement is running');

	      var icon = L$1.icon({
	          iconUrl: this.icon,
	          iconSize: [26, 16],
	          iconAnchor: [11, 8],
	        });

	      // console.log('createLeafletElement is running, this.latlng:', this.latlng);
	      return L$1.marker(this.latlng, {
	        icon: icon,
	        rotationAngle: this.rotationAngle,
	      });
	    },
	    parentMounted: function parentMounted(parent) {
	      var map = parent.$leafletElement;
	      this.$leafletElement.addTo(map);
	    },
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .button-image[data-v-24c2c164] { vertical-align: top; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
	var methods = Control.methods;

	var BasemapToggleControl = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"leaflet-bar easy-button-container leaflet-control"},[_c('button',{on:{"click":_vm.handleImageryToggleButtonClick}},[_c('span',{staticClass:"button-state state-unnamed-state unnamed-state-active"},[_c('img',{staticClass:"button-image",attrs:{"src":_vm.toggleButtonImgSrc}})])])])},staticRenderFns: [],_scopeId: 'data-v-24c2c164',
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
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /*# sourceMappingURL=BasemapSelectControl.vue.map */"; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
	var methods$1 = Control.methods;

	var BasemapSelectControl = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.shouldShowImagery),expression:"shouldShowImagery"}]},[_c('select',{attrs:{"id":"year-select"},on:{"change":_vm.handleImageryChange}},_vm._l((_vm.imageryTypes),function(imageryTypeDef,imageryType){return _c('optgroup',{attrs:{"label":imageryTypeDef.label}},_vm._l((_vm.basemapsForImageryType(imageryType)),function(basemap){return _c('option',{attrs:{"data-key":basemap.key}},[_vm._v(" "+_vm._s(basemap.label)+" ")])}))}))])},staticRenderFns: [],_scopeId: 'data-v-48c5e6b4',
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
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /* .toggle-tab { position: absolute; left: 0px; border-width: 1.3px; border-color: #CAC9C9; height: 48px; line-height: 58px; width:24px; background-color: white; display: inline-block; z-index: 500; */ /* border-left-style: solid; */ /* box-shadow: 2px 2px 7px grey; */ /* } */ .toggle-tab[data-v-10e5c930] { display: none; } .align-span[data-v-10e5c930] { margin-left: 6px; } @media screen and (min-width: 46.875em) { .toggle-tab[data-v-10e5c930] { position: absolute; left: 0px; border-width: 1.3px; border-style: solid; border-color: #CAC9C9; height: 48px; line-height: 56px; width:24px; background-color: white; display: inline-block; z-index: 500; opacity: 0.7; /* border-left-style: solid; */ /* box-shadow: 2px 2px 7px grey; */ } } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();













	var FullScreenMapToggleTab = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!this.isMobileOrTablet)?_c('div',{staticClass:"toggle-tab",style:({ top: _vm.buttonPosition }),attrs:{"id":"toggle-tab"},on:{"click":_vm.handleFullScreenMapToggleButtonClick}},[_c('span',{staticClass:"align-span"},[_c('font-awesome-icon',{staticClass:"fa-2x",attrs:{"icon":this.currentIcon}})],1)]):_vm._e()},staticRenderFns: [],_scopeId: 'data-v-10e5c930',
	  data: function data() {
	    return {
	      'divHeight': 0,
	      'buttonPosition': 0,
	    }
	  },
	  mounted: function mounted() {
	    window.addEventListener('resize', this.setDivHeight);
	    this.setDivHeight();
	  },
	  computed: {
	    fullScreenMapEnabled: function fullScreenMapEnabled() {
	      return this.$store.state.fullScreenMapEnabled;
	    },
	    fullScreenTopicsEnabled: function fullScreenTopicsEnabled() {
	      return this.$store.state.fullScreenTopicsEnabled;
	    },
	    isMobileOrTablet: function isMobileOrTablet() {
	      return this.$store.state.isMobileOrTablet;
	    },
	    cyclomediaActive: function cyclomediaActive() {
	      return this.$store.state.cyclomedia.active;
	    },
	    pictometryActive: function pictometryActive() {
	      return this.$store.state.pictometry.active;
	    },
	    picOrCycloActive: function picOrCycloActive() {
	      if (this.cyclomediaActive || this.pictometryActive) {
	        return true;
	      } else {
	        return false;
	      }
	    },
	    currentIcon: function currentIcon() {
	      if (this.fullScreenMapEnabled) {
	        return 'caret-right'
	      } else {
	        return 'caret-left'
	      }
	    }
	  },
	  watch: {
	    picOrCycloActive: function picOrCycloActive(value) {
	      // console.log('FullScreenMapToggleTab watch picOrCycloActive, value:', value);
	      this.setDivHeight();
	      // this.$nextTick(() => {
	      //   this.$store.state.map.map.invalidateSize();
	      // })
	    },
	    fullScreenTopicsEnabled: function fullScreenTopicsEnabled() {
	      this.setDivHeight();
	    }
	  },
	  methods: {
	    setDivHeight: function setDivHeight() {
	      // console.log('FullScreenMapToggleTab setDivHeight is running');
	      var el = document.getElementById('map-tag');
	      var divStyle = window.getComputedStyle(el);
	      var divHeight = parseFloat(divStyle.getPropertyValue('height').replace('px', ''));
	      this.buttonPosition = (divHeight-48)/2 + 'px';
	    },
	    handleFullScreenMapToggleButtonClick: function handleFullScreenMapToggleButtonClick(e) {
	      var prevFullScreenMapEnabled = this.$store.state.fullScreenMapEnabled;
	      var nextFullScreenMapEnabled = !prevFullScreenMapEnabled;
	      this.$store.commit('setFullScreenMapEnabled', nextFullScreenMapEnabled);
	    },
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .toggle-tab[data-v-78e67c74] { display: none; } .align-span[data-v-78e67c74] { margin-left: 14px; } @media screen and (min-width: 46.875em) { .toggle-tab[data-v-78e67c74] { position: absolute; bottom: 0px; border-width: 1.3px; border-style: solid; border-color: #CAC9C9; height: 24px; line-height: 16px; width:48px; background-color: white; display: inline-block; z-index: 500; opacity: 0.7; /* border-left-style: solid; */ /* box-shadow: 2px 2px 7px grey; */ } } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();













	var FullScreenMapToggleTabVertical = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!this.isMobileOrTablet)?_c('div',{staticClass:"toggle-tab",style:({ left: _vm.buttonPosition }),attrs:{"id":"toggle-tab"},on:{"click":_vm.handleFullScreenMapToggleButtonClick}},[_c('span',{staticClass:"align-span"},[_c('font-awesome-icon',{staticClass:"fa-2x",attrs:{"icon":this.currentIcon}})],1)]):_vm._e()},staticRenderFns: [],_scopeId: 'data-v-78e67c74',
	  data: function data() {
	    return {
	      'divWidth': 0,
	      'buttonPosition': 0,
	    }
	  },
	  mounted: function mounted() {
	    window.addEventListener('resize', this.setDivWidth);
	    this.setDivWidth();
	  },
	  computed: {
	    fullScreenMapEnabled: function fullScreenMapEnabled() {
	      return this.$store.state.fullScreenMapEnabled;
	    },
	    fullScreenTopicsEnabled: function fullScreenTopicsEnabled() {
	      return this.$store.state.fullScreenTopicsEnabled;
	    },
	    isMobileOrTablet: function isMobileOrTablet() {
	      return this.$store.state.isMobileOrTablet;
	    },
	    cyclomediaActive: function cyclomediaActive() {
	      return this.$store.state.cyclomedia.active;
	    },
	    pictometryActive: function pictometryActive() {
	      return this.$store.state.pictometry.active;
	    },
	    picOrCycloActive: function picOrCycloActive() {
	      if (this.cyclomediaActive || this.pictometryActive) {
	        return true;
	      } else {
	        return false;
	      }
	    },
	    currentIcon: function currentIcon() {
	      if (this.fullScreenMapEnabled) {
	        return 'caret-up'
	      } else {
	        return 'caret-down'
	      }
	    }
	  },
	  watch: {
	    fullScreenTopicsEnabled: function fullScreenTopicsEnabled() {
	      this.setDivWidth();
	    }
	  },
	  methods: {
	    setDivWidth: function setDivWidth() {
	      var el = document.getElementById('map-tag');
	      var divStyle = window.getComputedStyle(el);
	      var divWidth = parseFloat(divStyle.getPropertyValue('width').replace('px', ''));
	      this.buttonPosition = (divWidth-48)/2 + 'px';
	    },
	    handleFullScreenMapToggleButtonClick: function handleFullScreenMapToggleButtonClick(e) {
	      var prevFullScreenMapEnabled = this.$store.state.fullScreenMapEnabled;
	      var nextFullScreenMapEnabled = !prevFullScreenMapEnabled;
	      this.$store.commit('setFullScreenMapEnabled', nextFullScreenMapEnabled);
	    },
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /*# sourceMappingURL=LocationControl.vue.map */"; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
	var methods$2 = Control.methods;

	var LocationControl = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"leaflet-bar easy-button-container leaflet-control"},[_c('button',{on:{"click":_vm.handleLocationButtonClick}},[_c('span',{staticClass:"button-state state-unnamed-state unnamed-state-active"},[_c('font-awesome-icon',{staticClass:"fa-lg",attrs:{"icon":['far', 'dot-circle']}})],1)])])},staticRenderFns: [],_scopeId: 'data-v-15e73008',
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
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /*# sourceMappingURL=MeasureControl.vue.map */"; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
	// import 'leaflet-measure/dist/leaflet-measure.css';

	var MeasureControl$1 = {
	  props: ['position'],
	  mounted: function mounted() {
	    var leafletElement = this.$leafletElement = this.createLeafletElement();
	  },
	  destroyed: function destroyed() {
	    this.$leafletElement._map.removeControl(this.$leafletElement);
	  },
	  render: function render(h) {
	    return;
	  },
	  methods: {
	    createLeafletElement: function createLeafletElement() {
	      var ref = this.$props;
	      var position = ref.position;

	      return new MeasureControl({
					position: position,
					primaryLengthUnit: 'feet',
					primaryAreaUnit: 'sqfeet',
				});
	    },
	    parentMounted: function parentMounted(parent) {
	      var map = parent.$leafletElement;
	      map.addControl(this.$leafletElement);
	    }
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .legend { display: inline-block; padding: 6px 8px; font: 14px/16px Arial, Helvetica, sans-serif; background: white; background: rgba(255,255,255,1); box-shadow: 0 0 15px rgba(0,0,0,0.2); border-radius: 5px; line-height: 18px; color: #555; } .legend-box { display: inline-block; width: 18px; height: 18px; opacity: 1; vertical-align: middle; margin-right: 4px; } .list-text { display: inline-block; vertical-align: middle; } .legend-list { list-style: none; padding-top: 2px; padding-left: 2px; margin-left: 0px; /*override standards*/ margin-bottom: 0; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
	var methods$3 = Control.methods;

	var LegendControl = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(this.shouldShowLegend),expression:"this.shouldShowLegend"}]},[_c('div',{staticClass:"legend"},[_c('ul',{staticClass:"legend-list"},_vm._l((this.keys),function(key){return _c('li',{staticClass:"legend-listitem",style:("font-size:"+_vm.items[key]["font-size"]+";")},[_c('div',{staticClass:"legend-box",style:("background-color:"+_vm.items[key]["background-color"]+
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
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .basetooltip { width: 32px; height: 32px; padding: 5px 13px; font: 20px/22px Arial, Helvetica, sans-serif; background: white; background: rgba(255,255,255,1); box-shadow: 0 0 15px rgba(0,0,0,0.2); border-radius: 5px; } .basetooltip2 { float: right; width: 80%; height: 32px; padding: 3px 10px; padding-right: 40px; font: 12px/14px Arial, Helvetica, sans-serif; background: white; background: rgba(255,255,255,1); box-shadow: 0 0 15px rgba(0,0,0,0.2); border-radius: 5px; } .basetooltip a { color: black } .basetooltip2 a { color: black } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
	var methods$4 = Control.methods;

	var BasemapTooltip = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{class:this.basemap === 'none' ? 'basetooltip': 'basetooltip2',on:{"mouseover":_vm.onMouseover,"mouseout":_vm.onMouseout}},[(this.basemap === 'pwd')?_c('div',[_vm._v(" The property boundaries displayed on the map are for reference only and may not be used in place of recorded deeds or land surveys. Boundaries are generalized for ease of visualization. Source: Philadelphia Water ")]):(this.basemap === 'dor')?_c('div',[_vm._v(" The property boundaries displayed on the map are for reference only and may not be used in place of recorded deeds or land surveys. Dimension lengths are calculated using the GIS feature. Source: Department of Records. ")]):_c('div',[_vm._v(" i ")])])])},staticRenderFns: [],
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
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /* <style lang=\"scss\" scoped> */ .icon-div[data-v-0ccfd0f0] { margin: 10px; } .text-div[data-v-0ccfd0f0] { } .street-view-image[data-v-0ccfd0f0] { height: 40px; width: 73px; color: blue; } .openmaps-modal[data-v-0ccfd0f0] { color: rgb(15, 77, 144); width: 97%; height: 80%; padding: 20px; overflow: hidden; position: absolute; top: 70px; left: 10px; background: white; z-index:1000; opacity: 0.85; } /* .modal-content { overflow-y: auto; } */ .openmaps-modal.openmaps-modal--open[data-v-0ccfd0f0]{ z-index:1000; /* border-left: 3px solid color(ghost-gray); */ opacity: 1; } .openmaps-modal-content[data-v-0ccfd0f0]{ width: 95%; height: 85%; margin: 20px auto; overflow-y: auto; } .openmaps-modal-close[data-v-0ccfd0f0]{ position: absolute; top:15px; left:15px; background: white; height: 30px; width: 30px; } /* @include breakpoint(medium down) { .openmaps-modal{ position:fixed; width: 100%; height:calc(100vh - #{$header-height-mobile}); left:0; top: $header-height-mobile; background: $white; padding:10%; } .openmaps-modal-content{ width: 100%; } .openmaps-modal-close{ position: absolute; top:15px; left:15px; } } */ "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();




































































































	// import {mapState} from 'vuex'
	// import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
	/**
	 * HOW TO USE THE FINDER MODAL
	 *
	 * Hightlights certain elements of the interface on keyword hover.
	 *
	 * @since 0.6.22
	 */
	var ModalAbout = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{directives:[{name:"show",rawName:"v-show",value:(_vm.modals.open === 'help'),expression:"modals.open === 'help'"}],class:['openmaps-about' ,'openmaps-modal']},[_c('div',{staticClass:"openmaps-modal-close",on:{"click":_vm.closeModal}},[_c('span',{staticClass:"button-state state-unnamed-state unnamed-state-active"},[_c('font-awesome-icon',{staticClass:"fa-lg",attrs:{"icon":"times","aria-hidden":"true"}})],1)]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"openmaps-modal-content"},[_c('div',{staticClass:"tour-tip",on:{"mouseover":function($event){_vm.highlight('.openmaps-category-card');},"mouseleave":function($event){_vm.removeHighlight('.openmaps-category-card');}}},[_c('div',{staticClass:"icon-div"},[_c('span',[_c('font-awesome-icon',{staticClass:"fa-3x",attrs:{"icon":"filter","aria-hidden":"true"}})],1)]),_vm._v(" "),_vm._m(1)]),_vm._v(" "),_c('div',{staticClass:"tour-tip",on:{"mouseover":function($event){_vm.highlight('.label-text');},"mouseleave":function($event){_vm.removeHighlight('.label-text');}}},[_c('div',{staticClass:"icon-div"},[_c('span',[_c('font-awesome-icon',{staticClass:"fa-3x",attrs:{"icon":"check-square","aria-hidden":"true"}})],1)]),_vm._v(" "),_vm._m(2)]),_vm._v(" "),_c('div',{staticClass:"tour-tip",on:{"mouseover":function($event){_vm.highlight('.label-text');},"mouseleave":function($event){_vm.removeHighlight('.label-text');}}},[_c('div',{staticClass:"icon-div"},[_c('span',[_c('font-awesome-icon',{staticClass:"fa-3x",attrs:{"icon":['fal', 'square'],"aria-hidden":"true"}})],1)]),_vm._v(" "),_vm._m(3)]),_vm._v(" "),_c('div',{staticClass:"tour-tip",on:{"mouseover":function($event){_vm.highlight('.label-text');},"mouseleave":function($event){_vm.removeHighlight('.label-text');}}},[_c('div',{staticClass:"icon-div"},[_c('span',[_c('font-awesome-icon',{staticClass:"fa-3x",attrs:{"icon":"map-marker-alt","aria-hidden":"true"}})],1)]),_vm._v(" "),_vm._m(4)]),_vm._v(" "),_c('div',{staticClass:"tour-tip",on:{"mouseover":function($event){_vm.highlight('.openmaps-category-card');},"mouseleave":function($event){_vm.removeHighlight('.openmaps-category-card');}}},[_c('div',{staticClass:"icon-div"},[_c('span',[_c('font-awesome-icon',{staticClass:"fa-3x",attrs:{"icon":"search","aria-hidden":"true"}})],1)]),_vm._v(" "),_vm._m(5)]),_vm._v(" "),_c('div',{staticClass:"tour-tip",on:{"mouseover":function($event){_vm.highlight('.openmaps-category-card');},"mouseleave":function($event){_vm.removeHighlight('.openmaps-category-card');}}},[_c('div',{staticClass:"icon-div"},[_c('span',[_c('img',{staticClass:"street-view-image",attrs:{"src":'images/cyclomedia_blue.png'}})])]),_vm._v(" "),_vm._m(6)]),_vm._v(" "),_c('div',{staticClass:"tour-tip",on:{"mouseover":function($event){_vm.highlight('.openmaps-category-card');},"mouseleave":function($event){_vm.removeHighlight('.openmaps-category-card');}}},[_c('div',{staticClass:"icon-div"},[_c('span',[_c('font-awesome-icon',{staticClass:"fa-3x",attrs:{"icon":"info-circle","aria-hidden":"true"}})],1)]),_vm._v(" "),_vm._m(7)])])])},staticRenderFns: [function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{staticClass:"text-center"},[_c('b',[_vm._v("How to use OpenMaps")])])},function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-div"},[_c('p',{staticClass:"tour-tip__action"},[_c('b',[_vm._v("Filter the list of layers available in the left panel.")])]),_vm._v(" "),_c('p',{staticClass:"tour-tip__result text-nopad"},[_vm._v("Type in the box for the first filter to filter by text. Select a category from the second filter to filter by category.")])])},function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-div"},[_c('p',{staticClass:"tour-tip__action"},[_c('b',[_vm._v("Toggle on and off map layers by clicking on the checkboxes in the layer panel.")])]),_vm._v(" "),_c('p',{staticClass:"tour-tip__result text-nopad"},[_vm._v("You can toggle on as many layers as you want, and they will all show on the map.")])])},function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-div"},[_c('p',{staticClass:"tour-tip__action"},[_c('b',[_vm._v("If a checkbox is grayed out, zoom in further on the map and it will become active.")])]),_vm._v(" "),_c('p',{staticClass:"tour-tip__result text-nopad"},[_vm._v("Many of the layers will not show when the map is zoomed out too far.")])])},function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-div"},[_c('p',{staticClass:"tour-tip__action"},[_c('b',[_vm._v("Click on any feature that appears on the map to get a popup with that feature's info.")])]),_vm._v(" "),_c('p',{staticClass:"tour-tip__result text-nopad"},[_vm._v("If you have turned on overlapping layers, you will be able to click through multiple popups of info.")])])},function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-div"},[_c('p',{staticClass:"tour-tip__action"},[_c('b',[_vm._v("Search for an address or intersection.")])]),_vm._v(" "),_c('p',{staticClass:"tour-tip__result text-nopad"},[_vm._v("The map will move to the location that you have searched")])])},function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-div"},[_c('p',{staticClass:"tour-tip__action"},[_c('b',[_vm._v("Toggle on and off street view")])]),_vm._v(" "),_c('p',{staticClass:"tour-tip__result text-nopad"},[_vm._v("Half of the map panel will be taken up by the street view. If you are zoomed in far enough, circles will appear along the streets in the map. Click on a circle to change the street view location to that point.")])])},function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-div"},[_c('p',{staticClass:"tour-tip__action"},[_c('b',[_vm._v("Learn more about and download data.")])]),_vm._v(" "),_c('p',{staticClass:"tour-tip__result text-nopad"},[_vm._v("Click this icon to be linked to the metadata page for any dataset.")])])}],_scopeId: 'data-v-0ccfd0f0',

	  name: 'Modal-About',
	  // components: {FontAwesomeIcon},
	  computed: {
	    // route() {
	    //   return this.$store.state.route;
	    // },
	    shouldBeOpen: function shouldBeOpen() {
	      if (this.route === 'help') {
	        return true;
	      } else {
	        return false;
	      }
	    },
	    modals: function modals() {
	      return this.$store.state.modals;
	    }
	    // ...mapState(['modals'])
	  },
	  methods: {
	    closeModal: function closeModal () {
	      var firstLoc = window.location.hash;
	      var firstLocArr = firstLoc.split('/').slice(1);
	      console.log('firstLocArr:', firstLocArr);
	      var helpPos = firstLocArr.indexOf('help');
	      firstLocArr = firstLocArr.slice(helpPos+1, helpPos+2);
	      console.log('firstLocArr:', firstLocArr);
	      var lastHash = '#';
	      for (var i = 0, list = firstLocArr; i < list.length; i += 1) {
	        var hashPart = list[i];

	        lastHash = lastHash + '/' + hashPart;
	      }
	      window.location.hash = lastHash;
	      // this.$store.commit('setDidToggleModal', { name: 'help', open: false });
	    },
	    highlight: function highlight (selector) {
	      var el = document.querySelectorAll(selector)[0];
	      // el.classList.add('tour-highlight')
	    },
	    removeHighlight: function removeHighlight (selector) {
	      var el = document.querySelectorAll(selector)[0];
	      // el.classList.remove('tour-highlight')
	    }
	  }
	};

	var RecordingsClient = function RecordingsClient(baseUrl, username, password, srid, proxy) {
		if ( srid === void 0 ) srid = 3857;

		this.baseUrl = baseUrl;
		this.username = username;
		this.password = password;
		this.srid = srid;
		this.proxy = proxy;
	};

	// this takes leaflet map bonds and an EPSG coordinate system id, e.g. 3857
	// and returns an array of cyclomedia recording points
	RecordingsClient.prototype.getRecordings = function getRecordings (bounds, callback) {
		// console.log('get recordings', bounds);

		var swCoord = bounds.getSouthWest();
		var neCoord = bounds.getNorthEast();
		var data = "<wfs:GetFeature service=\"WFS\" version=\"1.1.0\" resultType=\"results\" outputFormat=\"text/xml; subtype=gml/3.1.1\" xmlns:wfs=\"http://www.opengis.net/wfs\">\n\t\t\t\t\t\t\t\t\t\t\t<wfs:Query typeName=\"atlas:Recording\" srsName=\"EPSG:" + (this.srid) + "\" xmlns:atlas=\"http://www.cyclomedia.com/atlas\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ogc:Filter xmlns:ogc=\"http://www.opengis.net/ogc\">\n\t\t\t\t\t\t    \t\t\t\t\t<ogc:And>\n\t\t\t\t\t\t      \t\t\t\t\t<ogc:BBOX>\n\t\t\t\t\t\t\t\t\t\t\t        <gml:Envelope srsName=\"EPSG:" + (this.srid) + "\" xmlns:gml=\"http://www.opengis.net/gml\">\n\t\t\t\t\t\t\t\t\t\t\t          <gml:lowerCorner>" + (swCoord.lng) + " " + (swCoord.lat) + "</gml:lowerCorner>\n\t\t\t\t\t\t\t\t\t\t\t          <gml:upperCorner>" + (neCoord.lng) + " " + (neCoord.lat) + "</gml:upperCorner>\n\t\t\t\t\t\t\t\t\t\t\t        </gml:Envelope>\n\t\t\t\t\t\t\t\t\t\t\t      </ogc:BBOX>\n\t\t\t\t\t\t\t\t\t\t\t      <ogc:PropertyIsNull>\n\t\t\t\t\t\t\t\t\t\t\t        <ogc:PropertyName>expiredAt</ogc:PropertyName>\n\t\t\t\t\t\t\t\t\t\t\t      </ogc:PropertyIsNull>\n\t\t\t\t\t\t\t\t\t\t\t    </ogc:And>\n\t\t\t\t\t\t\t\t\t\t\t  </ogc:Filter>\n\t\t\t\t\t\t\t\t\t\t\t </wfs:Query>\n\t\t\t\t\t\t\t\t\t\t\t</wfs:GetFeature>";
		var url = (this.proxy || '') + this.baseUrl;

		// const params = {
		// data,
		// // type: 'POST',
		// contentType: 'text/xml'
		// }
		// const headers = {
		// 'Content-Type': 'text/xml',
		// 'Authorization': 'Basic ' + window.btoa(this.username + ':' + this.password)
		// }
		// console.log('headers', headers);
		//
		// axios.get(url, { params, headers }).then(response => {

		// })

		$$1.ajax({
		    url: url,
		    data: data,
		    type: 'POST',
		    contentType: 'text/xml',
		    // dataType: 'text',
			headers: {
				// 'Content-length': data.length,
				'Authorization': 'Basic ' + window.btoa(this.username + ':' + this.password)
			},
		    success: function success(data) {
				console.log('got recordings', data);

				// const data = response.data

				// this is a list of xml elements representing recordings
				var recordingElsCollection = data.getElementsByTagNameNS('*', 'Recording');
				var recordingEls = [].slice.call(recordingElsCollection);

				// check for > 1
				if (recordingEls.length < 1) {
					console.log('no cyclomedia recordings for bounds');
					return;
				}

				// check if authorized
				// const firstRecordingEl = recordingEls[0];
				// const isAuthorizedEls = firstRecordingEl.firstChild.getElementsByTagNameNS('*', 'isAuthorized');
				// const isAuthorized = isAuthorizedEls.length > 0 && isAuthorizedEls[0].firstChild.data === 'true';
				// if (!isAuthorized) {
				// throw 'not authorized to get cyclomedia recordings';
				// return;
				// }

				var recordings = recordingEls.map(function (recordingEl) {
					var imageId = recordingEl.getElementsByTagNameNS('*', 'imageId')[0].firstChild.data;
					var coords = recordingEl.getElementsByTagNameNS('*', 'pos')[0].firstChild.data;
					var ref = coords.split(' ').map(parseFloat);
						var lng = ref[0];
						var lat = ref[1];

					return {
						imageId: imageId,
						lng: lng,
						lat: lat
					};
				});

				callback(recordings);
			// }, response => {
				// console.log('AXIOS ERROR recordings-client.js')
			},
		    error: function error(xhr, ajaxOptions, thrownError) {
	        console.log(xhr.status);
	        console.log(thrownError);
		    }
		});
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .inactive[data-v-461b7da4] { background-color: #ffffff; } .inactive[data-v-461b7da4]:hover { background-color: #ffffff; } .active[data-v-461b7da4] { background-color: rgb(243, 198, 19); } .active[data-v-461b7da4]:hover { background-color: rgb(243, 198, 19); } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var CyclomediaButton = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"leaflet-bar easy-button-container leaflet-control"},[_c('button',{staticClass:"cyclomedia-button",class:this.cyclomediaActive,on:{"click":function($event){$event.preventDefault();return _vm.handleButtonClick($event)}}},[_c('span',{staticClass:"button-state"},[_c('img',{staticClass:"button-image",attrs:{"src":_vm.imgSrc}})])])])},staticRenderFns: [],_scopeId: 'data-v-461b7da4',
	  extends: Control,
	  // TODO figure how to extend props. sometimes it's an obj, sometimes an array.
	  // props: Object.assign(props, {
	  // }),
	  props: [
	    'link',
	    'imgSrc'
	  ],
	  created: function created() {
	    // create cyclomedia recordings client
	    this.$cyclomediaRecordingsClient = new RecordingsClient(
	      this.$config.cyclomedia.recordingsUrl,
	      this.$config.cyclomedia.username,
	      this.$config.cyclomedia.password,
	      4326
	    );
	  },
	  computed: {
	    cyclomediaInitialized: function cyclomediaInitialized() {
	      return this.$store.state.cyclomedia.initialized;
	    },
	    cyclomediaActive: function cyclomediaActive() {
	      return this.$store.state.cyclomedia.active ? 'active' : 'inactive'
	    }
	  },
	  methods: {
	    handleButtonClick: function handleButtonClick(e) {
	      if (!this.cyclomediaInitialized) {
	        this.$store.commit('setCyclomediaInitialized', true);
	      }
	      var willBeActive = !this.$store.state.cyclomedia.active;

	      this.$store.commit('setCyclomediaActive', willBeActive);

	      // if the cyclo viewer is off screen when it loads imagery, it won't
	      // show anything even once it's on screen. use this to trigger an
	      // update.

	      // const viewer = this.$store.state.cyclomedia.viewer;
	      //
	      // if (willBeActive && viewer) {
	      //   this.$nextTick(() => {
	      //     viewer.forceUpdate();
	      //   });
	      // }

	      // this.$emit('click');
	    },
	    // setNewLocation(latlng) {
	    //   const viewer = this.$store.state.cyclomedia.viewer;
	    //   const xy = [latlng.lng, latlng.lat];
	    //   viewer.openByCoordinate(xy);
	    // },
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var Circle = {
	  props: [
	    'latlng',
	    'size',
	    'color',
	    'weight'
	  ],
	  mounted: function mounted() {
	    var leafletElement = this.$leafletElement = this.createLeafletElement();
	    var map = this.$store.state.map.map;
	    if (map) {
	      leafletElement.addTo(map);
	    }

	    // bind events

	    // const CIRCLE_EVENTS = [
	    //   'click',
	    //   'dblclick',
	    //   'mousedown',
	    //   'mouseover',
	    //   'mouseout',
	    //   'contextmenu'
	    // ];

	    // TODO warn if trying to bind an event that doesn't exist
	    bindEvents(this, this.$leafletElement, this._events);
	  },
	  destroyed: function destroyed() {
	    this.$leafletElement._map.removeLayer(this.$leafletElement);
	  },
	  // we don't actually render anything, but need to define either a template
	  // or a render function
	  render: function render(h) {
	    return;
	  },
	  methods: {
	    createLeafletElement: function createLeafletElement() {
	      return new L$1.Circle(this.latlng, this.size, {
	        color: this.color,
	        weight: this.weight
	      });
	    },
	    parentMounted: function parentMounted(parent) {
	      var map = parent.$leafletElement;
	      this.$leafletElement.addTo(map);
	    }
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var CyclomediaRecordingCircle = {
	  mixins: [Circle],
	  props: ['imageId']
	};

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

	var SvgViewConeMarker = {
	  props: [
	    'latlng',
	    'rotationAngle',
	    'hFov'
	  ],
	  render: function render(h) {
	    // this.orientation;
	    return;
	  },
	  mounted: function mounted() {
	    var leafletElement = this.$leafletElement = this.createLeafletElement();
	    // console.log('WHO IT IS', leafletElement);
	    var map = this.$store.state.map.map;

	    // REVIEW kind of hacky/not reactive?
	    if (map) {
	      leafletElement.addTo(map);
	    }
	  },
	  destroyed: function destroyed() {
	    // console.log('svgMarker destroyed fired, latlng is', this.latlng);
	    this.$leafletElement._map.removeLayer(this.$leafletElement);
	  },
	  watch: {
	    rotationAngle: function rotationAngle(nextRotationAngle) {
	      // console.log('pngMarker orientation changed', nextRotationAngle);
	      this.$leafletElement._map.removeLayer(this.$leafletElement);
	      var leafletElement = this.$leafletElement = this.createLeafletElement();
	      var map = this.$store.state.map.map;

	      // REVIEW kind of hacky/not reactive?
	      if (map) {
	        leafletElement.addTo(map);
	      }
	    },
	    latlng: function latlng(nextLatLng) {
	      // console.log('pngMarker orientation changed', nextRotationAngle);
	      this.$leafletElement._map.removeLayer(this.$leafletElement);
	      var leafletElement = this.$leafletElement = this.createLeafletElement();
	      var map = this.$store.state.map.map;

	      // REVIEW kind of hacky/not reactive?
	      if (map) {
	        leafletElement.addTo(map);
	      }
	    }
	  },
	  computed: {
	    coneCoords: function coneCoords() {
	      var hFovDegrees = this.hFov * (180/3.14159265359);
	      var scale = 50;//options.scale;
	      var angle = hFovDegrees / 2.0;
	      var width = Math.sin(angle * Math.PI / 180);
	      var length = Math.sqrt(1.0 - width * width);
	      var coneCoords = [width * scale, length * scale];

	      return coneCoords;
	    },
	  },
	  methods: {
	    createLeafletElement: function createLeafletElement() {
	      var coneCoords = this.coneCoords;
	      var icon = new TriangleIcon({
	        iconSize: L$1.point(this.coneCoords[0], this.coneCoords[1]),
	        iconAnchor: [this.coneCoords[0] / 2, this.coneCoords[1]],
	      });
	      return L$1.marker(this.latlng, {
	        icon: icon,
	        rotationAngle: this.rotationAngle,
	      });
	    },
	    parentMounted: function parentMounted(parent) {
	      var map = parent.$leafletElement;
	      this.$leafletElement.addTo(map);
	    },
	  }
	};

	var CyclomediaMixin = {
	  computed: {
	    cyclomediaActive: function cyclomediaActive() {
	      return this.$store.state.cyclomedia.active;
	    },
	    cyclomediaRecordings: function cyclomediaRecordings() {
	      return this.$store.state.cyclomedia.recordings;
	    },
	  },
	  methods: {
	    handleCyclomediaButtonClick: function handleCyclomediaButtonClick() {
	      this.updateCyclomediaRecordings();

	    },
	    handleCyclomediaRecordingClick: function handleCyclomediaRecordingClick(e) {
	      var latlng = e.latlng;
	      console.log('handleCyclomediaRecordingClick is running, latlng:', latlng);
	      this.$store.commit('setCyclomediaLatLngFromMap', latlng);
	      // const viewer = this.$store.state.cyclomedia.viewer;
	      // viewer.openByCoordinate([latlng.lng, latlng.lat]);
	    },
	    updateCyclomediaRecordings: function updateCyclomediaRecordings() {
	      var this$1 = this;

	      var map = this.$store.state.map.map;
	      var zoom = map.getZoom();
	      if (!this.$store.state.cyclomedia.active || zoom <= 18) {
	        this.$store.commit('setCyclomediaRecordings', []);
	        return;
	      }
	      var bounds = map.getBounds();
	      this.$cyclomediaRecordingsClient.getRecordings(
	        bounds,
	        function (recordings) {
	          this$1.$store.commit('setCyclomediaRecordings', recordings);
	        }
	      );
	    },
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" #cyclo-container { padding: 0px; height: 50%; display: none; } @media screen and (min-width: 46.875em) { #cyclo-container { display: block; } } #inCycloDiv { /* position: absolute; */ position: absolute; /* top: 0px; */ right: 0px; /* float: right; */ background-color: white; border: 0px solid; width: 30px; height: 30px; cursor:pointer; z-index: 10; } .popout-icon { margin-top: 8.5px; font-size: 15px; margin-left: 8.5px; } .panoramaViewerWindow { display: block; width: 100%; height:100%; } @media screen and (max-width: 46.875em) { .cyclo-container { display: none; } } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var CyclomediaWidget = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:this.cycloContainerClass,attrs:{"id":"cyclo-container"}},[(this.isMobileOrTablet === false && this.popoutAble === true)?_c('div',{style:({ right: _vm.popoutPosition }),attrs:{"id":"inCycloDiv"},on:{"click":this.popoutClicked}},[_c('font-awesome-icon',{staticClass:"popout-icon",attrs:{"icon":"external-link"}})],1):_vm._e(),_vm._v(" "),_c('div',{ref:"cycloviewer",staticClass:"panoramaViewerWindow",attrs:{"id":"cycloviewer"}})])},staticRenderFns: [],
	  data: function data() {
	    return {
	      'docWidth': 0,
	      'divWidth': 0,
	      'popoutPosition': 0,
	    }
	  },
	  props: ['screenPercent'],
	  computed: {
	    isMobileOrTablet: function isMobileOrTablet() {
	      return this.$store.state.isMobileOrTablet;
	    },
	    fullScreenMapEnabled: function fullScreenMapEnabled() {
	      return this.$store.state.fullScreenMapEnabled;
	    },
	    popoutAble: function popoutAble() {
	      var answer;
	      if (this.$config.cyclomedia.popoutAble === false) {
	        answer = false;
	      } else {
	        answer = true;
	      }
	      return answer
	    },
	    cyclomediaInitialized: function cyclomediaInitialized() {
	      return this.$store.state.cyclomedia.initialized;
	    },
	    cyclomediaActive: function cyclomediaActive() {
	      return this.$store.state.cyclomedia.active;
	    },
	    pictometryActive: function pictometryActive() {
	      return this.$store.state.pictometry.active;
	    },
	    cycloContainerClass: function cycloContainerClass() {
	      if (this.pictometryActive) {
	        return 'medium-16 large-16 columns mb-panel'
	      } else {
	        return 'medium-24 large-24 columns mb-panel'
	      }
	    },
	    locForCyclo: function locForCyclo() {
	      // console.log('computing locForCyclo');
	      var geocodeData = this.$store.state.geocode.data;
	      var map = this.$store.state.map.map;
	      if (geocodeData) {
	        return [geocodeData.geometry.coordinates[1], geocodeData.geometry.coordinates[0]];
	      }
	    },
	    latLngFromMap: function latLngFromMap() {
	      return this.$store.state.cyclomedia.latLngFromMap;
	    },
	    mapCenter: function mapCenter() {
	      return this.$store.state.map.center;
	    },
	    navBarOpen: function navBarOpen() {
	      return this.$store.state.cyclomedia.navBarOpen;
	    },
	    projection4326: function projection4326() {
	      return "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";
	    },
	    projection2272: function projection2272() {
	      return "+proj=lcc +lat_1=40.96666666666667 +lat_2=39.93333333333333 +lat_0=39.33333333333334 +lon_0=-77.75 +x_0=600000 +y_0=0 +ellps=GRS80 +datum=NAD83 +to_meter=0.3048006096012192 +no_defs";
	    },
	    // surfaceCursorOn() {
	    //   return this.$store.state.cyclomedia.surfaceCursorOn;
	    // }
	  },
	  watch: {
	    fullScreenMapEnabled: function fullScreenMapEnabled() {
	      this.setDivWidth();
	    },
	    locForCyclo: function locForCyclo(newCoords) {
	      // console.log('watch locForCyclo is firing, setNewLocation running with newCoords:', newCoords);
	      if (newCoords) {
	        this.setNewLocation(newCoords);
	      }
	    },
	    latLngFromMap: function latLngFromMap(newCoords) {
	      // console.log('watch latLngFromMap is firing, setNewLocation running with newCoords:', newCoords);
	      if (this.cyclomediaInitialized) {

	        if (Array.isArray(newCoords)) {
	          // console.log('it is an array');
	          this.setNewLocation([newCoords[1], newCoords[0]]);
	        } else {
	          // console.log('it is not an array');
	          this.setNewLocation([newCoords.lat, newCoords.lng]);
	        }
	      }
	    },
	    // docWidthComp() {
	    //   console.log('docWidth changed');
	    // }
	    cyclomediaInitialized: function cyclomediaInitialized() {
	      var this$1 = this;

	      StreetSmartApi.init({
	        targetElement: this.$refs.cycloviewer,
	        username: this.$config.cyclomedia.username,
	        password: this.$config.cyclomedia.password,
	        apiKey: this.$config.cyclomedia.apiKey,
	        // srs: 'EPSG:4326',
	        srs: 'EPSG:2272',
	        locale: 'en-us',
	        addressSettings: {
	          locale: 'en-us',
	          database: 'CMDatabase'
	        }
	      }).then (
	        function () {
	          // get map center and set location
	          var latLngFromMap = this$1.$store.state.cyclomedia.latLngFromMap;
	          this$1.setNewLocation([latLngFromMap[0], latLngFromMap[1]]);
	        },
	        function (err) {
	          // console.log('Api: init: failed. Error: ', err);
	        }
	      );
	      window.addEventListener('resize', this.setDivWidth);
	    },
	    cyclomediaActive: function cyclomediaActive(newActiveStatus) {
	      this.setDivWidth();
	      if (newActiveStatus === true) {
	        this.setNewLocation(this.latLngFromMap);
	      }
	    },
	    // pictometryActive() {
	    //   this.setDivWidth();
	    // }
	  },
	  updated: function updated() {
	    // console.log('cyclomedia updated running');
	    // TODO find a better way to get the image to update and not be stretched
	    // const viewer = this.$store.state.cyclomedia.viewer;
	    if (this.cyclomediaActive) {
	      if (window.panoramaViewer) {
	        window.panoramaViewer.rotateRight(0.0000001);
	      }
	    }
	    this.setDivWidth();
	  },
	  methods: {
	    setDivWidth: function setDivWidth() {
	      var docWidth = document.body.clientWidth;
	      this.docWidth = docWidth;
	      var el = document.getElementById('cyclo-container');
	      var divStyle = window.getComputedStyle(el);
	      var divWidth = parseFloat(divStyle.getPropertyValue('width').replace('px', ''));
	      this.divWidth = divWidth;
	      // console.log('setDivWidth is running, docWidth:', docWidth, 'divWidth', divWidth);
	      var answer;
	      if (this.fullScreenMapEnabled) {
	        answer = docWidth - divWidth + 'px';
	      } else {
	        answer = docWidth - (docWidth/this.$props.screenPercent + divWidth) + 'px';
	      }
	      // console.log('setDivWidth, answer:', answer);
	      this.popoutPosition = answer;
	      // return width;
	    },
	    setNewLocation: function setNewLocation(coords) {
	      // console.log('cyclomedia setNewLocation is running using', coords);
	      var viewerType = StreetSmartApi.ViewerType.PANORAMA;
	      var coords2272 = proj4(this.projection4326, this.projection2272, [coords[1], coords[0]]);
	      // StreetSmartApi.open(center.lng + ',' + center.lat, {
	      // StreetSmartApi.open(coords[1] + ',' + coords[0], {
	      StreetSmartApi.open(coords2272[0] + ',' + coords2272[1], {
	        viewerType: viewerType,
	        srs: 'EPSG:2272',
	        // srs: 'EPSG:4326',
	        panoramaViewer: {
	          closable: false,
	          maximizable: false,
	        }
	      }).then (
	        function(result) {
	          // console.log('StreetSmartApi2, result:', result);
	          var widget = this;
	          // console.log('Created component through API:', result);
	          if (result) {
	            for (var i =0; i < result.length; i++) {
	              if(result[i].getType() === StreetSmartApi.ViewerType.PANORAMA) { window.panoramaViewer = result[i]; }
	            }
	            widget.sendOrientationToStore();

	            // StreetSmartApi.removeOverlay()
	            window.panoramaViewer.toggleNavbarExpanded(widget.navBarOpen);
	            // if (widget.isMobileOrTablet) {
	            // console.log('about to remove surfaceCursorLayer');
	            // StreetSmartApi.removeOverlay('surfaceCursorLayer');
	            // console.log('removed surfaceCursorLayer');
	            // }

	            // StreetSmartApi.removeOverlay('measurementLayer');
	            // window.panoramaViewer.toggleButtonEnabled('panorama.measure', false);
	            window.panoramaViewer.toggleButtonEnabled('panorama.elevation', false);
	            window.panoramaViewer.toggleButtonEnabled('panorama.reportBlurring', false);

	            for (var i$1 = 0, list = window.panoramaViewer.props.overlays; i$1 < list.length; i$1 += 1) {
	              // console.log('overlay:', overlay);
	              var overlay = list[i$1];

	              if (overlay.id === 'surfaceCursorLayer') {
	                if (overlay.visible === true) {
	                  window.panoramaViewer.toggleOverlay(overlay);
	                  // overlay.visible = false;
	                }
	              }
	            }

	            if (!this.$config.cyclomedia.measurementAllowed || this.$config.cyclomedia.measurementAllowed === 'false') {
	              StreetSmartApi.removeOverlay('measurementLayer');
	              window.panoramaViewer.toggleButtonEnabled('panorama.measure', false);
	            }

	            window.panoramaViewer.on('VIEW_CHANGE', function() {
	              if (window.panoramaViewer.props.orientation.yaw !== widget.$store.state.cyclomedia.orientation.yaw ||
	                  window.panoramaViewer.props.orientation.xyz !== widget.$store.state.cyclomedia.orientation.xyz
	              ) {
	                // console.log('on VIEW_CHANGE fired with yaw change', window.panoramaViewer.props.orientation);
	                widget.sendOrientationToStore();
	              } else if (window.panoramaViewer.getNavbarExpanded() !== this.navBarOpen) {
	                widget.$store.commit('setCyclomediaNavBarOpen', window.panoramaViewer.getNavbarExpanded());
	              }
	            });

	            window.panoramaViewer.on('VIEW_LOAD_END', function() {
	              if (window.panoramaViewer.props.orientation.yaw !== widget.$store.state.cyclomedia.orientation.yaw ||
	                  window.panoramaViewer.props.orientation.xyz !== widget.$store.state.cyclomedia.orientation.xyz
	              ) {
	                // console.log('on VIEW_CHANGE fired with yaw change', window.panoramaViewer.props.orientation);
	                widget.sendOrientationToStore();
	              } else if (window.panoramaViewer.getNavbarExpanded() !== this.navBarOpen) {
	                widget.$store.commit('setCyclomediaNavBarOpen', window.panoramaViewer.getNavbarExpanded());
	              }
	            });
	          }
	        }.bind(this)
	      ).catch(
	        function(reason) {
	          // console.log('Failed to create component(s) through API: ' + reason);
	        }
	      );

	      // const viewer = this.$store.state.cyclomedia.viewer;
	      // viewer.openByCoordinate(coords);
	    },
	    sendOrientationToStore: function sendOrientationToStore() {
	      // console.log('sendOrientationToStore, yaw:', window.panoramaViewer.props.orientation.yaw);
	      this.$store.commit('setCyclomediaYaw', window.panoramaViewer.props.orientation.yaw);
	      this.$store.commit('setCyclomediaHFov', window.panoramaViewer.props.orientation.hFov);
	      var xy = [window.panoramaViewer.props.orientation.xyz[0], window.panoramaViewer.props.orientation.xyz[1]];
	      var lnglat = proj4(this.projection2272, this.projection4326, xy);
	      // console.log('xy:', xy, 'lnglat', lnglat);
	      this.$store.commit('setCyclomediaXyz', lnglat);
	    },
	    popoutClicked: function popoutClicked() {
	      var map = this.$store.state.map.map;
	      var center = map.getCenter();
	      window.open('//cyclomedia.phila.gov/?' + center.lat + '&' + center.lng, '_blank');
	      this.$store.commit('setCyclomediaActive', false);
	    }
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .inactive[data-v-651e14cc] { background-color: #ffffff; } .inactive[data-v-651e14cc]:hover { background-color: #ffffff; } .active[data-v-651e14cc] { background-color: rgb(243, 198, 19); } .active[data-v-651e14cc]:hover { background-color: rgb(243, 198, 19); } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var PictometryButton = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"leaflet-bar easy-button-container leaflet-control"},[_c('button',{class:this.pictometryActive,on:{"click":function($event){$event.preventDefault();return _vm.handleButtonClick($event)}}},[_c('span',{staticClass:"button-state"},[_c('img',{staticClass:"button-image",attrs:{"src":_vm.imgSrc}})])])])},staticRenderFns: [],_scopeId: 'data-v-651e14cc',
	  extends: Control,
	  // TODO figure how to extend props. sometimes it's an obj, sometimes an array.
	  // props: Object.assign(props, {
	  // }),
	  props: [
	    'link',
	    'imgSrc'
	  ],
	  computed: {
	    pictometryActive: function pictometryActive() {
	      return this.$store.state.pictometry.active ? 'active' : 'inactive'
	    }
	  },
	  methods: {
	    handleButtonClick: function handleButtonClick(e) {
	      this.$store.commit('setPictometryActive', !this.$store.state.pictometry.active);
	    },
	  }
	};

	var PictometryMixin = {
	  computed: {
	    pictometryActive: function pictometryActive() {
	      return this.$store.state.pictometry.active;
	    }
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
	var PictometryPngMarker = {
	  props: [
	    'icon',
	    'latlng',
	    'height',
	    'width'
	  ],
	  render: function render(h) {
	    return;
	  },
	  computed: {
	    ipa: function ipa() {
	      return this.$store.state.pictometry.ipa;
	    },
	  },
	  mounted: function mounted() {
	    // console.log('mounting PngMarker', this.icon);
	    this.placeMarker(this.$props.latlng);
	  },
	  beforeDestroy: function beforeDestroy() {
	    // console.log('before destroying PngMarker', this.icon);
	    this.ipa.removeShapes(this.$store.state.pictometry.pngMarkerIds);
	    // console.log('before destroyed PngMarker', this.icon);
	  },
	  // destroyed() {
	  //   console.log('destroying PngMarker', this.icon);
	  //   this.ipa.removeShapes(this.$store.state.pictometry.pngMarkerIds);
	  //   console.log('destroyed PngMarker', this.icon);
	  // },
	  watch: {
	    latlng: function latlng(nextLatlng) {
	      // console.log('PngMarker: latlng changed');
	      this.ipa.removeShapes(this.$store.state.pictometry.pngMarkerIds);
	      this.placeMarker(nextLatlng);
	    }
	  },
	  methods: {
	    constructLocalUrl: function constructLocalUrl(host, path1, path2) {
	      var url;
	      if (window.location.protocol === 'https:') {
	        // console.log('using https', window.location.protocol);
	        url = 'https://' + host + path1 + path2;
	      } else {
	        // console.log('using http', window.location.protocol);
	        url = 'http://' + host + path1 + path2;
	      }
	      // console.log('constructing url:', url);
	      return url
	    },
	    placeMarker: function placeMarker(nextLatlng) {
	      // console.log('starting placeMarker', nextLatlng, this.$props.icon);
	      var port = window.location.port;
	      var host;
	      if (port != '') {
	        host = window.location.hostname + ':' + port;
	      } else {
	        host = window.location.hostname;
	      }
	      var pngMarker = {
	        type : this.ipa.SHAPE_TYPE.MARKER,
	        center: { y: nextLatlng[0], x: nextLatlng[1]},
	        markerImageHeight: this.$props.height,
	        markerImageWidth: this.$props.width,
	        markerOffsetX: this.$props.offsetX,
	        markerOffsetY: this.$props.offsetY,
	        markerImage: this.constructLocalUrl(host, '/', this.$props.icon),
	        onShapeClick: 'true'
	      };
	      this.ipa.addShapes([pngMarker], this.didAddShapes);
	    },
	    didAddShapes: function didAddShapes(result) {
	      // const pngMarkerIds = shapes.filter(shape => {
	      //                         return shape.success === 'true';
	      //                       }).map(shape => shape.shapeId);
	      // this.$store.commit('setPictometryPngMarkerIds', pngMarkerIds);
	      for ( var i = 0; i < result.length; i++) {
	        if ( result[i].success === 'false' ) {
	          console.log(result[i].error);
	        } else {
	          var pngMarkerIds = this.$store.state.pictometry.pngMarkerIds;
	          // console.log('pngMarkerIds', pngMarkerIds);
	          pngMarkerIds.push(result[i].shapeId);

	        }
	      }
	    },
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
	var PictometryViewCone = {
	  props: [
	    'latlng',
	    'rotationAngle',
	    'hFov'
	  ],
	  render: function render(h) {
	    return;
	  },
	  computed: {
	    ipa: function ipa() {
	      return this.$store.state.pictometry.ipa;
	    },
	    zoom: function zoom() {
	      return this.$store.state.pictometry.zoom;
	    },
	    radius: function radius() {
	      var zoomMap = {
	        '17': 75,
	        '18': 50,
	        '19': 25,
	        '20': 15,
	        '21': 10,
	        '22': 10,
	        '23': 10,
	        '24': 10
	      };
	      return zoomMap[this.zoom]
	      // return zoomMap[this.$store.state.map.zoom]
	    }
	  },
	  mounted: function mounted() {
	    this.getViewConeLatLon();
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.ipa.removeShapes(this.$store.state.pictometry.shapeIds);
	  },
	  watch: {
	    radius: function radius(nextRadius) {
	      // this.ipa.getMetaData(function(e) {
	      //   console.log(e);
	      // });
	      // this.ipa.getZoomRange(function(e) {
	      //   console.log(e);
	      // })
	      // console.log('radius:', nextRadius);
	      this.getViewConeLatLon();
	    },
	    rotationAngle: function rotationAngle() {
	      this.ipa.removeShapes(this.$store.state.pictometry.shapeIds);
	      this.getViewConeLatLon();
	    },
	    latlng: function latlng() {
	      this.ipa.removeShapes(this.$store.state.pictometry.shapeIds);
	      this.getViewConeLatLon();
	    },
	  },
	  methods: {
	    getViewConeLatLon: function getViewConeLatLon() {
	      // console.log('getViewConeLatLon is running');
	      var camLat = this.latlng[0];
	      var camLon = this.latlng[1];
	      // Earth's radius
	      var ER=6378137;
	      // viewcone radius, for scaling its size
	      // const camR = 10;
	      var camR = this.radius;
	      // Angle1 - camera angle off of N, Angle2 - fov angle
	      var Angle1 = this.rotationAngle;
	      var Angle2 = parseFloat(this.hFov) * 180/Math.PI;

	      var dnLP = Math.cos((Angle1+Angle2/2) * Math.PI/180)*camR;
	      var deLP = Math.sin((Angle1+Angle2/2) * Math.PI/180)*camR;
	      var dnRP = Math.cos((Angle1-Angle2/2) * Math.PI/180)*camR;
	      var deRP = Math.sin((Angle1-Angle2/2) * Math.PI/180)*camR;
	      //Coordinate offsets in radians
	      var dLatLP = dnLP/ER;
	      var dLonLP = deLP/(ER*Math.cos(Math.PI*camLat/180));
	      var dLatRP = dnRP/ER;
	      var dLonRP = deRP/(ER*Math.cos(Math.PI*camLat/180));
	      //OffsetPosition
	      var camRightLat = camLat + dLatLP * 180/Math.PI;
	      var camRightLon = camLon + dLonLP * 180/Math.PI;
	      var camLeftLat = camLat + dLatRP * 180/Math.PI;
	      var camLeftLon = camLon + dLonRP * 180/Math.PI;

	      var coordinates = [ {y : camLat, x : camLon, z: 0.0}, {y : camRightLat, x : camRightLon, z: 0.0}, {y : camLeftLat, x : camLeftLon, z: 0.0} ];
	      this.placeViewCone(coordinates);
	    },

	    placeViewCone: function(coords){
	      // console.log('placeViewCone is running');
	      var self = this;
	      var viewTriangle = {
	        type: this.ipa.SHAPE_TYPE.POLYGON,
	        coordinates: coords,
	        // coordinates : [ {y : app.state.stViewY, x : app.state.stViewX, z: 0.0}, {y : app.state.viewCone.camRightLat, x : app.state.viewCone.camRightLon, z: 0.0}, {y : app.state.viewCone.camLeftLat, x : app.state.viewCone.camLeftLon, z: 0.0} ],
	        strokeColor: "#00a0ee",
	        strokeOpacity: 0.75,
	        strokeWeight: 2,
	        fillColor: "#00a0ee",
	        fillOpacity: 0.25,
	        altitudeMode: this.ipa.ALTITUDE_MODE.RELATIVE_TO_GROUND
	      };
	      this.ipa.addShapes([viewTriangle], function(result) {
	        for ( var i = 0; i < result.length; i++) {
	          if ( result[i].success === 'false' ) {
	            alert(result[i].error);
	          } else {
	            var shapeIds = self.$store.state.pictometry.shapeIds;
	            // console.log('shapeIds:', shapeIds);
	            // console.log('current shapeId:', result[i].shapeId);
	            shapeIds.push(result[i].shapeId);
	            var test = shapeIds.slice(0, -1);
	            // console.log('slice', test);
	            self.ipa.removeShapes(shapeIds.slice(0, -1));
	          }
	        }
	      });
	    },
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" header.site-header > .row[data-v-b47b60a8]:last-of-type { background: #2176d2; } #in-pict-div[data-v-b47b60a8] { position: absolute; top: 0px; right: 0px; background-color: white; border: 0px solid; width: 30px; height: 30px; cursor:pointer; /* float: right; */ /*display:none;*/ /*z-index: 2000000;*/ /*position: relative; top: 0px; right: 0px;*/ } .popout-icon[data-v-b47b60a8] { margin-top: 8.5px; font-size: 15px; margin-left: 8.5px; } #pict-container[data-v-b47b60a8] { padding: 0px; height: 50%; position: relative; display: none; } @media screen and (min-width: 46.875em) { #pict-container[data-v-b47b60a8] { display: block; } } /*#iframe-div { }*/ #pictometry-ipa[data-v-b47b60a8] { height: 100%; width: 100%; border: 0px; } #search-container[data-v-b47b60a8] { float: right; } #search-input[data-v-b47b60a8] { float: left; width: 400px; } #search-button[data-v-b47b60a8] { height: 2.78571rem; } #data-panel[data-v-b47b60a8] { background: #fff; padding-left: 12px; padding-right: 12px; height: 100%; } #data-panel > h1[data-v-b47b60a8] { color: #666; } #data-row-list > a[data-v-b47b60a8] { background: #f5f5f5; border: 1px solid #ddd; display: block; font-size: 18px; font-weight: normal; height: 70px; line-height: 45px; /*margin-left: 10px;*/ /*margin-right: 10px;*/ padding: 10px; /*vertical-align: middle;*/ /*text-align: middle;*/ box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); margin-bottom: 8px; } #data-row-list > a[data-v-b47b60a8]:hover { background: #fff; color: inherit; } #data-row-list .data-row-link-icon[data-v-b47b60a8] { padding-right: 30px; } .data-row[data-v-b47b60a8] { padding: 10px; margin-bottom: 10px; display: none; } .data-row table th[data-v-b47b60a8], .data-row table td[data-v-b47b60a8] { font-size: 15px; margin-left: 8.5px; } #pict-container[data-v-b47b60a8] { padding: 0px; height: 50%; position: relative; } /*#iframe-div { }*/ "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var PictometryWidget = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:this.pictContainerClass,attrs:{"id":"pict-container"}},[(this.isMobileOrTablet === false)?_c('div',{attrs:{"id":"in-pict-div"},on:{"click":this.popoutClicked}},[_c('font-awesome-icon',{staticClass:"popout-icon",attrs:{"icon":"external-link"}})],1):_vm._e(),_vm._v(" "),_c('iframe',{ref:"pictometryIpa",attrs:{"id":"pictometry-ipa","src":"#"}}),_vm._v(" "),_c('div',[_vm._t("default")],2)])},staticRenderFns: [],_scopeId: 'data-v-b47b60a8',
	  props: [
	    'apiKey',
	    'secretKey' ],
	  created: function created() {
	    this.$IFRAME_ID = 'pictometry-ipa';
	  },
	  mounted: function mounted() {
	    // fetch pictometry ipa script
	    var scriptUrl = 'https://pol.pictometry.com/ipa/v1/embed/host.php' + '?apikey=' + this.apiKey;
	    var self = this;
	    $$1.getScript(scriptUrl, self.init);
	  },
	  computed: {
	    isMobileOrTablet: function isMobileOrTablet() {
	      return this.$store.state.isMobileOrTablet;
	    },
	    cyclomediaActive: function cyclomediaActive() {
	      return this.$store.state.cyclomedia.active;
	    },
	    pictContainerClass: function pictContainerClass() {
	      if (this.cyclomediaActive) {
	        return 'medium-8 large-8 columns mb-panel';
	      } else {
	        return 'medium-24 large-24 columns mb-panel';
	      }
	    },
	    mapCenter: function mapCenter() {
	      // return this.$store.state.geocode.data.geometry.coordinates;
	      return this.$store.state.pictometry.map.center;
	    },
	    mapZoom: function mapZoom() {
	      // const mapZoom = this.$store.state.map.zoom;
	      // let zoom;
	      // if (this.cyclomediaActive) {
	      //   zoom = mapZoom
	      // } else {
	      //   zoom = mapZoom + 1;
	      // }
	      // return zoom;
	      return this.$store.state.pictometry.map.zoom;
	    },
	  },
	  watch: {
	    mapCenter: function mapCenter(nextCenter) {
	      var x = nextCenter[0];
	      var y = nextCenter[1];
	      var zoom = this.mapZoom;
	      if (this.$ipa) {
	        this.$ipa.setLocation({ x: x, y: y, zoom: zoom });
	      }
	    },
	    mapZoom: function mapZoom(nextZoom) {
	      // console.log('watch zoomSentToPict', nextZoom);
	      if (this.$ipa) {
	        this.$ipa.setLocation({
	          y: this.mapCenter.lat,
	          x: this.mapCenter.lng,
	          zoom: nextZoom
	        });
	      }
	    },
	    cyclomediaActive: function cyclomediaActive(nextStatus) {
	      if (nextStatus) {
	        // console.log('pict: cyclo on');
	        this.$ipa.showDashboard({
	          zoom: false,
	          imageFilter: false,
	          layers: false,
	          nextPrevious: false,
	          tools: false,
	          annotations: false,
	          rotation: false,
	          clearMeasurements: false,
	          exportPdf: false,
	          dualPane: false,
	          imageDate: false,
	          panTool: false,
	          exportImage: false,
	          areaTool: false,
	          distanceTool: false,
	          heightTool: false,
	          locationTool: false,
	          elevationTool: false,
	          bearingTool: false,
	          slopeTool: false,
	          xyzTool: false,
	          identifyPoint: false,
	          identifyBox: false
	        });
	      } else {
	        // console.log('pict: cyclo off');
	        this.$ipa.showDashboard({
	          zoom: true,
	          imageFilter: true,
	          layers: true,
	          nextPrevious: true,
	          tools: true,
	          annotations: true,
	          rotation: true,
	          clearMeasurements: true,
	          exportPdf: true,
	          dualPane: true,
	          imageDate: true,
	          panTool: true,
	          exportImage: true,
	          areaTool: true,
	          distanceTool: true,
	          heightTool: true,
	          locationTool: true,
	          elevationTool: true,
	          bearingTool: true,
	          slopeTool: true,
	          xyzTool: true,
	          identifyPoint: true,
	          identifyBox: true
	        });
	      }
	    }
	  },
	  methods: {
	    popoutClicked: function popoutClicked() {
	      var map = this.$store.state.map.map;
	      var center = map.getCenter();
	      window.open('//pictometry.phila.gov/?' + center.lat + '&' + center.lng, '_blank');
	      this.$store.commit('setPictometryActive', false);
	    },
	    init: function init() {
	      // construct signed url
	      var d = new Date();
	      var t = Math.floor(d.getTime() / 1000);
	      var unsignedUrl = 'https://pol.pictometry.com/ipa/v1/load.php' + "?apikey=" + this.apiKey + "&ts=" + t;
	      var hash = md5(unsignedUrl, this.secretKey);
	      var iframeId = this.$IFRAME_ID;
	      var signedUrl = unsignedUrl + "&ds=" + hash + "&app_id=" + iframeId;

	      // set the iframe src to load the IPA
	      var iframe = this.$refs.pictometryIpa;
	      // REVIEW can we bind this to a computed instead?
	      iframe.setAttribute('src', signedUrl);

	      // create pictometry host
	      var ipa = this.$ipa = new PictometryHost(iframeId, 'https://pol.pictometry.com/ipa/v1/load.php');
	      this.$store.commit('setPictometryIpa', ipa);
	      ipa.ready = this.ipaReady;
	    },
	    ipaReady: function ipaReady() {
	      this.$ipa.setLocation({
	        y: this.mapCenter.lat,
	        x: this.mapCenter.lng,
	        zoom: this.mapZoom
	      });

	      var self = this;

	      this.$ipa.addListener('onendzoom', function(zoom) {
	        // console.log('widget: ipa detected zoom change to', zoom);
	        self.$store.commit('setPictometryZoom', zoom.level);
	      });
	    },
	  }, // end of methods
	}; // end of export

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
	var PictometryLayer = {
	  render: function render(h) {
	    return;
	  },
	  computed: {
	    ipa: function ipa() {
	      return this.$store.state.pictometry.ipa;
	    },
	    activeTopic: function activeTopic() {
	      return this.$store.state.activeTopic;
	    }
	  },
	  mounted: function mounted() {
	    this.didActivateTopic(this.activeTopic);
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.didDeactivateTopic(this.activeTopic);
	  },
	  watch: {
	    activeTopic: function activeTopic(nextTopic, prevTopic) {
	      this.didDeactivateTopic(prevTopic);
	      this.didActivateTopic(nextTopic);
	    }
	  },
	  methods: {
	    didActivateTopic: function didActivateTopic(topic) {
	      // console.log('didActivateTopic is firing with topic: ', topic);
	      switch (topic) {
	        case 'deeds':
	          // turn on DOR Parcels
	          this.ipa.showLayer({
	            id: 114828,
	            visible: true,
	          });
	          break;
	        case 'zoning':
	          // turn on zoning
	          this.ipa.showLayer({
	            id: 112230,
	            visible: true,
	          });
	          break;
	        case 'water':
	          // turn on water Parcels
	          this.ipa.showLayer({
	            id: 108982,
	            visible: true,
	          });
	          break;

	        default:
	          // turn off DOR parcels
	          this.ipa.showLayer({
	            id: 113478,
	            visible: false,
	          });
	          // turn off zoning
	          this.ipa.showLayer({
	            id: 112230,
	            visible: false,
	          });
	      }
	    },

	    didDeactivateTopic: function didDeactivateTopic(topic) {
	      switch (topic) {
	        case 'deeds':
	          // turn off DOR parcels
	          this.ipa.showLayer({
	            id: 114828,
	            visible: false,
	          });
	          break;

	        case 'zoning':
	          // turn on zoning
	          this.ipa.showLayer({
	            id: 112230,
	            visible: false,
	          });
	          break;

	        case 'water':
	          // turn off water
	          this.ipa.showLayer({
	            id: 108982,
	            visible: false,
	          });

	        default:
	          // turn off DOR parcels
	          this.ipa.showLayer({
	            id: 113478,
	            visible: false,
	          });
	          // turn off zoning
	          this.ipa.showLayer({
	            id: 112230,
	            visible: false,
	          });
	      }
	    },


	  }
	};

	// some default values, which get overwritten by the app importing
	// these could be put in the object instead of this roundabout way
	// but this is to remind me that mapboard store redefines these values
	var config = {
	  map: {
	    center:[-75.163471, 39.953338],
	    zoom: 18,
	  },
	  // pictometry: {
	  //   enabled: '',
	  // },
	  // cyclomedia: {
	  //   enabled: '',
	  // }
	};

	var initialState = {
	  activeTopic: '',
	  shouldShowAddressCandidateList: false,

	  // the leaflet map object
	  map: {
	    location: {
	      lat: null,
	      lng: null
	    },
	    center: config.map.center,
	    bounds: {
	      _northEast: {
	        lat: null,
	        lng: null,
	      },
	      _southWest: {
	        lat: null,
	        lng: null,
	      },
	    },
	    zoom: config.map.zoom,
	    boundsBasedOnShape: null,
	    map: null,
	    // this gets set to the parcel layer for the default topic by
	    // DataManager.resetGeocode; see note above for activeTopic and
	    basemap: '',
	    imagery: 'imagery2018',
	    shouldShowImagery: false,
	    // this is the key for the active overlay image (eg regmap)
	    imageOverlay: null,
	    imageOverlayOpacity: null,
	    filters: [],
	    watchPositionOn: false,
	  },

	  cyclomedia: {
	    initialized: false,
	    navBarOpen: false,
	    // surfaceCursorOn: true,
	    latLngFromMap: null,
	    orientation: {
	      yaw: null,
	      hFov: null,
	      xyz: null,
	    },
	    active: false,
	    recordings: [],
	  },
	  // we need this to know whether or not to force an update on the first show
	  pictometry: {
	    ipa: null,
	    active: false,
	    shapeIds: [],
	    pngMarkerIds: [],
	    zoom: null,
	    // this is the state of the main leaflet map. when these values change
	    // the pictometry widget should react. the reason these are duplicated
	    // here is to avoid an infinite loop in the Map component when the
	    // viewport changes.
	    map: {
	      center: config.map.center,
	      zoom: config.map.zoom
	    }
	  },
	};

	var pvmStore = {
	  state: initialState,
	  mutations: {
	    setWatchPositionOn: function setWatchPositionOn(state, payload) {
	      state.map.watchPositionOn = payload;
	    },
	    setLocation: function setLocation(state, payload) {
	      state.map.location.lat = payload.lat;
	      state.map.location.lng = payload.lng;
	    },
	    setActiveTopic: function setActiveTopic(state, payload) {
	      state.activeTopic = payload;
	    },
	    setMapZoom: function setMapZoom(state, payload) {
	      state.map.zoom = payload;
	    },
	    setImagery: function setImagery(state, payload) {
	      state.map.imagery = payload;
	    },
	    setShouldShowImagery: function setShouldShowImagery(state, payload) {
	      state.map.shouldShowImagery = payload;
	    },
	    setShouldShowAddressCandidateList: function setShouldShowAddressCandidateList(state, payload) {
	      state.shouldShowAddressCandidateList = payload;
	    },


	    setCyclomediaInitialized: function setCyclomediaInitialized(state, payload) {
	      state.cyclomedia.initialized = payload;
	    },
	    setPictometryActive: function setPictometryActive(state, payload) {
	      // if (!config.pictometry.enabled) {
	      //   return;
	      // }
	      state.pictometry.active = payload;
	    },
	    setCyclomediaActive: function setCyclomediaActive(state, payload) {
	      // console.log('setCyclomediaActive is running, config:', config);
	      // if (!config.cyclomedia.enabled) {
	      //   return;
	      // }
	      state.cyclomedia.active = payload;
	    },
	    setCyclomediaYaw: function setCyclomediaYaw(state, payload) {
	      state.cyclomedia.orientation.yaw = payload;
	    },
	    setCyclomediaHFov: function setCyclomediaHFov(state, payload) {
	      state.cyclomedia.orientation.hFov = payload;
	    },
	    setCyclomediaXyz: function setCyclomediaXyz(state, payload) {
	      state.cyclomedia.orientation.xyz = payload;
	    },
	    setCyclomediaRecordings: function setCyclomediaRecordings(state, payload) {
	      state.cyclomedia.recordings = payload;
	    },
	    setCyclomediaLatLngFromMap: function setCyclomediaLatLngFromMap(state, payload) {
	      state.cyclomedia.latLngFromMap = payload;
	      // const { lat, lng } = payload || {};
	      // state.cyclomedia.latLngFromMap[0] = lat;
	      // state.cyclomedia.latLngFromMap[1] = lng;
	    },
	    setCyclomediaNavBarOpen: function setCyclomediaNavBarOpen(state, payload) {
	      state.cyclomedia.navBarOpen = payload;
	    },
	    // setCyclomediaSurfaceCursorOn(state, payload) {
	    //   state.cyclomedia.surfaceCursorOn = payload;
	    // },

	    setPictometryIpa: function setPictometryIpa(state, payload) {
	      state.pictometry.ipa = payload;
	    },
	    setPictometryShapeIds: function setPictometryShapeIds(state, payload) {
	      state.pictometry.shapeIds = payload;
	    },
	    setPictometryPngMarkerIds: function setPictometryPngMarkerIds(state, payload) {
	      state.pictometry.pngMarkerIds = payload;
	    },
	    // this is the leaflet map center updated when the map is moved
	    setPictometryMapCenter: function setPictometryMapCenter(state, payload) {
	      state.pictometry.map.center = payload;
	    },
	    setPictometryMapZoom: function setPictometryMapZoom(state, payload) {
	      state.pictometry.map.zoom = payload;
	    },
	    setPictometryZoom: function setPictometryZoom(state, payload) {
	      state.pictometry.zoom = payload;
	    },


	    setMap: function setMap(state, payload) {
	      state.map.map = payload.map;
	    },






	  }
	};

	fontawesomeSvgCore.dom.watch(); // This will kick of the initial replacement of i to svg tags and configure a MutationObserver
	fontawesomeSvgCore.library.add(faSearch_2, faTimes_2, faMapMarkerAlt_2, faDotCircle_2, faCaretLeft_2, faCaretRight_2);


	// Exports
	// Leaflet
	exports.Map_ = Map_;
	exports.Control = Control;
	exports.Geojson = Geojson;
	exports.CircleMarker =  CircleMarker;
	exports.ControlCorner =  ControlCorner;
	exports.PopUp = PopUp;
	exports.PopUpContent = PopUpContent;
	exports.Polygon_ = Polygon_;
	exports.Polyline_ = Polyline_;

	// Esri-Leaflet
	exports.EsriTiledMapLayer =  EsriTiledMapLayer;
	exports.EsriTiledOverlay =  EsriTiledOverlay;
	exports.EsriDynamicMapLayer =  EsriDynamicMapLayer;
	exports.EsriFeatureLayer =  EsriFeatureLayer;
	exports.WebMap = WebMap;
	exports.WebMapLayer = WebMapLayer;

	// our components
	exports.AddressInput =  AddressInput;
	exports.AddressCandidateList =  AddressCandidateList;
	exports.OpacitySlider =  OpacitySlider;
	exports.VectorMarker =  VectorMarker;
	exports.PngMarker =  PngMarker;
	exports.BasemapToggleControl =  BasemapToggleControl;
	exports.BasemapSelectControl =  BasemapSelectControl;
	exports.FullScreenMapToggleTab =  FullScreenMapToggleTab;
	exports.FullScreenMapToggleTabVertical =  FullScreenMapToggleTabVertical;
	exports.LocationControl =  LocationControl;
	exports.MeasureControl =  MeasureControl$1;
	exports.LegendControl =  LegendControl;
	exports.BasemapTooltip =  BasemapTooltip;
	exports.ModalAbout = ModalAbout;

	// Cyclomedia
	exports.CyclomediaButton =  CyclomediaButton;
	exports.CyclomediaRecordingCircle =  CyclomediaRecordingCircle;
	exports.CyclomediaRecordingsClient =  RecordingsClient;
	exports.SvgViewConeMarker =  SvgViewConeMarker;
	exports.CyclomediaMixin = CyclomediaMixin;
	exports.CyclomediaWidget = CyclomediaWidget;

	// Pictometry
	exports.PictometryButton =  PictometryButton;
	exports.PictometryMixin = PictometryMixin;
	exports.PictometryPngMarker = PictometryPngMarker;
	exports.PictometryViewCone = PictometryViewCone;
	exports.PictometryWidget = PictometryWidget;
	exports.PictometryLayer = PictometryLayer;

	exports.pvmStore = pvmStore;

	exports.default = exports;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=phila-vue-mapping.js.map
