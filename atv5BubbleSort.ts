
const teclado = require(`prompt-sync`)();
function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
let meuArrayTres : number []= new Array(9);
for (let x = 0; x <= 9; x++) {
    meuArrayTres[x] = parseInt(teclado(`Digite o número do índice ${x}: `));
    }
let crescente = bubbleSort(meuArrayTres);
console.log('Números ordenados em ordem crescente:', crescente);
