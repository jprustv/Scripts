$(document).ready(function(){
    var $cabecalhos = $('h1');
    var $elementosComFilhos=$('.filhos');
    var filhosCount=0;

    $('#esconder').click(function(event){
        console.log(event);
        $cabecalhos.hide();
    });

    $('#mostrar').click(function(event){
        console.log(event);
        $cabecalhos.show();
    });

    $('#slide-up').click(function(event){
        console.log(event);
        $cabecalhos.slideUp();
    });

    $('#slide-down').click(function(event){
        console.log(event);
        $cabecalhos.slideDown();
    });

    $('#slide-toggle').click(function(event){
        console.log(event);
        $cabecalhos.slideToggle();
    });

    $('#remover').click(function(event){
        console.log(event);
        $elementosComFilhos.empty();
    });

    $('#adicionar').click(function(event){
        console.log(event);
        filhosCount++;
        $elementosComFilhos.append('<h1>Filho ' + filhosCount +  '</h1>')
    });

});