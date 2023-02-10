//Criação do banco de dados com SQLite

import sqlite3 from "sqlite3";
import path from "path"
import { dirname } from 'path';
import { fileURLToPath } from 'url';
                                    //colocar caminho da pasta atual    //nome do arquivo
const caminhoArq = path.resolve(dirname(fileURLToPath(import.meta.url)), "database.db")

//variavel responsavel pelos comandos do banco
const db = new sqlite3.Database(caminhoArq)

//texto pra ativar as chaves estrangeiras no SQLite
const pragma =`PRAGMA foreign_keys = ON`

//ativar chave estrangeira
const enableForeignKey= ()=>{
    db.run(pragma, (erro) =>{
        if(erro) console.log("Erro in process of creation exec 'pragma'")
    })
}



//Criação da tabela Cards
const CARDS_SCHEMAS =`
CREATE TABLE Cards(
    Nome VARCHAR(50),
    Speed INT,
    Hp INT,
    Attack INT,
    Defense INT,
    SpecialAttack INT,
    SpecialDefense INT

)`

const SCORE_SCHEMAS =`
CREATE TABLE Score(
    PontosJogador1 INT,
    PontosJogador2 INT
)`

const ROUND_SCHEMAS =`
CREATE TABLE RoundHistory(
    Vencedor INT,
    Hp INT,
    Attack INT,
    Defense INT,
    SpecialAttack INT,
    SpecialDefense INT,
    Speed INT
)`




const inserir= `INSERT INTO Score(PontosJogador1, PontosJogador2) values (0,0)`
const InserirTabelaScore =() =>{
    db.run(inserir, (erro) =>{
        if(erro) console.log("Erro na inserção tabela Score")
    })
}
const CreateTableCards = () =>{
    db.run(CARDS_SCHEMAS, (erro) =>{
        if(erro) console.log("Erro na criação da tabela Cards")
    })
}
const CreateTableScore = () =>{
    db.run(SCORE_SCHEMAS, (erro) =>{
        if(erro) console.log("Erro na criação da tabela Score")
    })
}
const CreateTableRound = () =>{
    db.run(ROUND_SCHEMAS, (erro) =>{
        if(erro) console.log("Erro na criação da tabela Round")
    })
}


db.serialize(()=>{
    enableForeignKey()
    CreateTableScore()
    CreateTableCards()
    CreateTableRound()
    InserirTabelaScore()
})