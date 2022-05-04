require('dotenv').config();
const express = require('express');
const app = express();
app.set('view engine', 'ejs');

const pg = require('pg');
const Client = pg.Client;
const configObj = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT
};
const dbclient = new Client(configObj);

dbclient.connect()
.then(() => {
  console.log(`connected to database`);
})
.catch((error) => {
  console.log(`error connecting to the database`);
});

app.get('/', (req, res) => {

  dbclient.query('SELECT id,question FROM objectives ORDER BY id;')
  .then((response) => {
    // console.log(`response`,response);
    const templateVars = {objectives: response.rows};
    res.render('index',templateVars);
  })
  .catch((error) => {
    console.log('error',error);
  });

});

app.get('/objective/:id', (req, res) => {
  const id = req.params.id;

  const queryText = `
  SELECT id, question, answer, type 
  FROM objectives 
  WHERE id = $1;`;

  dbclient.query(queryText,[id])
  .then((response) => {
    // console.log(`response`,response);
    const templateVars = {objectives: response.rows};
    res.render('objective',templateVars);
  })
  .catch((error) => {
    console.log('error',error);
  });

});

const port = 8081;
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});