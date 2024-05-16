/*
1 – Faça dois vetores, um que contenha cada dia da semana,
o outro que contenha sete atividades/hobby. Crie uma frase
para cada dia da semana usando todos os índices dos dois vetores.
*/
var meuArrayUm = ["Segunda-feira", "Ter\u00E7a-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "S\u00E1bado", "Domingo"];
var meuArrayDois = ["Treinar", "Dormir", "Correr", "Jogar", "Estudar", "Assitir", "Ler livro"];
for (var x = 0; x <= 6; x++) {
    console.log("No(a) ".concat(meuArrayUm[x], ", eu gosto de ").concat(meuArrayDois[x]));
}
