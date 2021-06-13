class Tables {
    init(connection){
        this.connection = connection

        this.createUsers()
    }
    createUsers(){

        const sql = "CREATE TABLE IF NOT EXISTS users(id INT NOT NULL AUTO_INCREMENT, u_name VARCHAR( 20) NOT NULL UNIQUE, u_email VARCHAR(40) NOT NULL UNIQUE, u_key VARCHAR(100) NOT NULL, u_type enum('user','root') DEFAULT 'user', u_obs text, u_inserted_data TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(id))"

        this.connection.query(sql, (error) => {
            if(error){
                console.log(error)
            }
            else{
                console.log('Table users created with sucess!')
            }
        })
    }
}

module.exports = new Tables;