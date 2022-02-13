const express = require('express');
const res = require('express/lib/response');
const app = express();

app.get('/', function (req, res) {
	res.sendFile('index.html', {root: './' })
})
app.get('/page1', function (req, res) {
	res.sendFile('page1', {root: './' });
})
app.listen(1337, () => console.log('Marist Chatter listening on port 1337!'));

		