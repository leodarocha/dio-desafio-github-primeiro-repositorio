const numero = 0;
const numeroDivisivel = (numero % 2) === 0;

console.log (numeroDivisivel);

if (numero === 0){
    console.log('o número é inválido');
} else if (numeroDivisivel){
    console.log('sim');
} else {
    console.log('não');
}

