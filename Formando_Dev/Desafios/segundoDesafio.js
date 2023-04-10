    //Faça um Programa usando  variaveis
    //Para calcular o preço do combustível gasto em uma viagem
    //E o tipo de Combustivel
    
    const precoEtanol = 5.79;
    const precoGasolina = 6.59; 
const kmPorLitros = 8;
   const distanciaEmKm = 121;
    const tip01 = "Gasolina";
     const tip02 = "Etanol";
     
     const litrosConsumidos = distanciaEmKm / kmPorLitros


     let perg = prompt ('Digite Gasolina, Etanol');
console.log(perg);
//O Comando prompt funciona no navegador
// Para fazer uma pergunta para o usuario.
//Para usar basta abrir uma aba no navegador e apertar a tecla F12, e em console rodar o codigo.
if (perg === tip01){
const valorGastos = litrosConsumidos * precoGasolina;
console.log(valorGastos.toFixed(2));
}

else {
const valorGastos = litrosConsumidos * precoEtanol; 
console.log(valorGastos.toFixed(2));
}

