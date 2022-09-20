var arr = [8, 11, 4, 1];
var min = Math.min(...arr);
var max = Math.max(...arr);

console.log("O menor numero do array é:" ,min); 
console.log("O maior numero do array é:" ,max); 

diferencaMinMax = max - min;
console.log("A diferença entre o maior e o menor é :", diferencaMinMax);