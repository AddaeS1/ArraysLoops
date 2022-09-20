const numeros = [3, 4, 1, 8, 11, 7, 5];

const maiorValor = numeros.reduce(function(prev, current) { 
	return prev > current ? prev : current; 
});
    console.log(maiorValor);