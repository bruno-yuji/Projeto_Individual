var database = require("../database/config");

function mostrarGrafico1(idUser) {
    console.log("Gráfico 1 do usuário " + idUser)

    var instrucaoSql = `SELECT titulo, count(fkLivroFavorito) as qtdFavorito
                            FROM livro LEFT JOIN usuario
                            ON idLivro = fkLivroFavorito
                            GROUP BY titulo;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mostrarGrafico2(idUser, limite_linhas) {

    var instrucaoSql = `SELECT acertos, DATE_FORMAT(dtTentativa, '%d/%c/%Y %H:%i') AS dtTentativa FROM tentativaQuiz
                            JOIN usuario ON id = fkUsuario
                            WHERE id = ${idUser}
                            LIMIT ${limite_linhas};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    mostrarGrafico1,
    mostrarGrafico2
}