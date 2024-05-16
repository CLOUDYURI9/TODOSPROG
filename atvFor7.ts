/*
7- Faça um programa para calcular n! (Fatorial de
n), sendo que o valor inteiro de n é fornecido pelo
usuário. utilize laço de repetição for.
Nome: Yuri Dinato da Silva
*/

const teclado = require(`prompt-sync`)();

let x: number = parseInt(teclado(`Digite o número para fatoria-lo: `));
function fatorial(x: number) {
    let fatorial = 1;
    for (let i = 1; i <= x; i++) {
        fatorial *= i
    }
    return fatorial;
}

let resultado = fatorial(x);

console.log(`o fatorial de ${x} é = ${resultado}`);



