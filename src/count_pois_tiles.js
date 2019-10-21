var fs = require('fs');
var argv = require('minimist')(process.argv.slice(2));
var file = argv._[0];
var obj = JSON.parse(fs.readFileSync(file, 'utf8'));

for (var i = 0; i < obj.features.length; i++) {

  var cadena = obj.features[i].properties.label + "";
  obj.features[i].properties.label = cadena.split(",");
}

console.log("Total tilesTotal number of tiles in the file: " + obj.features.length);

poi_0 = 0;
poi_1 = 0;
poi_2 = 0;
poi_3 = 0;
poi_4 = 0;
poi_5 = 0;
poi_6 = 0;
poi_7 = 0;
poi_8 = 0;
poi_9 = 0;
poi_10 = 0;

for (var i = 0; i < obj.features.length; i++) {

  if (obj.features[i].properties.label[0] == '1') {
    poi_0 = poi_0 + 1;
  }
  if (obj.features[i].properties.label[1] == '1') {
    poi_1 = poi_1 + 1;
  }
  if (obj.features[i].properties.label[2] == '1') {
    poi_2 = poi_2 + 1;
  }
  if (obj.features[i].properties.label[3] == '1') {
    poi_3 = poi_3 + 1;
  }
  if (obj.features[i].properties.label[4] == '1') {
    poi_4 = poi_4 + 1;
  }
  if (obj.features[i].properties.label[5] == '1') {
    poi_5 = poi_5 + 1;
  }
  if (obj.features[i].properties.label[6] == '1') {
    poi_6 = poi_6 + 1;
  }
  if (obj.features[i].properties.label[7] == '1') {
    poi_7 = poi_7 + 1;
  }
  if (obj.features[i].properties.label[8] == '1') {
    poi_8 = poi_8 + 1;
  }
  if (obj.features[i].properties.label[9] == '1') {
    poi_9 = poi_9 + 1;
  }
  if (obj.features[i].properties.label[10] == '1') {
    poi_10 = poi_10 + 1;
  }

}

console.log("background: " + poi_0);
console.log("hospital: " + poi_1);
console.log("university: " + poi_2);
console.log("school: " + poi_3);
console.log("place_of_worship: " + poi_4);
console.log("government: " + poi_5);
console.log("transportation: " + poi_6);
console.log("commercial: " + poi_7);
console.log("industry: " + poi_8);
console.log("sport: " + poi_9);
console.log("residential: " + poi_10);

