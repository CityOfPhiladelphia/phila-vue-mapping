
// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { dom } from '@fortawesome/fontawesome-svg-core'
dom.watch() // This will kick of the initial replacement of i to svg tags and configure a MutationObserver

import { faDotCircle } from '@fortawesome/pro-regular-svg-icons/faDotCircle';
import { faSearch } from '@fortawesome/pro-solid-svg-icons/faSearch';
import { faTimes } from '@fortawesome/pro-solid-svg-icons/faTimes';
import { faMapMarkerAlt } from '@fortawesome/pro-solid-svg-icons/faMapMarkerAlt';
import { faCaretLeft } from '@fortawesome/pro-solid-svg-icons/faCaretLeft';
import { faCaretRight } from '@fortawesome/pro-solid-svg-icons/faCaretRight';
library.add(faSearch, faTimes, faMapMarkerAlt, faDotCircle, faCaretLeft, faCaretRight);
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Leaflet
import Map_ from './leaflet/Map.vue';
import Control from './leaflet/Control.vue';
import Geojson from './leaflet/Geojson.vue';
import CircleMarker from './leaflet/CircleMarker.vue';
import ControlCorner from './leaflet/ControlCorner.vue';
import PopUp from './leaflet/PopUp.vue';
import PopUpContent from './leaflet/PopUpContent.vue';
import Polygon_ from './leaflet/Polygon.vue';
import Polyline_ from './leaflet/Polyline.vue';

// Esri-Leaflet
import EsriTiledMapLayer from './esri-leaflet/TiledMapLayer.vue';
import EsriTiledOverlay from './esri-leaflet/TiledOverlay.vue';
import EsriDynamicMapLayer from './esri-leaflet/DynamicMapLayer.vue';
import EsriFeatureLayer from './esri-leaflet/FeatureLayer.vue';
import EsriWebMap from './esri-leaflet/EsriWebMap.vue';
import EsriWebMapLayer from './esri-leaflet/EsriWebMapLayer.vue';
import Checkbox from './esri-leaflet/Checkbox.vue';
import LegendBox from './esri-leaflet/LegendBox.vue';
import Slider from './esri-leaflet/Slider.vue';
import TopicComponent from './esri-leaflet/TopicComponent.vue';


// our components
import MapAddressInput from './components/MapAddressInput.vue';
import MapAddressCandidateList from './components/MapAddressCandidateList.vue';
import OpacitySlider from './components/OpacitySlider.vue';
import VectorMarker from './components/VectorMarker.vue';
import PngMarker from './components/PngMarker.vue';
import BasemapToggleControl from './components/BasemapToggleControl.vue';
import BasemapSelectControl from './components/BasemapSelectControl.vue';
import FullScreenMapToggleTab from './components/FullScreenMapToggleTab.vue';
import FullScreenMapToggleTabVertical from './components/FullScreenMapToggleTabVertical.vue';
import LocationControl from './components/LocationControl.vue';
import MeasureControl from './components/MeasureControl.vue';
import LegendControl from './components/LegendControl.vue';
import BasemapTooltip from './components/BasemapTooltip.vue';
import ModalAbout from './components/ModalAbout.vue';

// Cyclomedia
import CyclomediaButton from './cyclomedia/Button.vue';
import CyclomediaRecordingCircle from './cyclomedia/RecordingCircle.vue';
import CyclomediaRecordingsClient from './cyclomedia/recordings-client';
import SvgViewConeMarker from './cyclomedia/SvgViewConeMarker.vue';
import cyclomediaMixin from './cyclomedia/map-panel-mixin.js';
import CyclomediaWidget from './cyclomedia/Widget.vue';

// Pictometry
import PictometryButton from './pictometry/Button.vue';
import pictometryMixin from './pictometry/map-panel-mixin.js';
import PictometryPngMarker from './pictometry/PngMarker.vue';
import PictometryViewCone from './pictometry/ViewCone.vue';
import PictometryWidget from './pictometry/Widget.vue';
import PictometryLayer from './pictometry/Layer.vue';

import pvmStore from './store.js';

console.log('EsriWebMap:', EsriWebMap);

export {
  Map_,
  Control,
  Geojson,
  CircleMarker,
  ControlCorner,
  PopUp,
  PopUpContent,
  Polygon_,
  Polyline_,
  EsriTiledMapLayer,
  EsriTiledOverlay,
  EsriDynamicMapLayer,
  EsriFeatureLayer,
  EsriWebMap,
  EsriWebMapLayer,
  Checkbox,
  LegendBox,
  Slider,
  TopicComponent,
  MapAddressInput,
  MapAddressCandidateList,
  OpacitySlider,
  VectorMarker,
  PngMarker,
  BasemapToggleControl,
  BasemapSelectControl,
  FullScreenMapToggleTab,
  FullScreenMapToggleTabVertical,
  LocationControl,
  MeasureControl,
  LegendControl,
  BasemapTooltip,
  ModalAbout,
  CyclomediaButton,
  CyclomediaRecordingCircle,
  CyclomediaRecordingsClient,
  SvgViewConeMarker,
  cyclomediaMixin,
  CyclomediaWidget,
  PictometryButton,
  pictometryMixin,
  PictometryPngMarker,
  PictometryViewCone,
  PictometryWidget,
  PictometryLayer
}
export {
  pvmStore
}
