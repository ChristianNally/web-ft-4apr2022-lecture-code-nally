const pg = require('pg');

const Client = pg.Client;

const configObj = {
  user: 'postgres',
  host: 'localhost',
  database: 'spot',
  password: 'postgres',
  port: 5433
};

const client = new Client(configObj);

client.connect()
.then(() => {
  console.log(`connected to database`);
})
.catch((error) => {
  console.log(`error connecting to the database`);
});

const verb = process.argv[2];
const id = process.argv[3];

switch (verb){

  case 'browse':
    console.log('browse was run');
    client.query('SELECT id,question FROM objectives ORDER BY id;')
    .then((response) => {
      // console.log(`response`,response);
      response.rows.forEach((lo)=>{
        console.log(`${lo.id} :: ${lo.question}`);
      });
      client.end();
    })
    .catch((error) => {
      console.log('error',error);
    });

    break;

  case 'read':
    console.log('browse was run');
    client.query(`SELECT * FROM objectives WHERE id = $1;`,[id])
    .then((response) => {
      // console.log(`response`,response);
      response.rows.forEach((lo)=>{
        console.log(`${lo.id} :: ${lo.question}`);
        console.log(`${lo.type}`);
        console.log(`${lo.answer}`);
      });
      client.end();
    })
    .catch((error) => {
      console.log('error',error);
    });
    break;

  default:
    console.log('spottool: command verb not recognized');
    break;
}
