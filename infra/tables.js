class Tables {
    init(connection){
        this.connection = connection

        this.createUsers()
        this.createHouses()
    }
    createUsers(){

        const query = "CREATE TABLE IF NOT EXISTS users(id INT NOT NULL AUTO_INCREMENT, cpf_client VARCHAR(11) NOT NULL UNIQUE, email VARCHAR(40) NOT NULL UNIQUE, pass VARCHAR(100) NOT NULL, type enum('user','root') DEFAULT 'user', obs text, inserted_data TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(id))"

        this.connection.query(query, (error) => {
            if(error){
                console.log(error)
            }
            else{
                console.log('Table users created!')
            }
        })
    }
    createHouses(){
        const query = "CREATE TABLE IF NOT EXISTS houses(id INT NOT NULL AUTO_INCREMENT, name VARCHAR(50), cep VARCHAR(8), street VARCHAR(30), num INT, imagem VARCHAR(200), cpf_clientID VARCHAR(11), PRIMARY KEY(id), CONSTRAINT fk_cpf_client FOREIGN KEY(cpf_clientID) REFERENCES users(cpf_client))"

        this.connection.query(query, (error) => {
            if(error){
                console.log(error)
            }
            else{
                console.log('Table houses created!')
            }
        })

    }
}

module.exports = new Tables;