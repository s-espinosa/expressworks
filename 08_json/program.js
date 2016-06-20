var express = require('express');
var app     = express();
var fs      = require('fs');

app.get('/books', function(req, res) {
  book = fs.readFile(process.argv[3], function(e, data){
    if (e) return res.sendStatus(500);
    try {
      res.json(JSON.parse(data));
    } catch(e) {
      res.sendStatus(500);
    }
  })
});

app.listen(process.argv[2] || 3000);
