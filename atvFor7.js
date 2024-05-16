/*
7- Faça um programa para calcular n! (Fatorial de
n), sendo que o valor inteiro de n é fornecido pelo
usuário. utilize laço de repetição for.
*/
var teclado = require("prompt-sync")();
var x = parseInt(teclado("Digite o n\u00FAmero para fatoria-lo: "));
function fatorial(x) {
    var fatorial = 1;
    for (var i = 1; i <= x; i++) {
        fatorial *= i;
    }
    return fatorial;
}
var resultado = fatorial(x);
console.log("o fatorial de ".concat(x, " \u00E9 = ").concat(resultado));
