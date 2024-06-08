function voltar() {
    window.location = "../livros.html";
}

function limparFormulario() {
    textarea_descricao.innerText = "";
}

function publicar(idPost) {
    var idUsuario = sessionStorage.ID_USUARIO;
    
    var corpo = {
        idPost: idPost,
        texto: textarea_descricao.value
    }

    fetch(`/comentario/publicar/${idUsuario}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(corpo)
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            //window.alert("Comentário realizado com sucesso pelo usuario de ID: " + idUsuario + "!");
            window.location.reload();
            limparFormulario();
        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;

}

function atualizarComentarios(idPost) {
    fetch(`/comentario/listar/${idPost}`).then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {
                var feed = document.getElementById("feed_container");
                var mensagem = document.createElement("span");
                mensagem.innerHTML = "Nenhum comentário foi postado. Seja o primeiro!"
                feed.appendChild(mensagem);
                throw "Nenhum resultado encontrado!!";
            }

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                var feed = document.getElementById("feed_container");
                feed.innerHTML = "";
                for (let i = 0; i < resposta.length; i++) {
                    var publicacao = resposta[i];

                    // criando e manipulando elementos do HTML via JavaScript
                    var divPublicacao = document.createElement("div");
                    var spanUser = document.createElement("span");
                    var divDescricao = document.createElement("div");

                    spanUser.innerHTML = `<img class="img_comment" src="../${publicacao.caminhoFoto}"> <span>${publicacao.nome} - ${publicacao.dtHora}</span> <br> <br> <br>`;
                    divDescricao.innerHTML = "<b>" + publicacao.texto + "</b>";

                    divPublicacao.className = "comentario";
                    spanUser.className = "usuario";
                    divDescricao.className = "publicacao-descricao";

                    divPublicacao.appendChild(spanUser);
                    divPublicacao.appendChild(divDescricao);
                    feed.appendChild(divPublicacao);
                }
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });
}