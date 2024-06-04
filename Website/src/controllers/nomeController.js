var nomeModel = require("../models/nomeModel");

function renomear(req, res) {
    var novoNome = req.body.nomeServer;
    var idUser = req.body.idServer;

    if (novoNome == undefined) {
        res.status(400).send("Seu idFoto está undefined!");
    } else if (idUser == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {
        nomeModel.renomear(novoNome, idUser).then(function(resposta){
            res.json(resposta);
        }).catch(function(erro){
            res.status(500).json(erro.sqlMessage);
        })
    }
}

module.exports = {
    renomear
}