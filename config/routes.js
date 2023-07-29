const express = require('express')
const routes = express.Router()

const db = require("./src/db.json")

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