var fs = require('fs');
var argv = require('minimist')(process.argv.slice(2));

var file = argv._[0];
var obj = JSON.parse(fs.readFileSync(file, 'utf8'));

for (var i = 0; i < obj.features.length; i++) {
    
  var cadena = obj.features[i].properties.label + "";
  obj.features[i].properties.label = cadena.split(",");
}

  fs.writeFile("attribute_in_array.geojson", JSON.stringify(obj) , function(err) {

    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});