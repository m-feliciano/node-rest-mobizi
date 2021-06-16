const House = require('../models/houses')

module.exports = app =>{
    app.post('/houses', (req, res) => {
        const house = req.body

        House.add(house, res)
    })
}