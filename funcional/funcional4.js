/**
 * Created by Jonathan on 02/03/2016.
 */
function gerarListener() {
    var obj = {cont:0};
    var observers = [];

    obj.addObserver = function(obs){
        observers.push(obs);
    };

    obj.executar = function () {
        obj.cont++;
        for (var i=0; i<observers.length; i++){
            observers[i](obj); // executa funcoes em [observers]
        }
    };

    return obj;

}

var instancia = gerarListener();

var func1 = function(evento){
    console.log("Executando Funcao 1 - Contador: " + evento.cont);
};

var func2 = function(evento){
    console.log("Executando Funcao 2 - Contador: " + evento.cont);
};

instancia.addObserver(func1);
instancia.addObserver(func2);

instancia.executar();
instancia.executar();
instancia.executar();
instancia.executar();