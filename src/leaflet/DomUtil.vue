<template>
  <div>
    <div @click="testfunc3"
    >
      <h4>{{popupData}}</h4>
    </div>
    <!-- <div>{{this.element}}</div> -->
  </div>
</template>


<script>
  import { DomUtil } from 'leaflet';
  import bindEvents from '../leaflet/util/bind-events';

  export default {
    name: 'DomUtil',
    props: [
      'popupData',
    ],
    data() {
      const data = {
        element: null,
      }
      return data;
    },
    mounted() {
      const leafletElement = this.$leafletElement = this.createLeafletElement();
    },
    // updated() {
    //   const leafletElement = this.$leafletElement = this.createLeafletElement();
    //   bindEvents(this, this.$leafletElement, this._events);
    // },
    methods: {
      testfunc3() {
        console.log('testfunc3');
        this.$emit('testfuncEmit', 'test');
      },
      createLeafletElement() {

        // const popup = DomUtil.create('div', 'infoWindow');
        // popup.innerHTML = "<h3>test</h3>"
        // // console.log('in createMarker, popup:', popup)
        // return popup;

        const popupContent = DomUtil.create('div', 'test-class');
        popupContent.innerHTML = "<div id='customPopup'><h3>test</h3></div>"
        this.element = popupContent;
        console.log('DomUtil.vue createLeafletElement is running:', popupContent);
      },
    },
  };
</script>

<style scoped>

/* .fa-lg {
  vertical-align: -10%;
} */

</style>
