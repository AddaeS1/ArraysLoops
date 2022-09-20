//imprimir numeros > 10 <20 e > 100
const original = [5, 7, 10, 13, 17, 21, 26, 34, 100, 118, 245];


for(let numeros of original){
    if(numeros > 10 ){
        console.log(numeros)    
    }else
        if(numeros < 20){
            console.log(numeros)
            }else{
                break;
            }

        }
