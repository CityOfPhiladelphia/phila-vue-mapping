<template>
  <div>
    <div
      v-if="shouldShowDistanceBox"
      class="measure-tool-popup"
    >
      <div
        v-if="!currentDistances"
      >
        <div class="measure-tool-header">
          Measure distances and areas
        </div>
        <div class="measure-tool-description">
          Start creating a measurement by adding points to the map.
        </div>
        <hr class="popup-line">
        <div>
          <img
            :src="sitePath + '/images/cancel.png'"
            class="img-class"
            alt="cancel"
            @click="handleCancelClick"
          >
          <div
            class="inline-block-div"
            @click="handleCancelClick"
          >
            Cancel
          </div>
        </div>
      </div>

      <div
        v-if="currentDistances"
      >
        <table>
          <tr>
            <th>lat</th>
            <th>lng</th>
            <th>distance (ft)</th>
          </tr>
          <tr
            v-for="(entry, index) of currentDistances"
            :key="index"
          >
            <td>{{ entry.firstPoint[1] }}</td>
            <td>{{ entry.firstPoint[0] }}</td>
            <td>{{ entry.distance }}</td>
          </tr>
        </table>
        <hr class="popup-line">

        <div
          v-if="currentDistances.length >= 2"
        >
          Total Length: {{ currentTotalLength }}
          <hr class="popup-line">
        </div>

        <div
          v-if="currentDistances.length >= 3"
        >
          Total Area: {{ currentArea }}
          <hr class="popup-line">
        </div>

        <div
          v-if="mode === 'simple_select'"
          class="drawn-shape-actions"
        >
          <img
            :src="sitePath + '/images/trash.png'"
            class="img-class"
            alt="cancel"
            @click="handleDeleteClick"
          >
          <div
            class="inline-block-div"
            @click="handleDeleteClick"
          >
            Delete
          </div>
        </div>

        <div
          v-if="mode !== 'simple_select'"
          class="draw-actions"
        >
          <img
            :src="sitePath + '/images/cancel.png'"
            class="img-class"
            alt="cancel"
            @click="handleCancelClick"
          >
          <div
            class="inline-block-div"
            @click="handleCancelClick"
          >
            Cancel
          </div>
          <img
            :src="sitePath + '/images/check.png'"
            class="img-class"
            alt="finish"
            @click="handleFinishClick"
          >
          <div
            class="inline-block-div"
            @click="handleFinishClick"
          >
            Finish Measurement
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import controlMixin from "./controlMixin";
import withEvents from "../../lib/withEvents";
import withSelfEvents from "../withSelfEvents";

// import MapboxDraw from '@mapbox/mapbox-gl-draw';
// import mapbox-gl-draw-min.js, cloned from https://gist.github.com/godismyjudge95/a4ea43263db53b90b05511c911cd0034
// this was recommended by a comment in https://github.com/mapbox/mapbox-gl-js/issues/9114
// the official mapbox-gl-draw was blocking map clicks
import MapboxDraw from '../../mapbox-gl-draw.min.js';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import area from '@turf/area';

