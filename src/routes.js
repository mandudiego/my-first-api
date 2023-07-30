const express = require('express')
const routes = express.Router()
const User = require('./models/User')

// Inserir dados
routes.post('/user', async (req, res) => {
    const { first_name, last_name, email } = req.body
    const user = {
        first_name,
        last_name,
        email,
    }
    try {
        await User.create(user)
        res.status(201).json({ message: 'User registered' })
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

// Buscar dados
routes.get('/', async (req, res) => {
    try {
        const user = await User.find()

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

// Buscar dados específicos
routes.get('/:f_name', async (req, res) => {
    const f_name = req.params.first_name
    try {
        const user = await User.findOne({ first_name: f_name })

        if (!user) {
            res.status(422).json({ message: 'User not find' })
            return
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

// Atualizar dados
routes.patch('/:id', async (req, res) => {
    const id = req.params.id
    const { first_name, last_name, email } = req.body

    const user = {
        first_name,
        last_name,
        email,
    }

    try {
        const updatedUser = await User.updateOne({ _id: id }, user)

        if (updatedUser.matchedCount === 0) {
            res.status(422).json({ message: 'User not find' })
            return
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

// Deletar dados
routes.delete('/:first_name', async (req, res) => {
    const first_name = req.params.first_name
    const user = await User.findOne({ first_name: first_name })
    if (!user) {
        res.status(422).json({ message: 'User not find' })
        return
    }

    try {
        
        await User.deleteOne({first_name: first_name})
        res.status(200).json({message: 'User removed'})
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

module.exports = routes