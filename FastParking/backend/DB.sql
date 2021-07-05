create database dbFastParking;

use dbFastParking;

create table tblCadastro (
	    idCadastro int not null auto_increment primary key,
    nomeCliente varchar(45) not null,
    horaEntrada time not null,
    horaSaida time not null,
    
    unique key(idCadastro)
);

create table tblPreco(
	    idPreco int not null auto_increment primary key,
    precoInicial double not null,
    precoPorHora double not null,
    preco double not null,
    precoAdicionalPorHora double,

    unique key(idPreco)
);