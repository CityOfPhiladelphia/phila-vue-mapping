<template>
  <div class="leaflet-bar easy-button-container leaflet-control">
    <button @click="handleLocationButtonClick">
      <span class="button-state state-unnamed-state unnamed-state-active">
        <i class="fa fa-dot-circle-o fa-lg" aria-hidden="true"></i>
      </span>
    </button>
  </div>
</template>

<script>
  import Control from '../leaflet/Control.vue';
  import L from 'leaflet';

  const {props, methods} = Control;

  export default {
    props: [
      'position'
    ],
    data() {
      return {
        locationOn: false
      }
    },
    methods: Object.assign(methods, {

      handleLocationButtonClick(e) {
        document.getElementById('addressSearch').blur()
        // alert('handleLocationButtonClick is running');
        const watchPositionOn = this.$store.state.map.watchPositionOn;
        // console.log('watchPositionOn', watchPositionOn);
        if (!watchPositionOn) {
          this.$store.commit('setWatchPositionOn', true);
          navigator.geolocation.watchPosition(this.geofindSuccess, this.geofindError, {enableHighAccuracy: true, timeout: 1000, maximumAge: 0, distanceFilter: 5});
        } else {
          this.moveToPosition();
        }
      },
      geofindSuccess(position) {
        // alert('geofindSuccess is running, position:', position);
        const payload = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        this.$store.commit('setLocation', payload);
        // console.log('latitude', payload.lat, 'longitude', payload.lng);
        if (!this.locationOn) {
          this.moveToPosition();
          this.locationOn = true;
        }
      },
      moveToPosition() {
        // console.log('moveToPosition is running');
        const map = this.$store.state.map.map;
        const location = this.$store.state.map.location;
        map.setView([location.lat, location.lng], 19);
      },
      geofindError() {
        console.log('GeofindError')
      }
    })
  };
</script>

<style scoped>

  .fa-lg {
    vertical-align: -10%;
  }

</style>
