const Users = require('../mvc/users')

module.exports = app => {
    app.get('/home', (req, res) => res.send('server running'))

    app.post('/home', (req,res) => {
        
        const users = req.body

        Users.add(users)

        res.send('you\'re in post router ')
    })
}
