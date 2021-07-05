const connection = require('../infra/database/conn')
const uploadFile = require('../files/uploadFiles')

class House {
    
    add(house, res) {
        const query = 'INSERT INTO houses SET ?'
        uploadFile(house.imagem, house.name, (error, newRoute) =>{

            if(error){
                res.status(400).json(error)
            }
            else{
                const newHouse = {name: house.name, imagem: newRoute}

                connection.query(query, newHouse, error =>{
                    if(error){
                        res.status(400).json({error})
                    }
                    else {
                        res.status(200).json(newHouse)
                    }
                })
            }
        })
    }
}

module.exports = new House()