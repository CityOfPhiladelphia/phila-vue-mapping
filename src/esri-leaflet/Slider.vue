<template>
  <div class="slider-wrapper">
    <input class="slider"
           type="range"
           min="1"
           max="100"
           step="1"
           v-model="opa"
    >
  </div>
</template>

<script>
  import TopicComponent from './TopicComponent.vue';

  export default {
    props: ['layer',
            'layerName',
            'layerId',
            'opacity'
    ],
    data() {
      return {
        opa: this.$props.opacity * 100
      }
    },
    watch: {
      opa(nextOpacity) {
        const payload = {
                          layerName: this.$props.layerName,
                          opa: nextOpacity/100
                        }
        // console.log('OPACITY CHANGED', payload);
        this.$store.commit('setWebMapLayersOpacity', payload);
      }
    },
    created() {
      // this.initialize();
    },
    computed: {

    },
    methods: {

    }
  };
</script>

<style>

.slider-wrapper {
  /*display: inline-block;*/
  width: 250px;
  /*height: 50px;*/
  /*padding-top: 3px;
  margin-bottom: 8px;*/
}

.slider-wrapper input {
  /*padding-top: 3px;
  padding-bottom: 8px;
  margin-bottom: 8px;*/
  width: 250px;
  /*height: 20px;*/
}

</style>
