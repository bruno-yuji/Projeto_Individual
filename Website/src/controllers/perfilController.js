var perfilModel = require("../models/perfilModel");

function trocar(req, res) {
    var idFoto = req.body.fotoServer;
    var idUser = req.body.idServer;

    if (idFoto == undefined) {
        res.status(400).send("Seu idFoto está undefined!");
    } else if (idUser == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {
        perfilModel.trocar(idFoto, idUser).then(function(resposta){
            res.json(resposta);
        }).catch(function(erro){
            res.status(500).json(erro.sqlMessage);
        })
    }
}

module.exports = {
    trocar
}