export default {
  name: 'DistanceMeasureControl',
  mixins: [ withEvents, withSelfEvents, controlMixin ],

  props: {
    position: {
      type: String,
      default: 'bottom-left',
    },
    labelLayers: {
      type: Array,
    },
    currentShape: {
      type: String,
      default: null,
    },
    currentArea: {
      type: String,
      default: null,
    },
  },
  data() {
    const data = {
      mode: 'simple_select',
      selected: null,
      toggledOn: false,
    };
    return data;
  },
  computed: {
    sitePath() {
      if (process.env.VUE_APP_PUBLICPATH) {
        return window.location.origin + process.env.VUE_APP_PUBLICPATH;
      }
      return '';
    },
    currentOrSelectedShape() {
      let id;
      if (this.$data.selected) {
        id = this.$data.selected;
      } else if (this.$props.currentShape) {
        id = this.$props.currentShape;
      }
      return id;
    },
    currentDistances() {
      let shape = this.$props.labelLayers.filter(layer => layer.id === this.currentOrSelectedShape);
      let set;
      if (shape[0]) {
        set = shape[0].distances;
      }
      return set;
    },
    currentTotalLength() {
      let total = 0;
      for (let distance of this.currentDistances) {
        total = total + distance.distance;
      }
      return total.toFixed(2) + ' Ft';
      // return 4.453;
    },
    shouldShowDistanceBox() {
      let booleanMode = this.$data.mode !== 'simple_select';
      let booleanSelected = this.$data.selected !== null;
      let booleanToggledOn = this.$data.toggledOn;
      let booleanTotal;
      if (booleanMode && booleanToggledOn || booleanSelected && booleanToggledOn) {
        booleanTotal = true;
      } else {
        booleanTotal = false;
      }
      // console.log('booleanMode:', booleanMode, 'booleanSelected:', booleanSelected, 'booleanToggledOn:', booleanToggledOn, 'booleanTotal:', booleanTotal);
      return booleanTotal;
    },
  },
  created() {
    const draw = this.$mapboxElement = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
      },
    });
    this.$store.commit('setDraw', draw);
    let map = this.$store.map;

    map.addControl(draw, this.$props.position);

    map.on('draw.create', e => this.$emit('drawCreate', e));
    map.on('draw.update', e => this.$emit('drawUpdate', e));
    map.on('draw.actionable', e => this.$emit('drawActionable', e));

    let $this = this;
    map.on('draw.delete', function(e) {
      console.log('map.on draw.delete is running');
      $this.selected = null;
      $this.$emit('drawDelete', e);
    });

    map.on('draw.selectionchange', function(e){
      // console.log('draw.selectionchange, e:', e, 'e.features[0]:', e.features[0]);
      if (e.features[0]) {
        $this.$data.selected = e.features[0].id;
      } else {
        $this.$data.selected = null;
      }
      $this.$emit('drawSelectionChange', e);
    });

    map.on('draw.modechange', function(e){
      console.log('draw.modechange, e:', e);
      if (e.mode !== 'simple_select') {
        $this.$data.toggledOn = true;
      }
      $this.$data.mode = e.mode;
      $this.$emit('drawModeChange', e);
    });
  },
  methods: {
    handleDeleteClick(e) {
      console.log('handleDeleteClick is running');
      this.$mapboxElement.delete(this.$data.selected);
      this.$emit('drawDelete', this.$data.selected);
      this.selected = null;
    },
    handleCancelClick(e) {
      console.log('handleCancelClick is running');
      this.$data.toggledOn = false;
      this.$emit('drawCancel', e);
    },
    handleFinishClick(e) {
      // console.log('handleFinishClick is running e:', e, 'this.$mapboxElement.getSelectedPoints():', this.$mapboxElement.getSelectedPoints());
      this.$emit('drawFinish', e);
      this.$data.mode = 'simple_select';
    },
  },
};

</script>

<style>

.measure-tool-popup {
  font-family: Montserrat, sans-serif;
  font-size: 12px;
  position: absolute;
  width: 300px;
  min-width: 200px;
  bottom: 0;
  left: 0;
  padding: 10px;
  background-color: #fff;
  margin-bottom: 24px;
  margin-left: 50px;
  border-radius: 10px;
  z-index: 12;
}

.measure-tool-header {
  font-size: 14px;
}

.measure-tool-description {
  font-size: 10px;
}

table {
  margin-top: 0px;
  margin-bottom: 0px;
}

td {
  text-align: center;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

.img-class {
  margin: 2px;
  cursor: pointer;
}

.inline-block-div {
  display: inline-block;
  margin: 2px;
  margin-right: 8px;
  cursor: pointer;
}

.popup-line {
  margin-top: 4px;
  margin-bottom: 4px;
}

.mapbox-gl-draw_polygon {
  background-image: url('/images/rulers.png') !important;
}

.mapbox-gl-draw_ctrl-draw-btn {
  background-repeat: no-repeat !important;
  background-position: center !important;
}

</style>
