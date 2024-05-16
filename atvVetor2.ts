/*
2 – Faça um laço de repetição que contenha uma operação
aritmética qualquer , esse laço vai se repetir 10x utilizando
entrada de dados (prompt Sync), os resultados de cada operação
será armazenado em um vetor, após o termino do laço de
repetição os resultados de cada operação armazenada deve ser
exibido (com laço de repetição ou não).
Nome: Yuri Dinato da Silva
*/
const teclado = require(`prompt-sync`)();

let resultado: number[] = new Array(9);
function multiplicacao(n1: number, n2: number): number {
    return n1 * n2

}
for (let x = 0; x <= 10; x++) {
    let n1: number = parseInt(teclado(`Digite o primeiro fator: `));
    let n2: number = parseInt(teclado(`Digite o segundo fator: `));
    resultado[x] = multiplicacao(n1, n2);
    console.log(`O produto da multiplicação ${n1} X ${n2} = ${resultado[x]}`);
}

