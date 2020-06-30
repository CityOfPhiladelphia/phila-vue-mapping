import controlMixin from "./controlMixin";
import withEvents from "../../lib/withEvents";
import withSelfEvents from "../withSelfEvents";

import MapboxDraw from '@mapbox/mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import area from '@turf/area';

export default {
  name: 'DrawControl',
  mixins: [ withEvents, withSelfEvents, controlMixin ],

  props: {},

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
    map.addControl(draw, 'bottom-left');

    map.on('draw.selectionchange', this.drawSelectionChange);
    map.on('draw.actionable', this.drawActionable);
    map.on('draw.modechange', this.drawModeChange);
    // map.on('draw.render', this.drawRender);
    map.on('draw.create', this.updateArea);
    map.on('draw.delete', this.updateArea);
    map.on('draw.update', this.updateArea);
    // this.control = new DrawControl(this.$props);
    // this.$_addControl();
    // this.$_bindSelfEvents(Object.keys(geolocationEvents), this.control);
  },

  methods: {
    trigger() {
      if (this.control) {
        return this.control.trigger();
      }
    },
    drawRender(e) {
      console.log('drawRender is running, e:', e);
    },
    drawSelectionChange(e) {
      console.log('drawSelectionChange is running, e:', e);
    },
    drawModeChange(e) {
      console.log('drawModeChange is running, e:', e);
      if (e.mode === 'simple_select') {
        this.$store.commit('setDrawStart', null);
      } else {
        this.$store.commit('setDrawStart', 'start');
      }
    },
    drawActionable(e) {
      console.log('drawActionable is running, e:', e);
    },
    updateArea(e) {
      // console.log('updateArea is running');
      var data = this.$mapboxElement.getAll();
      const answer = document.getElementById('calculated-area');
      // console.log('answer:', answer);
      if (data.features.length > 0) {
        var theArea = area(data);
        // restrict to area to 2 decimal points
        var rounded_area = Math.round(theArea * 100) / 100;
        answer.innerHTML = '<p><strong>' + rounded_area + '</strong></p><p>square meters</p>';
      } else {
        answer.innerHTML = '';
        if (e.type !== 'draw.delete') {
          alert('Use the draw tools to draw a polygon!');
        }
      }
      // console.log('this.$store.map.getStyle():', this.$store.map.getStyle(), 'this.$mapboxElement:', this.$mapboxElement, 'data:', data);
    },
  },
};
