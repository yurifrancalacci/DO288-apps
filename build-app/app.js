var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Simple1 app for the Building Applications Lab!\n');
});

app.listen(8080, function () {
  console.log('Simple app for the Building Applications Lab!');
});

