function Animal(){

}

function Manada(){
    this.animais = {};
}

Animal.prototype = {
    fazerBarulho: function(){
        return this.barulho;
    }
}

function Cachorro(){
    Animal.call(this);
    this.barulho = 'Au';
}

Cachorro.prototype = new Animal();

function Gato(){
    Animal.call(this);
    this.barulho='Miau';
}

Gato.prototype = new Animal();

cachorroPrototype = new Cachorro();
gatoPrototype = new Gato();

function Manada(){
    this.animais = [];
}

Manada.prototype = {
    adicionar: function(animal){
        this.animais.push(animal);
    }
};

function manadaVirgula(){
    Manada.call(this);

}

manadaVirgula.prototype = new Manada();
virgula = new manadaVirgula();

virgula.barulhos = function(){
        txt = '';
        for (i=0; i<this.animais.length; i++){
            txt += this.animais[i].fazerBarulho();
            if (i < this.animais.length - 1){
                txt += ', ';
            }
        }
        return txt;
}

function manadaSustenidaDupla(){
    Manada.call(this);
}

manadaSustenidaDupla.prototype = new Manada();
sustenidaDupla = new manadaSustenidaDupla();

sustenidaDupla.barulhos = function(){
        txt = '';
        for (i=0; i<this.animais.length; i++){
            txt += this.animais[i].fazerBarulho() + '# ' + this.animais[i].fazerBarulho() + '# ';
        }
        return txt;
}

var animais = [new Cachorro(), new Gato()];

animais.forEach(function (animal) {
  virgula.adicionar(animal);
  sustenidaDupla.adicionar(animal);
});

console.log(virgula.barulhos());
console.log(sustenidaDupla.barulhos());