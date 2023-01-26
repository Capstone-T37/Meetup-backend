const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./api/routes');
const port = process.env.PORT || 4000;
const app = express();

app.use(bodyParser.json())
routes(app);

app.listen(port, ()=> {
   console.log('Server started on port: ' + port);
});

