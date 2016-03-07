/**
 * Created by Jonathan on 02/03/2016.
 */
var cont=1;
function botaoImprimir(){
    console.log(cont + " - Imprimindo..");
    cont++;
}

var obj={nome: "Johnny"};

obj.cumprimentar = function(){
    return "Olá, meu nome é "+ obj.nome;
}

console.log(obj.cumprimentar());