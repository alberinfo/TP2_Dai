const fs = require('fs');

exports.copiar = async function(nom1, nom2) {
    await fs.copyFile(nom1, nom2, fs.constants.COPYFILE_FICLONE, error => {
        if(error) console.log("No se pudo copiar el archivo: ", error);
        else console.log("archivo copiado");
    });
}