var fs = require('fs');
var turf = require('@turf/turf');
module.exports = function(file) {

  var obj = JSON.parse(fs.readFileSync(file).toString());

var areapolygon = turf.area(obj);
console.log("Area in m2 = " + areapolygon);
console.log("Area in km2= " + areapolygon/1000000);
console.log("Area in ha= " + ((areapolygon/1000000)*100).toFixed(0));

}

