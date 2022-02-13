const express = require('express');
const res = require('express/lib/response');
const app = express();


app.get('/', function (req, res) {
	res.sendFile('index.html', {root: './' })
})
app.get('/page1.html', function (req, res) {
	res.sendFile(__dirname + 'page1.html');
})

app.listen(1337, () => console.log('Marist Chatter listening on port 1337!'));

		