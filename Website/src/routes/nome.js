var express = require("express");
var router = express.Router();

var nomeController = require("../controllers/nomeController");

router.post("/alterar", function (req, res) {
    nomeController.renomear(req, res);
});

module.exports = router;