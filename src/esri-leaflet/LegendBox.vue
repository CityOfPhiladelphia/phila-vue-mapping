<template>
  <div>
    <div class="legend"
         v-html="this.legendHtml"
    />
  </div>
</template>

<script>

  import TopicComponent from './TopicComponent.vue';

  export default {
    props: ['layer',
            'layerName',
            'layerId',
            // minScale, maxScale, and drawingInfo are stored in layerDefinition
            'layerDefinition',
            'legend',
            'scales'
    ],
    data() {
      return {
        legendHtml: '',
        options: {
          listTemplate: '<ul>{layers}</ul>',
          layerTemplate: '<li><ul>{legends}</ul></li>',
          // layerTemplate: '<li><strong>{layerName}</strong><ul>{legends}</ul></li>',
          listRowTemplate: '<li><img width="{width}" height="{height}" src="data:{contentType};base64,{imageData}"><span>{label}</span></li>',
          emptyLabel: '',
          // emptyLabel: '<all values>',
          container: null
        },
      }
    },
    created() {
      this.initialize();
    },
    watch: {
      scale(nextScale) {
        this.createLegend(nextScale);
      },
      legend() {
        console.log('METHOD watch props legend fired, this.$props.layerId:', this.$props.layerId);
        this.createLegend(this.scale);
      }
    },
    computed: {
      scale() {
        const zoom = this.$store.state.map.zoom;
        const zoomPlus = zoom + 1;
        const scale = this.$props.scales[zoomPlus];
        return scale;
      },
    },
    methods: {
      initialize() {
        // console.log('LegendBox.vue initialize is runnning, this.$props:', this.$props);
        if (this.$props.legend) {
          // console.log('already have a legend')
          this.createLegend(this.scale);
          return;
        }
        let drawingInfo;
        if (this.$props.layerDefinition) {
          drawingInfo = this.$props.layerDefinition.drawingInfo;
        }
        const opts = {
          layerName: this.$props.layerName,
          layerId: this.$props.layerId,
          store: this.$store,
          drawingInfo
        }
        // console.log('METHOD LegendBox initialize is running, this.$props.layerId:', this.$props.layerId, 'opts:', opts, 'L.esri:', L.esri);
        // const legend = esriLeafletLegend(this.$props.layer, opts);
        const legend = L.esri.legendControl(this.$props.layer, opts);
        // const legend = LegendControl(this.$props.layer, opts);
      },
      createLegend(scale) {
        const legend = this.$props.legend;
        // console.log('METHOD createLegend running, this.$props.layerId:', this.$props.layerId, 'scale:', scale, 'legend:', legend);
        let layersHtml = '';
        if (legend.layers.length === 1) {
          const layer = legend.layers[0];
          let legendsHtml = '';
          for (let layerLegend of layer.legend) {
            const layerLegendJSON = JSON.parse(JSON.stringify(layerLegend));
            // console.log('layerLegendJSON', layerLegendJSON);
            if (!layerLegendJSON.label) {
              layerLegendJSON.label = '';
            }
            legendsHtml += L.Util.template(this.options.listRowTemplate, layerLegendJSON);
          }
          layersHtml += L.Util.template(this.options.layerTemplate, {
            layerName: layer.layerName,
            legends: legendsHtml
          });
        } else {
          for (let layer of legend.layers) {
            // console.log('max:', layer.maxScale, 'scale:', scale, 'min:', layer.minScale);
            let legendsHtml = '';
            if (parseFloat(scale) > parseFloat(layer.maxScale) && parseFloat(scale) < parseFloat(layer.minScale)) {
              // console.log('correct!', layer.layerId);
              for (let layerLegend of layer.legend) {
                const layerLegendJSON = JSON.parse(JSON.stringify(layerLegend));
                legendsHtml += L.Util.template(this.options.listRowTemplate, layerLegendJSON);
              }
            }
            layersHtml += L.Util.template(this.options.layerTemplate, {
              layerName: layer.layerName,
              legends: legendsHtml
            });
          }
        }

        const legendHtml = L.Util.template(this.options.listTemplate, {
          layers: layersHtml
        });

        // store calculatedlegendHtml in data
        this.legendHtml = legendHtml
      }
    }
  };
</script>

<style>

.legend {
  margin-left: 10px;
}

ul {
  list-style: none;
  margin-left: 0px;
}

ul ul {
  list-style: none;
  margin-left: 0px;
}

li {
  list-style: none;
}
</style>
