#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var deletetags = require('./src/deletetags');
var changevalue = require('./src/changevalue');
var poly = require('./src/poly');
var area = require('./src/area');
var distancemoved = require('./src/distancemoved');
var addcoord = require('./src/addcoord');
var convert_array = require('./src/convert_array');
var count_pois_tiles = require('./src/count_pois_tiles');

var action = argv._[0];
var file = argv._[1];

switch (action) {
	case 'deletetags':
		deletetags(file);
		break;
	case 'changevalue':
		changevalue(file);
		break;
	case 'poly':
		poly(file);
		break;
	case 'area':
		area(file);
		break;
	case 'distancemoved':
		distancemoved(file);
		break;
	case 'addcoord':
		addcoord(file);
		break;
	// case 'convert_array':
	// 	convert_array(file);
	// 	break;
	// case 'count_pois_tiles':
	// 	count_pois_tiles(file);
	// 	break;
	default:
		console.log('unknown command');
}

