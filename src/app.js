const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

// Importando Rutas
const rutasUsuarios = require('./rutas/usuarios');

// Configuración
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port:3306,
    database: 'nodebd'
}, 'single'));
app.use(express.urlencoded({extended:false}));

// Rutas
app.use('/', rutasUsuarios);

// Archivos Estáticos
app.use(express.static(path.join(__dirname, 'archivos')));

// Comienzo del Servidor
app.listen(app.get('port'), () => {
    console.log('Server puerto 3000');
});