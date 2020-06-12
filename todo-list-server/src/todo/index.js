const router = require('express').Router();
const moment = require('moment');

const getTodo = (req, res) => {
	if (global.mongo) {
		global.mongo.collection('todo_list').find({status: {$exists: true}}).toArray((err, result) => {
			if (err) res.json({error: err})
			console.log({error: 0, data: result});
			res.json({error: 0, data: result});
		});
	} else {
		res.json({error: '몽고 연결 실패'});
	}
}

const insertTodo = (req, res) => {
	const data = req.body;
	const now = moment().format('YYYYMMDDHHmmss');
	const _data = Object.assign({}, data, {
		createDate: now,
		updateDate: now
	})
	console.log(data);
	global.mongo.collection('todo_list').insertOne(_data, (err, result) => {
		if(err) res.json({ error: err })
		console.log({ error:0, data: result.result });
		res.json({ error:0, data: result.result });
	});
}

const updateTodo = (req, res) => {
	let data = req.body;
	const now = moment().format('YYYYMMDDHHmmss');
	console.log(data);
	let whereQuery = {id: data.id}
	let updateQuery = {$set: {status: data.status, updateDate: now }}
	global.mongo.collection('todo_list').updateOne(whereQuery, updateQuery, (err, result) => {
		if(err) res.json({ error: err })
		console.log({ error:0, data: result.result });
		res.json({ error:0, data: result.result });
	});
}

const deleteTodo = (req, res) => {
	let data = req.body;
	console.log(data);
	let whereQuery = {id: data.id}
	global.mongo.collection('todo_list').deleteOne(whereQuery, (err, result) => {
		if(err) res.json({ error: err })
		console.log({ error:0, data: result.result });
		res.json({ error:0, data: result.result });
	});
}

router.get('/', getTodo);
router.post('/todo/insert', insertTodo);
router.post('/todo/update', updateTodo);
router.post('/todo/delete', deleteTodo);

module.exports = router;
