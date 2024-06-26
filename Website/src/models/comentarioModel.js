var database = require("../database/config");

function listar(idPost) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucaoSql = `
        SELECT u.id, u.nome, f.caminhoFoto, c.texto, DATE_FORMAT(c.dtHora, '%d/%c/%Y %H:%i') AS dtHora
            FROM usuario AS u 
            JOIN fotoPerfil AS f ON f.idFoto = u.fkFoto
            JOIN comentario AS c ON c.fkUsuario = u.id
            WHERE c.fkPost = ${idPost}
            ORDER BY dtHora;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(idPost, texto, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", idPost, texto, idUsuario);
    var instrucaoSql = `
        INSERT INTO comentario (fkUsuario, fkPost, texto) VALUES (${idUsuario}, ${idPost}, '${texto}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

/*function deletar(idAviso) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idAviso);
    var instrucaoSql = `
        DELETE FROM aviso WHERE id = ${idAviso};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}*/

module.exports = {
    listar,
    publicar,
    //deletar
}