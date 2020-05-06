var fs = require('fs');
var turf = require('@turf/turf');

module.exports = function(file) {

  var obj = JSON.parse(fs.readFileSync(file).toString());

  for (var i = 0; i < obj.features.length; i++) {


    obj.features[i].properties.FID2 = parseInt(obj.features[i].properties.FID2);

  }
  console.log(JSON.stringify(obj));
};