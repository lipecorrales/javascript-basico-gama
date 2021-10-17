//var numeroSorteado = 10;
//
//var tabuada = 7;
//
//for(var i = 0; i < 11; i++) {
//    console.log('Valor de ' + tabuada + ' x ' + i + ' = ' + tabuada * i);
//}

var achou = false;

var numeroSorteado = 10;
var possivelValor = 0;

while (!achou) {
    possivelValor += 1;
    if (numeroSorteado === possivelValor){
        achou = true;
    } else {
        console.log('Possivel valor não corresponde ao numero sorteado' + possivelValor);
    }
    
}