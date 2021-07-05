const express = require('express')
const custom = require('./config/express')
const mysql = require('mysql2')
const Tables = require('./infra/database/tables')
const dotenv = require('dotenv')
const path = require('path');


dotenv.config({path: './infra/database/.env'});

const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});


connection.connect(error => {
    if(error){
        console.log(error);
    }
    else{
        console.log('db conected...')

        Tables.init(connection)

        const app = custom()
        app.listen (5500, () => console.log('Server running in port 5500...'))
    }
})