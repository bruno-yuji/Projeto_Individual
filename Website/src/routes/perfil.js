var express = require("express");
var router = express.Router();

var perfilController = require("../controllers/perfilController");

router.post("/trocar", function (req, res) {
    perfilController.trocar(req, res);
});

/*router.get("/mostrar", function (req, res) {
    perfilController.mostrar(req, res);
});*/

module.exports = router;