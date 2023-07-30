const express = require('express'); // Biblioteca para gerenciar requisições
const morgan = require('morgan'); // Biblioteca utilizada para salvar log de requisições
const cors = require('cors'); // Biblioteca usada para definir quais end. web externos podem acessar a uma aplicação HTTP
const bodyParser = require('body-parser'); // Módulo para converter o corpo da requisição em json
const routes = require('./src/routes.js')

// DB Connection
const conn = require('./src/db/connection.js')

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(routes)
conn()

app.listen(3000, () => {
    console.log('Express started at http://localhost:3000')
});

