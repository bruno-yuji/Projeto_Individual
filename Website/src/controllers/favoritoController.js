var favoritoModel = require("../models/favoritoModel");

function favoritar(req, res) {
    var idLivro = req.body.livroServer;
    var idUser = req.body.idServer;

    if (idLivro == undefined) {
        res.status(400).send("Seu idLivro está undefined!");
    } else if (idUser == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {
        favoritoModel.favoritar(idLivro, idUser).then(function(resposta){
            res.json(resposta);
        }).catch(function(erro){
            res.status(500).json(erro.sqlMessage);
        })
    }
}

function mostrarLivro(req, res) {
    var idUser = req.body.idServer;

    if (idUser == undefined) {
        res.status(400).send("Seu idUser está undefined!");
    } else {
        favoritoModel.mostrarLivro(idUser)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);
                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.json({
                            titulo: resultadoAutenticar[0].titulo
                        });
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("id inválido");
                    } 
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao buscar livro! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    favoritar,
    mostrarLivro
}