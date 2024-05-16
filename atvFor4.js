/*
4 – Faça um programa que dê entrada manual de 10 números
armazene em um vetor, em seguida inverter a ordem de
armazenamento em outro vetor, utilize laços de repetição para
fazer essa atividade
*/
var teclado = require("prompt-sync")();
var meuArrayUm = new Array(9);
var meuArrayDois = new Array(9);
var x = 0;
for (var x_1 = 0; x_1 <= 9; x_1++) {
    meuArrayUm[x_1] = parseInt(teclado("Digite o n\u00FAmero do \u00EDndice ".concat(x_1, ": ")));
}
for (var y = 9; y >= 0; y--) {
    meuArrayDois[y] = meuArrayUm[x];
    x++;
}
console.log(meuArrayUm);
console.log(meuArrayDois);
