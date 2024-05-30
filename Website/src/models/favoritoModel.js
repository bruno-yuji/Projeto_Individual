var database = require("../database/config")


function favoritar(idLivro, idUser) {
    var instrucao = `
    UPDATE usuario SET fkLivroFavorito = ${idLivro} WHERE id = ${idUser};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function mostrarLivro(idUser) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", idUser)
    var instrucaoSql = `
        SELECT titulo FROM livro JOIN usuario ON idLivro = fkLivroFavorito WHERE id = ${idUser};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    favoritar,
    mostrarLivro
};