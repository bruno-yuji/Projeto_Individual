var perfilModel = require("../models/perfilModel");

function trocar(req, res) {
    var idFoto = req.body.nome;

    if (idFoto == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }

    perfilModel.trocar(idFoto).then(function(resposta){
        res.status(200).send("Foto de perfil trocada com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function mostrar(req, res) {
    perfilModel.mostrar().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    trocar,
    mostrar
}