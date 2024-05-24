var express = require("express");
var router = express.Router();

var perfilController = require("../controllers/perfilController");

router.post("/trocar", function (req, res) {
    perfilController.cadastrar(req, res);
});

router.get("/mostrar", function (req, res) {
    perfilController.listar(req, res);
});

module.exports = router;