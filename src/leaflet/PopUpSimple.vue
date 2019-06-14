<template>
  <div>
    <slot />
  </div>
</template>

<script>
  import { Popup, Point, DomUtil } from 'leaflet';
  export default {
    name: 'PopUpSimple',
    props: [
      'latlng',
      'featureId',
      'popupData',
      'popupHtml'
    ],
    mounted() {
      // console.log('popup mounted is running');
      const leafletElement = this.$leafletElement = this.createLeafletElement();
      leafletElement.addTo(this._map);
    },
    destroyed() {
      // console.log('pop-up destroyed is running')
      this.$leafletElement.removeFrom(this._map);
    },
    computed: {
      _map() {
        return this.$store.state.map.map;
      },
      // popupContent() {
      //   let text = ''
      //   for (let key of Object.keys(this.$props.popupData)) {
      //     text += key + ': ' + this.$props.popupData[key]
      //   }
      //   return text;
      // }
      popupContent() {

      }
    },
    methods: {
      createLeafletElement() {
        const popup = new Popup({
          minWidth: 300,
          offset: new Point(0, -24)
        }).setLatLng(this.latlng)
          .setContent(this.$children[0].$el)
          // .setContent(this.popupHtml)
          .openOn(this._map);

        // popup.setLatLng(this.latlng)
        //   // .setContent(this.popupHtml)
        //   .openOn(this._map);

        return popup;
      }
    }
  };
</script>
