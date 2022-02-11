const express = require('express');
const app = express();
app.get('http://localhost:1337/', function (req, res) {
res.sendFile('index.html', {root: './' })
})
app.listen(1337, () => console.log('Marist Chatter listening on port 1337!'));


