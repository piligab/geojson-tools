var fs = require('fs');
var turf = require('@turf/turf');

module.exports = function(file) {

  var obj = JSON.parse(fs.readFileSync(file).toString());

  for (var i = 0; i < obj.features.length; i++) {


    var feature = obj.features[i];

    if (feature.properties.lon && feature.properties.lat) {
      var lon_lat = [parseFloat(feature.properties.lon), parseFloat(feature.properties.lat)];
      var from = turf.point(lon_lat);
      var to = obj.features[i];

      var options = {
        units: 'meters'
      };

      var distance = turf.distance(from, to, options);

      feature.properties.distance_moved = distance;
    }
  }
  console.log(JSON.stringify(obj));
};