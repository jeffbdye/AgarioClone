var path = require('path');
var serveStatic = require('serve-static')
var express = require('express');
const app = express();

app.set('port', 3000);
var staticPath = path.join(__dirname, '..', 'client');
app.use(serveStatic(staticPath, {'index': ['index.html']}))

var server = app.listen(app.get('port'), () => {
    console.log(`serving ${staticPath} on ${server.address().port}`);
})

module.exports = app;
