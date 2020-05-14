const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	global.mongo.collection('todo_list').insertOne({ message: 'Hello Express!' }, (err, rst) => {
		if(err) console.log(err);
		console.log(rst.result);
	});
	res.send({ message: 'Hello Express!' });
});

app.listen(port, () => console.log(`Listening on port ${port}\n http://localhost:${port}/`));
