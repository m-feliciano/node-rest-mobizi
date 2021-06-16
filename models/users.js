const connection = require ('../infra/auth')


class Users{
    add(users, res){
        
        const sql = `INSERT INTO users(cpf_client, email, pass) VALUES('${users.cpf_client}', '${users.email}', '${users.pass}')`
         
        connection.query(sql, users, (error) => {
        if(error){
            res.status(400).json(error)
        }
        else{
            res.status(201).json(
                {'1 row affeted, inserted user': users.cpf_client +' '+  users.email})
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
                    SET name = ?,
                    email = ?,
                    pass = ?
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

module.exports = new Users()