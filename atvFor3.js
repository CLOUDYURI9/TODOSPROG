/*
3- Faça um programa que dê entrada com 10 números
armazene em um vetor, e verifique qual é o maior
número e mostre no console.
Nome: Yuri Dinato da Silva
*/
var teclado = require("prompt-sync")();
var meuArrayTres = new Array(9);
var maior = 0;
for (var x = 0; x <= 9; x++) {
    meuArrayTres[x] = parseInt(teclado("Digite o n\u00FAmero do \u00EDndice ".concat(x, ": ")));
}
for (var y = 0; y <= 9; y++) {
    if (meuArrayTres[y] > maior) {
        maior = meuArrayTres[y];
    }
    else { }
}
console.log("o maior n\u00FAmero \u00E9 ".concat(maior));
