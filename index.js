
const argv = require('minimist')(process.argv.slice(2));
const deletetags = require('./src/deletetags');
const changevalue = require('./src/changevalue');

var action = argv._[0];
var file = argv._[1];
switch (action) {
	case 'deletetags':
		deletetags(file);
		break;
	case 'changevalue':
		changevalue(file);
		break;
	default:
		console.log('unknown command');
}