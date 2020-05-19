// mongo setting
let mongo = null;
const mongoInfo = {
	url: process.env.MONGO_URL,
	db:  process.env.MONGO_DB
}
let cnt = 1;
const mongodb = require('mongodb').MongoClient;
const reConMongodb = () => {
	cnt += 1;
	console.log('reconnect 시도', cnt);
	mongoInfo.url = process.env.LOCAL_MONGO_URL
	mongoInfo.db = process.env.LOCAL_MONGO_DB
	detectMongo(cnt);
}
const detectMongo = (cnt = 1) => {
	mongodb.connect(mongoInfo.url, { useUnifiedTopology: true },(err, mg) => {
		if (err) {
			console.error('Fail create mongo', err);
			reConMongodb();
			return;
		}
		mongo = mg.db(mongoInfo.db);
		global.mongo = mongo;
		console.log('mongodb connect success');
		mongo.on('close', (event) => { console.log('mongo close', event); });
		mongo.on('error', (event) => { console.log('mongo error', event); });
		mongo.on('fullsetup', (event) => { console.log('mongo fullsetup', event); });
		mongo.on('parseError', (event) => { console.log('mongo parseError', event); });
		mongo.on('reconnect', (event) => { console.log('mongo reconnect', event); });
		mongo.on('timeout', (event) => { console.log('mongo timeout', event); });
	});
};
detectMongo();
