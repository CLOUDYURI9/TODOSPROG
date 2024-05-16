/*
3- Faça um programa que dê entrada com 10 números
armazene em um vetor, e verifique qual é o maior
número e mostre no console.
Nome: Yuri Dinato da Silva
*/

const teclado = require (`prompt-sync`)();
let meuArrayTres : number []= new Array(9);
let maior: number = 0;

for(let x = 0; x <= 9; x++ ){
    meuArrayTres[x] = parseInt(teclado(`Digite o número do índice ${x}: `));
    
}

for(let y = 0; y <=9; y++ ){
    if(meuArrayTres[y] > maior){
        maior = meuArrayTres[y]
    }
    else{}
}
console.log(`o maior número é ${maior}`)

