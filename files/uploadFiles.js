const { log } = require('console');
const fs = require('fs');
const path = require('path')

module.exports = (route, fileName, callbackCreatedImagem) => {

        const arrayType = ['png','jpeg','jpg']
        const type = path.extname(route)
        const typeValid = arrayType.indexOf(type.substring(1))!== -1 // Valida se o tipo de arquito match com o array

        if(typeValid){
            const newRoute = `./assets/img/${fileName}${type}`
            fs.createReadStream(route)
                .pipe(fs.createWriteStream(newRoute))
                .on('finish',() => callbackCreatedImagem(false, newRoute))
        }
        else{
        const error = "Error 404! Invalid type"
            log("Error 404! Invalid type")
            callbackCreatedImagem(error)
        }
}