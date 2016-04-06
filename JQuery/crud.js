var noticias = [];

function isDate(txtdate){
    var currval = txtdate;
    if(currval == ' ')
        return false;

    var rxDatePattern = /(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
    var dtArray = currval.match(rxDatePattern);

    if (dtArray == null)
        return false;

    dtDay = dtArray[1];
    dtMonth = dtArray[2];
    dtYear = dtArray[3];

    if (dtMonth < 1 || dtMonth >12)
        return false;
    else if (dtDay < 1 || dtDay > 31)
        return false;
    else if ((dtMonth == 4 || dtMonth ==6 || dtMonth == 9 || dtMonth == 11) && dtDay ==31)
        return false;
    else if (dtMonth == 2){
        var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear %  400 == 0));
        if (dtDay > 29 || (dtDay == 29 && !isleap))
            return false;
    }
    return true;
}

function noticia(id, assunto, mensagem, data){
    this.id = id;
	this.assunto = assunto;
	this.mensagem = mensagem;
	this.data = data;
}

function deletar(id){
	for (var i = 0;i<noticias.lenght;i++){
		if (i == id){
			noticias[i].remove;
			break;
		}
	}
	$("#u"+id).remove();
}

$(document).ready(function(){

  $("#addnoticia").click(function(){

    var assunto = document.getElementById("txtassunto").value;
	var mensagem = document.getElementById("txtmensagem").value;
	var data = document.getElementById("txtdata").value;

    var erro = 0;

    if (assunto.trim()==""){
	    $("#spassunto").show();
		erro++;
	}
	else{
	    $("#spassunto").hide();
	}
	if (mensagem.trim()==""){
		$("#spmensagem").show();
		erro++;
	}
	else{
	    $("#spmensagem").hide();
	}
    if (!isDate(data)){
	    $("#spdata").show();
	    erro++;
	}
	else{
	    $("#spdata").hide();
	}
    if (erro==0){
	    noticias.push(new noticia(assunto,mensagem,data));
		$("#tabela > tbody").append("<tr id = 'u"+(noticias.lenght-1)+"'><td>"+assunto+"</td> <td>"+mensagem+"</td> <td>"+data+"</td> <td><a onclick='deletar("+(noticias.lenght-1)+")'><span class='glyphicon glyphicon-trash'></span></a></td> </tr>");
		return false
	}
  });
  
});