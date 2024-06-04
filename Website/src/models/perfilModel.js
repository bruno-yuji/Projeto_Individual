var database = require("../database/config")

function trocar(idFoto, idUser) {
    var instrucao = `
    UPDATE usuario SET fkFoto = ${idFoto} WHERE id = ${idUser};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function renomear(novoNome, idUser) {
    var instrucao = `
    UPDATE usuario SET nome = ${novoNome} WHERE id = ${idUser};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    trocar,
    renomear
};