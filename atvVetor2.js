/*
2 – Faça um laço de repetição que contenha uma operação
aritmética qualquer , esse laço vai se repetir 10x utilizando
entrada de dados (prompt Sync), os resultados de cada operação
será armazenado em um vetor, após o termino do laço de
repetição os resultados de cada operação armazenada deve ser
exibido (com laço de repetição ou não).
*/
var teclado = require("prompt-sync")();
var resultado = new Array(9);
function multiplicacao(n1, n2) {
    return n1 * n2;
}
for (var x = 0; x <= 10; x++) {
    var n1 = parseInt(teclado("Digite o primeiro fator: "));
    var n2 = parseInt(teclado("Digite o segundo fator: "));
    resultado[x] = multiplicacao(n1, n2);
    console.log("O produto da multiplica\u00E7\u00E3o ".concat(n1, " X ").concat(n2, " = ").concat(resultado[x]));
}
