var express = require('express');

var app = express();

var progressiveCandidateList = ['Hillary Clinton', 'Bernie Sanders', 'Martin O\'Malley', 'Elizabeth Warren', 'Jill Stein', 'Lucy Florez', 'Winona LaDuke', 'Al Franken'];
var conservativeCandidateList = ['Donald Drumpf', 'Ted Cruz', 'John Kasich', 'Jeb Bush', 'Carly Fiorina', 'Rick Santorum', 'Marco Rubio', 'Gary Johnson'];

app.use(express.static('public'));

app.get('/', function(request, response) {
  response.send('working!');
})

app.get('/conservatives', function(request, response) {
  response.send(conservativeCandidateList);
})

app.get('/progressives', function(request, response) {
  response.send(progressiveCandidateList);
})

var server = app.listen(process.env.PORT || 3000, function() {
  var port = server.address().port;
  console.log('Listening on port', port);
})
