<template>
  <div>
    <div
      v-if="shouldShowDistanceBox"
      class="calculated-area"
    >
      <table>
        <tr>
          <th>lat</th>
          <th>lng</th>
          <th>distance</th>
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
    </div>
  </div>
</template>

<script>

import controlMixin from "./controlMixin";
import withEvents from "../../lib/withEvents";
import withSelfEvents from "../withSelfEvents";

import MapboxDraw from '@mapbox/mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import area from '@turf/area';

export default {
  name: 'DrawControl',
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
  },
  data() {
    const data = {
      mode: 'simple_select',
      selected: null,
    };
    return data;
  },
  computed: {
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
    shouldShowDistanceBox() {
      let booleanMode = this.$data.mode !== 'simple_select';
      let booleanSelected = this.$data.selected !== null;
      let booleanTotal;
      if (booleanMode || booleanSelected) {
        booleanTotal = true;
      } else {
        booleanTotal = false;
      }
      // console.log('booleanMode:', booleanMode, 'booleanSelected:', booleanSelected, 'booleanTotal:', booleanTotal);
      return booleanTotal;
    },
  },
  created() {
    const draw = this.$mapboxElement = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true,
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
      // console.log('draw.modechange, e:', e);
      $this.$data.mode = e.mode;
      $this.$emit('drawModeChange', e);
    });
  },

};

</script>

<style>

.calculated-area {
  font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
  position: absolute;
  /* height: 100px; */
  width: 300px;
  min-width: 200px;
  bottom: 0;
  left: 0;
  padding: 10px;
  background-color: #fff;
  margin-bottom: 24px;
  margin-left: 50px;
}

td {
  text-align: center;
}

</style>
