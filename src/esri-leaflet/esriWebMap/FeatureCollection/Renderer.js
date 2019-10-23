import { classBreaksRenderer } from 'esri-leaflet-renderers/src/Renderers/ClassBreaksRenderer';
import { uniqueValueRenderer } from 'esri-leaflet-renderers/src/Renderers/UniqueValueRenderer';
import { simpleRenderer } from 'esri-leaflet-renderers/src/Renderers/SimpleRenderer';

export function setRenderer (layerDefinition, layer) {
  var rend;
  var rendererInfo = layerDefinition.drawingInfo.renderer;

  var options = {};

  if (layer.options.pane) {
    options.pane = layer.options.pane;
  }
  if (layerDefinition.drawingInfo.transparency) {
    options.layerTransparency = layerDefinition.drawingInfo.transparency;
  }
  if (layer.options.style) {
    options.userDefinedStyle = layer.options.style;
  }

  switch (rendererInfo.type) {
  case 'classBreaks':
    checkForProportionalSymbols(layerDefinition.geometryType, rendererInfo, layer);
    if (layer._hasProportionalSymbols) {
      layer._createPointLayer();
      var pRend = classBreaksRenderer(rendererInfo, options);
      pRend.attachStylesToLayer(layer._pointLayer);
      options.proportionalPolygon = true;
    }
    rend = classBreaksRenderer(rendererInfo, options);
    break;
  case 'uniqueValue':
    console.log(rendererInfo, options);
    rend = uniqueValueRenderer(rendererInfo, options);
    break;
  default:
    rend = simpleRenderer(rendererInfo, options);
  }
  rend.attachStylesToLayer(layer);
}

export function checkForProportionalSymbols (geometryType, renderer, layer) {
  layer._hasProportionalSymbols = false;
  if (geometryType === 'esriGeometryPolygon') {
    if (renderer.backgroundFillSymbol) {
      layer._hasProportionalSymbols = true;
    }
    // check to see if the first symbol in the classbreaks is a marker symbol
    if (renderer.classBreakInfos && renderer.classBreakInfos.length) {
      var sym = renderer.classBreakInfos[0].symbol;
      if (sym && (sym.type === 'esriSMS' || sym.type === 'esriPMS')) {
        layer._hasProportionalSymbols = true;
      }
    }
  }
}

export var Renderer = {
  setRenderer: setRenderer,
  checkForProportionalSymbols: checkForProportionalSymbols,
};

export default Renderer;
