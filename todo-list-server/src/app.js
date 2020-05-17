const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	global.mongo.collection('todo_list').find({status: { $exists: true }}).toArray((err, result) => {
		if(err) res.json({ error: err })
		console.log({ error:0, data: result });
		res.json({ error:0, data: result });
	});
});

app.post('/todo/insert', (req, res) => {
	let data = req.body;
	console.log(data);
	global.mongo.collection('todo_list').insertOne(data, (err, result) => {
		if(err) res.json({ error: err })
		console.log({ error:0, data: result.result });
		res.json({ error:0, data: result.result });
	});
});

app.post('/todo/update', (req, res) => {
	let data = req.body;
	console.log(data);
	let whereQuery = {id: data.id}
	let updateQuery = {$set: {status: data.status}}
	global.mongo.collection('todo_list').updateOne(whereQuery, updateQuery, (err, result) => {
		if(err) res.json({ error: err })
		console.log({ error:0, data: result.result });
		res.json({ error:0, data: result.result });
	});
});

app.post('/todo/delete', (req, res) => {
	let data = req.body;
	console.log(data);
	let whereQuery = {id: data.id}
	global.mongo.collection('todo_list').deleteOne(whereQuery, (err, result) => {
		if(err) res.json({ error: err })
		console.log({ error:0, data: result.result });
		res.json({ error:0, data: result.result });
	});
})

app.listen(port, () => console.log(`Listening on port ${port}\n http://localhost:${port}/`));
