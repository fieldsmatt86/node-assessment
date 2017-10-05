const express = require('express');
const bodyParser = require('body-parser');

var middleware = require('./middleware.js');
var usersCtrl = require('./usersCtrl.js');

const app = express();

app.use( bodyParser.json() );
app.use(middleware.addHeaders);

require('./usersCtrl.js')(app);

// const usersBaseUrl = "/api/users";
//  app.get('/users', function(req, res, next) {
//         res.status(200).json({age: age})
//     });



const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );