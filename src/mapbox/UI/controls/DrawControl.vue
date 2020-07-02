<template>
  <div>
    <!-- id="calculated-area" -->
    <!-- v-if= -->
    <div
      class="calculated-area"
    >
      <table>
        <tr>
          <th>lat</th>
          <th>lng</th>
          <th>distance</th>
        </tr>
        <tr
          v-for="(entry, index) of distances"
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
    distances: {
      type: Array,
      // default: function() {
      //   return [],
      // },
    },
  },
  computed: {
    drawDistances() {
      return this.$store.state.drawDistances;
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

    map.on('draw.selectionchange', e => this.$emit('drawSelectionChange', e));
    map.on('draw.modechange', e => this.$emit('drawModeChange', e));
    map.on('draw.create', e => this.$emit('drawCreate', e));
    map.on('draw.delete', e => this.$emit('drawDelete', e));
    map.on('draw.update', e => this.$emit('drawUpdate', e));
    map.on('draw.actionable', e => this.$emit('drawActionable', e));
    // map.on('draw.render', e => this.$emit('drawRender', e));
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
