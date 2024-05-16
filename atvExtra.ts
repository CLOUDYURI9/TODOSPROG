const teclado = require(`prompt-sync`)();

let array1: number[] = new Array();
let array2: number[] = new Array();
let sumArray: number[] = [];
let total: number= 0;

for(let x = 0; x <=3; x++){
    array1[x]= parseInt(teclado(`Digite o valor do indice ${x} do primeiro array: `));
    array2[x]= parseInt(teclado(`Digite o valor do indice ${x} do segundo array: `)); 
}

for (let i = 0; i <= 3; i++) {
  sumArray[i] = array1[i] + array2[i];
}
for(let o = 0; o <= 3; o++){
    total += sumArray[o]

}

console.log(`Array 1: ${array1}`);
console.log(`Array 2: ${array2}`);
console.log(`Array resultante da soma: ${sumArray}`);
console.log(`A soma de todos os arrays é ${total}`);