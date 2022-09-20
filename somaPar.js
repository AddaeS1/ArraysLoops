const numeros = [1, 4, 12, 21, 53, 88, 112];
let soma = 0 ;

for (let valores of numeros) {
    if (valores % 2 == 0) {
         soma += valores;
          }
    }      

 console.log(soma);
            