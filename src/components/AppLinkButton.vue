<template>
  <div class="leaflet-bar easy-button-container leaflet-control">
    <button 
      class="easy-button-button leaflet-bar-part leaflet-interactive unnamed-state-active"
      @click="handleButtonClick(link)"
    >
      <span class="button-state state-unnamed-state unnamed-state-active">
        <img 
          :src="imgSrc" 
          class="button-image"
        >
      </span>
    </button>
  </div>
</template>

<script>
import Control from '../leaflet/Control.vue';

// REVIEW is there a better way to extend a vue component?
const { props, methods } = Control;

export default {
  name: 'AppLinkButton',
  // TODO figure how to extend props. sometimes it's an obj, sometimes an array.
  // props: Object.assign(props, {
  // }),
  props: [
    'position',
    'link',
    'imgSrc',
  ],
  methods: Object.assign(methods, {
    handleButtonClick(link) {
      window.open('http://localhost:8080/' + link);
    },
  }),
};
</script>

<style scoped>
  .year-selector-container {
    /*border: 1px solid #222;*/
    display: inline-block;
    margin-right: 20px;
  }

  ul {
    margin: 0;
    list-style-type: none;
    text-align: center;
  }

  li {
    background: #cfcfcf;
    border: 1px solid #fff;
    border-bottom: none;
    padding: 8px;
  }

  li.active {
    background: #FFF;
  }

  .leaflet-bar button,
  .leaflet-bar button:hover {
    background-color: #fff;
    border: none;
    border-bottom: 1px solid #ccc;
    width: 26px;
    height: 26px;
    line-height: 26px;
    /*display: block;*/
    text-align: center;
    text-decoration: none;
    color: black;
  }

  .leaflet-bar button {
    background-position: 50% 50%;
    background-repeat: no-repeat;
    overflow: hidden;
    /*display: block;*/
  }

  .leaflet-bar button:hover {
    background-color: #f4f4f4;
  }

  .leaflet-bar button:first-of-type {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  .leaflet-bar button:last-of-type {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-bottom: none;
  }

  .leaflet-bar.disabled,
  .leaflet-bar button.disabled {
    cursor: default;
    pointer-events: none;
    opacity: .4;
  }

  .easy-button-button .button-state{
    display: block;
    width: 30px;
    height: 30px;
    position: relative;
  }

  .leaflet-touch .leaflet-bar button {
    width: 30px;
    height: 30px;
    line-height: 30px;
  }

  .basemap-toggle-button {
    width: 30px;
    height: 30px;
    opacity: 0%;
    /*padding: 0px;
    margin: 0px;*/
    /*background: white;*/
    /*background: rgba(255,255,255,1);*/
    /* box-shadow: 0 0 15px rgba(0,0,0,0.2); */
    /*display: inline-block;*/
    /*float: right;*/
  }

  .button-image {
    vertical-align: top;

  }
</style>
