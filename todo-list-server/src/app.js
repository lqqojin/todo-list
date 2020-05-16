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
		console.log(result);
		res.json({ data: result });
	});
	console.log('요청옴')
});

app.post('/todo/insert', (req, res) => {
	data = req.body;
	console.log(data);
	global.mongo.collection('todo_list').insert(data, (err, rst) => {
		if(err) res.json({ error: err })
		console.log(rst.result);
		res.json({ msg: rst.result });
	});
	console.log('요청옴')
});

app.listen(port, () => console.log(`Listening on port ${port}\n http://localhost:${port}/`));
