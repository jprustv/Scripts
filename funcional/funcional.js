/**
 * Created by Jonathan on 25/02/2016.
 */
function f(func){
    console.log("Executando f");
}

console.log(f);
var g=f;
f=1;
console.log(g);
g();

function h(func){
    function nova(x){
        return func(x+1);
    }
    return nova;
}

function reta(x){
    return x;
}

var shift=h(reta);
console.log(shift);
console.log(shift());