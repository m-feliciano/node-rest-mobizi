const Users = require('../models/users')

module.exports = app => {
    app.get('/users', (req, res) => {
        Users.list(res)
        })
    app.get('/users/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Users.searchId(id, res)
    })  

    app.patch('/users/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const name = req.body.name
        const email = req.body.email
        const key = req.body.key

        console.log(name, email, key, id)
        
        Users.update(name, email, key,  id,  res)
    })

    app.delete('/users/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Users.delete(id, res)
    })  

    app.post('/users', (req, res) => {
        const users = req.body
        Users.add(users, res)
    })
}