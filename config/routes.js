const express = require('express')
const routes = express.Router()

let db = [
    {'1': { first_name: 'Paulo', last_name: 'Sérgio', email: 'paulo.sergio@gmail.com'}},
    {'2': { first_name: 'Luiz', last_name: 'Henrique', email: 'luiz.henrique@gmail.com'}},
    {'3': { first_name: 'Diego', last_name: 'Mandu', email: 'diego.mandu@gmail.com'}}
]

// Buscar dados
routes.get('/', (req, res) => {
    return res.json(db)
})

// Inserir dados
routes.post('/add', (req, res) =>{
    const body = req.body

    if(!body){
        return res.status(400).end()
    }
    db.push(body)
    return res.json(body)
})

// Deletar dados
routes.delete('/:id', (req, res) =>{
    const id = req.params.id

    let newDB = db.filter(item => {
        if(!item[id]){
            return item
        }

    db = newDB
    return res.send(newDB)    
    })
})
module.exports = routes