/*
4 – Faça um programa que dê entrada manual de 10 números
armazene em um vetor, em seguida inverter a ordem de
armazenamento em outro vetor, utilize laços de repetição para
fazer essa atividade
Nome: Yuri Dinato da Silva
*/

const teclado = require(`prompt-sync`)();
let meuArrayUm: number[] = new Array(9);
let meuArrayDois: number[] = new Array(9);
let x = 0;

for (let x = 0; x <= 9; x++) {
    meuArrayUm[x] = parseInt(teclado(`Digite o número do índice ${x}: `));
}

for (let y = 9; y >= 0; y--) {
    meuArrayDois[y] = meuArrayUm[x];
    x++;
}

console.log(meuArrayDois);


