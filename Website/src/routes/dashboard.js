var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/mostrarGrafico1/:idUser", function (req, res) {
    dashboardController.mostrarGrafico1(req, res);
});

router.get("/mostrarGrafico2/:idUser", function (req, res) {
    dashboardController.mostrarGrafico2(req, res);
})

module.exports = router;