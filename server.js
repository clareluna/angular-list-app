var express = require('express');
var app = express();

//var router?

var port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log('server up on port 3000');
});