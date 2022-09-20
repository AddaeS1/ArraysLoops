const letras = ["A", "e", "B", "E", "L", "e"];
let letraE = 0;

for (let letra of letras) {
    if (letra === 'e'|| letra === 'E') {
        letraE++;
    }
}

console.log("Foram encontradas", letraE ,"caracteres E ou e no array .")