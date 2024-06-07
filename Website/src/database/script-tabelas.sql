-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/
DROP DATABASE IF EXISTS projeto;
CREATE DATABASE projeto;

USE projeto;

CREATE TABLE livro (
idLivro INT PRIMARY KEY AUTO_INCREMENT,
titulo VARCHAR(45),
descricao VARCHAR(80)
) auto_increment = 0;

INSERT INTO livro (titulo) VALUES
	('Nenhum'), -- 0
    ('Herdeiro do Império'), -- 1
    ('Ascensão da Força Sombria'), -- 2
    ('O Último Comando'), -- 3
    ('Caminho de Destruição'), -- 4
    ('Regra de Dois'), -- 5
    ('Dinastia do Mal'), -- 6
    ('A Ascensão e a Queda de Darth Vader'), -- 7
    ('A Origem e a Lenda de Obi Wan Kenobi'), -- 8
    ('A Vida de Luke Skywalker'), -- 9
    ('O Livro dos Sith'), -- 10
    ('O Caminho Jedi'), -- 11
    ('Código do Caçador de Recompensas'), -- 12
    ('Manual do Império'), -- 13
    ('Troopers da Morte'), -- 14
    ('Sombras do Império'); -- 15

CREATE TABLE fotoPerfil (
idFoto INT PRIMARY KEY AUTO_INCREMENT,
caminhoFoto VARCHAR(60),
nomePersonagem VARCHAR(45)
);

INSERT INTO fotoPerfil (caminhoFoto, nomePersonagem) VALUES
	('Imagens/Luke.png', 'Luke Skywalker'),
	('Imagens/Boba_Fett.png', 'Boba Fett'),
	('Imagens/C3PO.png', 'C3PO'),
	('Imagens/Thrawn.png', 'Thrawn'),
	('Imagens/Darth_Vader.png', 'Darth Vader'),
	('Imagens/Joruus_C_Baoth.png', 'Joruus_C`Baoth'),
	('Imagens/Leia.png', 'Leia'),
	('Imagens/Darth_Revan.png', 'Darth Revan'),
	('Imagens/Yoda.png', 'Yoda');

CREATE TABLE usuario (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
email VARCHAR(50),
senha VARCHAR(50),
fkLivroFavorito INT,
fkFoto INT default(1),
FOREIGN KEY (fkLivroFavorito) REFERENCES livro(idLivro),
FOREIGN KEY (fkFoto) REFERENCES fotoPerfil(idFoto)
);

CREATE TABLE tentativaQuiz (
idTentativa INT PRIMARY KEY AUTO_INCREMENT,
fkUsuario INT,
FOREIGN KEY (fkUsuario) REFERENCES usuario(id),
acertos INT,
dtTentativa DATETIME default current_timestamp()
);

-- INSERT INTO tentativaQuiz (idTentativa, fkUsuario, acertos, dtTentativa) VALUES (NULL, 1, 6, default);
select * from usuario;
select * from tentativaQuiz;
select * from livro;

SELECT id, nome, email, caminhoFoto, titulo, ifnull(fkLivroFavorito, 1) FROM usuario 
JOIN fotoPerfil ON idFoto = fkFoto 
JOIN livro ON fkLivroFavorito = idLivro 
WHERE email = 'teste@gmail.com' AND senha = '1234567@';