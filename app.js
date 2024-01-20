const express = require('express');

const bodyParser = require('body-parser');
// const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./backend/db/connect');
// const professionalRoutes = require('./routes/professional');

const port = process.env.PORT || 3001;
const app = express();

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./backend/routes'));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {console.log(`Connected to DB and listening on ${port}`)});
   }
});