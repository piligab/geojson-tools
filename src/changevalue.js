var fs = require('fs');
const turf = require('@turf/turf');
module.exports = function(file) {

  var obj = JSON.parse(fs.readFileSync(file).toString());

  for (var i = 0; i < obj.features.length; i++) {

    if (!obj.features[i].properties.population) {
      obj.features[i].properties.population = 0;
    }

    obj.features[i].properties.population = parseInt(obj.features[i].properties.population);
    obj.features[i].properties.name = titleCase(obj.features[i].properties.name);
  }


  fs.writeFile("outputcv.geojson", JSON.stringify(obj), function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });


  function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }
};