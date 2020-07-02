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
    // map.on('draw.actionable', e => this.$emit('drawActionable', e));
    // map.on('draw.render', e => this.$emit('drawRender', e));
  },

};
