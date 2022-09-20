//imprimir nomes com a letra a ou A
let nomes = ['Ana', 'Joana', 'Carlos', 'amanda', 'xixu', 'roxono','berenice','bridget'];

let nomesComAmi = nomes.filter(nome => nome.charAt(0) == "a" ) ;
console.log(nomesComAmi);

let nomesComAMa = nomes.filter(nome => nome.charAt(0) == "A" );
console.log(nomesComAMa);