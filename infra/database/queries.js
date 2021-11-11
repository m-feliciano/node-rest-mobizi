/*
const connection = require('./conn')

const executeQuery = (query, params = '') => {
    return new Promise((resolve, reject) => {
        connection.query(query, params, (error, results, data) =>{
            if(error){
                reject(error)
            } else {
                resolve(results)
            }
        })
    })   
}

module.exports = executeQuery

*/