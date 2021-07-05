const User = require('../models/users')

module.exports = app => {
    app.get('/users', (req, res) => {
        User.list(res)
        })
    app.get('/users/:id', (req, res) => {
        const id = parseInt(req.params.id)
        User.searchId(id, res)
    })  

    app.patch('/users/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const email = req.body.email
        const pass = req.body.pass

        console.log(email, pass, id)
        
        User.update(email, pass,  id,  res)
    })

    app.delete('/users/:id', (req, res) => {
        const id = parseInt(req.params.id)
        User.delete(id, res)
    })  

    app.post('/users', (req, res) => {
        const user = req.body
        User.add(user, res)
    })
}