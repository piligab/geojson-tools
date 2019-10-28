const fs = require('fs');
var argv = require('minimist')(process.argv.slice(2));

module.exports = function(file) {

  const geojson = JSON.parse(fs.readFileSync(file, 'utf8'));
  for (let i = 0; i < geojson.features.length; i++) {
    var find = geojson.features[i].properties.label;
    var res_a = find.replace(/11:/g, "");
    var res_b = res_a.replace(/[(]/g, "[");
    var res_c = res_b.replace(/[)]/g, "]");
    geojson.features[i].properties.label = res_c;
  }
  console.log(JSON.stringify(geojson));
};