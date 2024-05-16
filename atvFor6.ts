/*
6- Faça um programa que verifique e mostre os números entre
1.000 e 2.000 (inclusive) que, quando divididos por 11
produzam resto igual a 2. Utilizar o laço de repetição FOR
Nome: Yuri Dinato da Silva
*/

for(let x = 1000; x <= 2000; x++){
    let resto = x % 11;
    if(resto == 2){
        console.log(x);
    }
    else{}
}