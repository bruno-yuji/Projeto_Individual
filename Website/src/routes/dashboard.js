var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/mostrarGraficoLivros/:idUser", function (req, res) {
    dashboardController.mostrarGraficoLivros(req, res);
});

router.get("/mostrarGraficoPizza/:idUser", function (req, res) {
    dashboardController.mostrarGraficoPizza(req, res);
})

router.get("/pegarMediaUsuarios/:idUser", function (req, res) {
    dashboardController.pegarMediaUsuarios(req, res);
})

router.get("/mostrarGraficoQuiz/:idUser", function (req, res) {
    dashboardController.mostrarGraficoQuiz(req, res);
})

module.exports = router;