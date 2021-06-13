const connection = require ('../infra/auth')


class Users{
    add(users, res){
        
        const sql = `INSERT INTO users(u_name, u_email, u_key) VALUES('${users.name}', '${users.email}', '${users.key}')`
         
        connection.query(sql, users, (error) => {
        if(error){
            res.status(400).json(error)
        }
        else{
            res.status(201).json(
                {'1 row affeted, inserted user': users.name +', '+ users.email})
        }
        })
            
    }
    list(res){
        const sql = 'SELECT * FROM users'

        connection.query(sql, (error, results) =>{
            if(error){
                res.status(400).json(error);
            }
            else{
                res.status(200).json(results);
            }
        } )
    }
    searchId(id, res){
        const sql = `SELECT * FROM users WHERE id = ${id}`
        connection.query(sql, (error, results) =>{
            const user = results[0]

            if(error){
                res.status(400).json(error);
            }
            else{
                res.status(200).json(user);
            }
        } )
    }
    update(name, email, key, id,  res){
        const sql = `UPDATE users 
                    SET u_name = ?,
                    u_email = ?,
                    u_key = ?
                    WHERE id = ?`

        connection.query(sql, [name, email, key, id], (error, results) =>{
            if(error){
                res.status(400).json(error);
            }
            else{
                res.status(200).json(results);
            }
        } )
    }
    delete(id,  res){
        const sql = `DELETE FROM users WHERE id = ?`

        connection.query(sql, id, (error, results) =>{
            if(error){
                res.status(400).json(error);
            }
            else{
                res.status(200).json({'1 row affeted, deleted user' : id });
            }
        } )
    }

}

module.exports = new Users