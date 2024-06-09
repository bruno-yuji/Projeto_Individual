var dashboardModel = require("../models/dashboardModel");

function mostrarGraficoLivros(req, res) {

    var idUser = req.params.idUser;

    dashboardModel.mostrarGraficoLivros(idUser).then(function (resultado) {
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

function mostrarGraficoPizza(req, res) {

    var idUser = req.params.idUser;

    console.log(`Recuperando últimos acertos`);

    dashboardModel.mostrarGraficoPizza(idUser).then(function (resultado) {
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

function pegarMediaUsuarios(req, res) {

    var idUser = req.params.idUser;

    console.log(`Recuperando média de acertos dos usuários`);

    dashboardModel.pegarMediaUsuarios(idUser).then(function (resultado) {
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

function mostrarGraficoQuiz(req, res) {

    const limite_linhas = 10;

    var idUser = req.params.idUser;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    dashboardModel.mostrarGraficoQuiz(idUser, limite_linhas).then(function (resultado) {
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
    mostrarGraficoLivros,
    mostrarGraficoPizza,
    pegarMediaUsuarios,
    mostrarGraficoQuiz
}