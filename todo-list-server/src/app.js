const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const moment = require('moment');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
	const st = new Date();
	res.on('finish', () => {
		console.log(`${moment().format('YYYY.MM.DD HH:mm:ss')} > ${req.ip}\t${req.method}\t${req.originalUrl}\tstatus:${res.statusCode}\t\t${(new Date() - st)}ms`);
	})
	next();
})
app.use('/', require('./todo'));
app.use((req, res) => {
	res.sendStatus(404);
})

app.listen(port, () => console.log(`Listening on port ${port}\n http://localhost:${port}/`));
