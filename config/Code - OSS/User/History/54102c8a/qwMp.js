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

const db = pgn(cn);

/* Endpoints */
app.get('/blog', (req, res) => {
    db.any('select * from blog')
       .then(data => res.send(data))
       .catch(error => res.send(error))
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
