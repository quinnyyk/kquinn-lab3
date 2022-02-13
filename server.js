const express = require('express');
const res = require('express/lib/response');
const app = express();
app.get('/', function (req, res) {
	res.sendFile('index.html', {root: './' })
})
app.get('http://localhost:1337/page1', function (req, res) {
	res.sendFile(path.join(__dirname, '/public', 'page1.html'));
})
app.listen(1337, () => console.log('Marist Chatter listening on port 1337!'));

