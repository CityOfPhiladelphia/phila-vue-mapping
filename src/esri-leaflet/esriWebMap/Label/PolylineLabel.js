export function polylineLabelPos (coordinates) {
  var labelPos = { position: [], offset: []};
  var centralKey;

  centralKey = Math.round(coordinates.length / 2);
  labelPos.position = coordinates[centralKey].reverse();
  labelPos.offset = [ 0, 0 ];

  return labelPos;
}

export var PolylineLabel = {
  polylineLabelPos: polylineLabelPos,
};

export default PolylineLabel;
