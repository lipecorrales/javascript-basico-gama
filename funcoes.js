function soma(operadorA, operadorB) {
    var resultadoC = operadorA + operadorB;
    return resultadoC;
}

function olaGama(nome){
    console.log('Ola Gama! Você é o ' + nome);
}

var resultadoDaSoma = soma(1, 2);
var resultadodoNovoDaSoma   = soma(10, 66);

console.log(resultadoDaSoma);
console.log(resultadodoNovoDaSoma);

var resultado = olaGama('Philippe');