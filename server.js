var connect = require('connect'); // connect module

var app = connect();

var helloWorld = function(req, res, next){

res.setHeader('Content-Type','text/plain');

res.end('Hello World');

};

app.use(helloWorld); // call helloWorld function

app.use('/', helloWorld); 

app.listen(process.env.PORT || 3000); 

console.log('Server running at http://localhost:3000/');