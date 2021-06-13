const connection = require ('../infra/auth')


class users{
    add(users){
        const sql = 'INSERT INTO users SET ?'

        connection.query(sql, users, (error, results) => {
        
        if(error){
            console.log(error)
        }
        else{
            console.log(results)

        }
        })
            
    }
}

module.exports = new users