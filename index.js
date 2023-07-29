const express = require('express'); // Biblioteca para gerenciar requisições
const morgan = require('morgan'); // Biblioteca utilizada para salvar log de requisições
const cors = require('cors'); // Biblioteca usada para definir quais end. web externos podem acessar a uma aplicação HTTP
const bodyParser = require('body-parser'); // Módulo para converter o corpo da requisição em json

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

let db = [
    {'1': { first_name: 'Paulo', last_name: 'Sérgio', email: 'paulo.sergio@gmail.com'}},
    {'2': { first_name: 'Luiz', last_name: 'Henrique', email: 'luiz.henrique@gmail.com'}},
    {'3': { first_name: 'Diego', last_name: 'Mandu', email: 'diego.mandu@gmail.com'}}
]
// Buscar dados
app.get('/', (req, res) => {
    return res.json(db)
})
// Inserir dados
app.post('/add', (req, res) =>{
    const body = req.body

    if(!body){
        return res.status(400).end()
    }
    db.push(body)
    return res.json(body)
})

app.listen(3000, () => {
    console.log('Express started at http://localhost:3000')
});

