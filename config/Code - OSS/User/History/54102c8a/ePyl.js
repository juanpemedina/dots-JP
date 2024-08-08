const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

/* Conexion a la bd */
const pgp = require('pg-promise')();
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'pruebajp',
    user: 'yeipi',
    password: '12345',
    allowExitOnIdle: true
}

const db = pgp(cn);

/* Endpoints */
app.get('/post', (req, res) => {
    db.any('select * from cars')
       .then(data => res.send(data))
       .catch(error => res.send(error))
});

app.get('/posts/:id', (req,req) =>{
    db.one('SELECT * FROM cars WHERE id=$1', [req.params.id_post])
    .then(data => res.send(data))
    .catch(error => res.send(error))
});


app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
