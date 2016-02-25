/**
 * Created by Jonathan on 25/02/2016.
 */
function imprimir(){
    console.log("Imprimindo");
}

function decorator(func){
    var cont=0;
    function funcDecorator(){
        console.log(cont);
        func();
        ++cont;
    }
    return funcDecorator();
}

var imprimirDecorator = decorator(imprimir);

imprimirDecorator();
imprimirDecorator();
imprimirDecorator();