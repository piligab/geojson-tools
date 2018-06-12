var fs = require('fs');
var argv = require('minimist')(process.argv.slice(2));
//var file = argv._[0];
//var output = turf.featureCollection([]);
var obj = JSON.parse(fs.readFileSync(file, 'utf8'));

for (var i = 0; i < obj.features.length; i++) {

  delete obj.features[i].properties.timestamp;
  delete obj.features[i].properties.version;
  delete obj.features[i].properties.changeset;
  delete obj.features[i].properties.user;
  delete obj.features[i].properties.uid;
  delete obj.features[i].properties.uid;
  delete obj.features[i].properties.id;
}

fs.writeFile("outputdt.geojson", JSON.stringify(obj) , function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});


/*  var output = turf.featureCollection([]);
  var geojson = JSON.parse(fs.readFileSync(file).toString());
  geojson.features.forEach(function(line) {
    if (line.geometry.type === 'LineString') {
      var polygon = turf.lineToPolygon(line);
      polygon.properties = line.properties;
      output.features.push(polygon);
    }
  });

  console.log(JSON.stringify(output));
};*/