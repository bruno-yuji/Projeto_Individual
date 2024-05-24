-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE projeto;

USE projeto;

CREATE TABLE livro (
idLivro INT PRIMARY KEY AUTO_INCREMENT,
titulo VARCHAR(45),
descricao VARCHAR(80)
);

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
idTentativa INT,
fkUsuario INT,
PRIMARY KEY (idTentativa, fkUsuario),
acertos INT,
dtTentativa DATETIME
);



select * from usuario;