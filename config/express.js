const express = require ('express')
const consign = require('consign')

module.exports = () => {

    const app = express()
   
    // application/json
    app.use(express.urlencoded({extended: true}));
    app.use(express.json()) 

    consign()
    .include('controllers')
    .into(app)

    return app
}


