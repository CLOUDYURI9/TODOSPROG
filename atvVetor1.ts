/*
1 – Faça dois vetores, um que contenha cada dia da semana,
o outro que contenha sete atividades/hobby. Crie uma frase
para cada dia da semana usando todos os índices dos dois vetores.
Nome: Yuri Dinato da Silva
*/

let meuArrayUm : string [] = [`Segunda-feira`, `Terça-feira`, `Quarta-feira`, `Quinta-feira`, `Sexta-feira`, `Sábado`, `Domingo`];
let meuArrayDois : string [] = [`Treinar`, `Dormir`, `Correr`, `Jogar`, `Estudar`, `Assitir`, `Ler livro`];

for(let x = 0; x <= 6; x++){
    console.log(`No(a) ${meuArrayUm[x]}, eu gosto de ${meuArrayDois[x]}`)
}

