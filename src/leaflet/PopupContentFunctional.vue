<template>
  <div>
    <div @click="didClickPopupContent">
      <h4>{{ popupData }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopupContentFunctional',
  props: [
    'popupData',
  ],
  methods: {
    didClickPopupContent() {
      this.$emit('didClickPopupContent');
    },
  },
};
</script>
