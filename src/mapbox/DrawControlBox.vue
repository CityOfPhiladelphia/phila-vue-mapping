<template>
  <!-- v-show="shouldShowDrawControlBox" -->
  <div
    id="calculated-area"
    class="calculated-area"
  >
    <table>
      <tr>
        <th>lat</th>
        <th>lng</th>
        <th>distance</th>
      </tr>
      <tr
        v-for="(entry, index) of drawDistances"
        :key="index"
      >
      <!-- <tr> -->
        <td>{{ entry.firstPoint[1] }}</td>
        <td>{{ entry.firstPoint[0] }}</td>
        <td>{{ entry.distance }}</td>
      </tr>
    </table>
  </div>

</template>

<script>

export default {
  name: 'DrawControlBox',
  props: [
    'position',
    'options',
    'items',
  ],
  computed: {
    drawDistances() {
      return this.$store.state.drawDistances;
    },
  },
  mounted() {
    // console.log('LegendControlNoTopic, this.$props.options:', this.$props.options);
  },
  // methods: Object.assign(methods),
};
</script>

<style>

.calculated-area {
  font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
  position: absolute;
  height: 100px;
  width: 300px;
  min-width: 200px;
  bottom: 0;
  left: 0;
  padding: 10px;
  background-color: #fff;
  margin-bottom: 24px;
  margin-left: 50px;
}

/* .legend-overlay .legend-overlay-inner {
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 10px;
}

.legend-overlay h2 {
  line-height: 24px;
  display: block;
  margin: 0 0 10px;
}

.legend-overlay .legend .bar {
  height: 10px;
  width: 100%;
  background: linear-gradient(to right, #fca107, #7f3121);
}

.legend-overlay input {
  background-color: transparent;
  display: inline-block;
  width: 100%;
  position: relative;
  margin: 0;
  cursor: ew-resize;
} */

</style>
