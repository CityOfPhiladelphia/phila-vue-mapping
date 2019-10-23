export function pointLabelPos (coordinates) {
  var labelPos = { position: [], offset: []};

  labelPos.position = coordinates.reverse();
  labelPos.offset = [ 20, 20 ];

  return labelPos;
}

export var PointLabel = {
  pointLabelPos: pointLabelPos,
};

export default PointLabel;
