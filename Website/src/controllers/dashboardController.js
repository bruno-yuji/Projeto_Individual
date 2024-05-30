var dashboardModel = require("../models/dashboardModel");

function mostrarGrafico1(req, res) {

    var idUser = req.params.idUser;

    dashboardModel.mostrarGrafico1(idUser).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function mostrarGrafico2(req, res) {

    const limite_linhas = 10;

    var idUser = req.params.idUser;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    dashboardModel.mostrarGrafico2(idUser, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    mostrarGrafico1,
    mostrarGrafico2

}