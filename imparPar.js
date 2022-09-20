//separar impar de par
const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numeros of original) {
    if (numeros % 2 == 0) {
         console.log("Os seguintes numeros são pares:" ,numeros);
            ;
               }
            }


            for (let numeros of original) {
                if (numeros % 2 == 1) {
                     console.log("Os seguintes numeros são impares:" ,numeros);
                        ;
                           }
                        }