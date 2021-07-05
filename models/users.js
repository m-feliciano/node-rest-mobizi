const connection = require ('../infra/database/conn')


class User {
    add(user, res){
        
        const sql = `INSERT INTO users(cpf_client, email, pass) VALUES('${user.cpf_client}', '${user.email}', '${user.pass}')`
         
        connection.query(sql, user, (error) => {
        if(error){
            res.status(400).json(error)
        }
        else{
            res.status(201).json(
                {'1 row affeted, inserted user': user.cpf_client +' '+  user.email})
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
    update(email, pass, id,  res){
        const sql = `UPDATE users 
                    SET email = ?,
                    pass = ?
                    WHERE id = ?`

        connection.query(sql, [email, pass, id], (error, results) =>{
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

module.exports = new User()