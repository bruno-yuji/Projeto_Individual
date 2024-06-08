var express = require("express");
var router = express.Router();

var comentarioController = require("../controllers/comentarioController");

router.get("/listar", function (req, res) {
    comentarioController.listar(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    comentarioController.publicar(req, res);
});

/*router.delete("/deletar/:idcomentario", function (req, res) {
    comentarioController.deletar(req, res);
});*/

module.exports = router;