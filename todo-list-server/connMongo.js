// mongo setting
let mongo = null;
require('mongodb').MongoClient.connect(process.env.MONGO_URL || 'mongodb://127.0.0.1:27017', { useUnifiedTopology: true },(err, mg) => {
	if (err) { console.error('Fail create mongo', err); return; }
	mongo = mg.db(process.env.MONGO_DB || 'test');
	global.mongo = mongo;

	mongo.on('close', (event) => { console.log('mongo close', event); });
	mongo.on('error', (event) => { console.log('mongo error', event); });
	mongo.on('fullsetup', (event) => { console.log('mongo fullsetup', event); });
	mongo.on('parseError', (event) => { console.log('mongo parseError', event); });
	mongo.on('reconnect', (event) => { console.log('mongo reconnect', event); });
	mongo.on('timeout', (event) => { console.log('mongo timeout', event); });
});