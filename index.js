const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));


// Configura la conexión a la base de datos
const db = mysql.createConnection({
  host: 'sql.freedb.tech',
  user: 'freedb_fullstack2',
  password: '$syCSG24p#B%YyV',
  database: 'freedb_fullstack2'
});

// Conecta a la base de datos
db.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

// Ruta para obtener y mostrar los datos de la tabla users
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, result) => {
    if (err) {
      console.error('Error al obtener datos de la tabla:', err);
      return res.status(500).send('Error al obtener datos de la tabla');
    }
    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`Servidor web escuchando en el puerto ${port}`);
});

