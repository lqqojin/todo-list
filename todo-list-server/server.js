/**
 * start server
 */
const path = require('path');
const dotenv = require('dotenv');
const env = process.env.NODE_ENV || 'local';
dotenv.config({ silent: true, path: path.resolve(__dirname, '.env') });
console.log(`=======================> start ${env} mode`);
require('./connMongo');
require('./src/app');
process.on('uncaughtException', (err) => {
	console.log('================== uncauchtgException ocurred ==================');
	console.error(err);
	console.log('================================================================');
});
