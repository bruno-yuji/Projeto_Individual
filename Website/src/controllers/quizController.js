var quizModel = require("../models/quizModel");

function enviar(req, res) {
    var idUser = req.body.idUserServer;
    var acertos = req.body.acertosServer;

    if (acertos == undefined) {
        res.status(400).send("Seu acerto está undefined!");
    } else {
        quizModel.enviar(idUser, acertos)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o envio! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    enviar
}