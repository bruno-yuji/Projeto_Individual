var database = require("../database/config")

function mostrar(ID_USUARIO) {
    var instrucao = `
        SELECT caminhoFoto FROM fotoPerfil WHERE fkUsuario = ${ID_USUARIO};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function trocar(idFoto, ID_USUARIO) {
    var instrucao = `
        UPDATE fotoPerfil SET idFoto = ${idFoto} WHERE fkUsuario = ${ID_USUARIO};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    trocar,
    mostrar
};