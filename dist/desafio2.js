"use strict";
// Como podemos melhorar o esse código usando TS? 
var Profissao;
(function (Profissao) {
    Profissao["Atriz"] = "Atriz";
    Profissao["Padeiro"] = "Padeiro";
})(Profissao || (Profissao = {}));
var pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = Profissao.Atriz;
var pessoa2 = {};
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = Profissao.Padeiro;
var pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz
};
var pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
};
console.log(pessoa1, pessoa2, pessoa3, pessoa4);
