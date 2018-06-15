var fs = require('fs');
var turf = require('@turf/turf');
module.exports = function(file) {

  var obj = JSON.parse(fs.readFileSync(file).toString());

  var coords = obj.features[0].geometry.coordinates[0];


  console.log(obj.features[0].properties.name);
  console.log("1");

  for (var i = 0; i < coords.length; i++) {

    console.log("\t" + coords[i][0].toFixed(10) + "\t" + "\t" + coords[i][1].toFixed(10));

  }

  console.log("END");
  console.log("END");



};