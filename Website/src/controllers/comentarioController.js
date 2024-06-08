var comentarioModel = require("../models/comentarioModel");

function listar(req, res) {
    var idPost = req.params.idPost;

    comentarioModel.listar(idPost)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os comentarios: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }

function publicar(req, res) {
    var idUsuario = req.params.idUsuario;
    var idPost = req.body.idPost;
    var texto = req.body.texto;

    if (idPost == undefined) {
        res.status(400).send("O idPost está indefinido!");
    } else if (texto == undefined) {
        res.status(400).send("A descrição está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        comentarioModel.publicar(idPost, texto, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
        }
    }

/*function deletar(req, res) {
    var idComentario = req.params.idComentario;

    comentarioModel.deletar(idComentario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}*/

module.exports = {
    listar,
    publicar,
    //deletar
}