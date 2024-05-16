var teclado = require("prompt-sync")();
var array1 = new Array();
var array2 = new Array();
var sumArray = [];
var total = 0;
for (var x = 0; x <= 3; x++) {
    array1[x] = parseInt(teclado("Digite o valor do indice ".concat(x, " do primeiro array: ")));
    array2[x] = parseInt(teclado("Digite o valor do indice ".concat(x, " do segundo array: ")));
}
for (var i = 0; i <= 3; i++) {
    sumArray[i] = array1[i] + array2[i];
}
for (var o = 0; o <= 3; o++) {
    total += sumArray[o];
}
console.log("Array 1: ".concat(array1));
console.log("Array 2: ".concat(array2));
console.log("Array resultante da soma: ".concat(sumArray));
console.log("A soma de todos os arrays \u00E9 ".concat(total));
