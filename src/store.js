// some default values, which get overwritten by the app importing
// these could be put in the object instead of this roundabout way
// but this is to remind me that mapboard store redefines these values
let config = {
  map: {
    center:[ -75.163471, 39.953338 ],
    zoom: 18,
  },
  // pictometry: {
  //   enabled: '',
  // },
  // cyclomedia: {
  //   enabled: '',
  // }
};

const initialState = {
  activeTopic: '',
  shouldShowAddressCandidateList: false,
  drawStart: null,
  drawShape: null,
  bufferMode: false,
  editableLayers: null,
  bufferShape: null,

  // the leaflet map object
  map: {
    location: {
      lat: null,
      lng: null,
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
    imagery: 'imagery2019',
    selectedOverlay: null,
    shouldShowOverlaySelectControl: false,
    shouldShowBasemapSelectControl: false,
    // this is the key for the active overlay image (eg regmap)
    imageOverlay: null,
    imageOverlayOpacity: null,
    filters: [],
    watchPositionOn: false,
    shouldInitialize: true,
    initialized: null,
  },

  cyclomedia: {
    initializationBegun: false,
    initializationComplete: false,
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
      zoom: config.map.zoom,
    },
  },
};

const pvmStore = {
  state: initialState,
  mutations: {
    setShouldInitializeMap(state, payload) {
      state.map.shouldInitialize = payload;
    },
    setInitializedMap(state, payload) {
      state.map.initialized = payload;
    },
    setBufferShape(state, payload) {
      state.bufferShape = payload;
    },
    setBufferMode(state, payload) {
      // console.log('setBufferMode is running, payload:', payload);
      state.bufferMode = payload;
    },
    setDrawStart(state, payload) {
      state.drawStart = payload;
    },
    setDrawShape(state, payload) {
      state.drawShape = payload;
    },
    setEditableLayers(state, payload) {
      state.editableLayers = payload;
    },
    setMapCenter(state, payload) {
      state.map.center = payload;
    },
    setMapZoom(state, payload) {
      state.map.zoom = payload;
    },
    setWatchPositionOn(state, payload) {
      state.map.watchPositionOn = payload;
    },
    setLocation(state, payload) {
      state.map.location.lat = payload.lat;
      state.map.location.lng = payload.lng;
    },
    setActiveTopic(state, payload) {
      state.activeTopic = payload;
    },
    setImagery(state, payload) {
      state.map.imagery = payload;
    },
    setSelectedOverlay(state, payload) {
      state.map.selectedOverlay = payload;
    },
    setShouldShowOverlaySelectControl(state, payload) {
      state.map.shouldShowOverlaySelectControl = payload;
    },
    setShouldShowBasemapSelectControl(state, payload) {
      state.map.shouldShowBasemapSelectControl = payload;
    },
    setShouldShowAddressCandidateList(state, payload) {
      state.shouldShowAddressCandidateList = payload;
    },


    setCyclomediaInitializationBegun(state, payload) {
      // console.log('setCyclomediaInitializationBegun is running, payload:', payload);
      state.cyclomedia.initializationBegun = payload;
    },
    setCyclomediaInitilizationComplete(state, payload) {
      // console.log('setCyclomediaInitializationComplete is running, payload:', payload);
      state.cyclomedia.initializationComplete = payload;
    },
    setPictometryActive(state, payload) {
      // if (!config.pictometry.enabled) {
      //   return;
      // }
      state.pictometry.active = payload;
    },
    setCyclomediaActive(state, payload) {
      // console.log('setCyclomediaActive is running, config:', config);
      // if (!config.cyclomedia.enabled) {
      //   return;
      // }
      state.cyclomedia.active = payload;
    },
    setCyclomediaYaw(state, payload) {
      // console.log('setCyclomediaYaw is running, payload:', payload);
      state.cyclomedia.orientation.yaw = payload;
    },
    setCyclomediaHFov(state, payload) {
      // console.log('setCyclomediaHFov is running, payload:', payload);
      state.cyclomedia.orientation.hFov = payload;
    },
    setCyclomediaXyz(state, payload) {
      // console.log('setCyclomediaXyz is running, payload:', payload);
      state.cyclomedia.orientation.xyz = payload;
    },
    setCyclomediaRecordings(state, payload) {
      state.cyclomedia.recordings = payload;
    },
    setCyclomediaLatLngFromMap(state, payload) {
      state.cyclomedia.latLngFromMap = payload;
      // const { lat, lng } = payload || {};
      // state.cyclomedia.latLngFromMap[0] = lat;
      // state.cyclomedia.latLngFromMap[1] = lng;
    },
    setCyclomediaNavBarOpen(state, payload) {
      state.cyclomedia.navBarOpen = payload;
    },
    // setCyclomediaSurfaceCursorOn(state, payload) {
    //   state.cyclomedia.surfaceCursorOn = payload;
    // },

    setPictometryIpa(state, payload) {
      state.pictometry.ipa = payload;
    },
    setPictometryShapeIds(state, payload) {
      state.pictometry.shapeIds = payload;
    },
    setPictometryPngMarkerIds(state, payload) {
      state.pictometry.pngMarkerIds = payload;
    },
    // this is the leaflet map center updated when the map is moved
    setPictometryMapCenter(state, payload) {
      state.pictometry.map.center = payload;
    },
    setPictometryMapZoom(state, payload) {
      state.pictometry.map.zoom = payload;
    },
    setPictometryZoom(state, payload) {
      state.pictometry.zoom = payload;
    },
    setMap(state, payload) {
      state.map.map = payload.map;
    },
    setBasemap(state, payload) {
      state.map.basemap = payload;
    },
    setShouldShowImagery(state, payload) {
      state.map.shouldShowImagery = payload;
    },
  },
};

export default pvmStore;
