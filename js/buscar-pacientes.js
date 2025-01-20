var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){

    var xhr = new XMLHttpRequest();

    xhr.open("GET","https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");

        if(xhr.status == 200){ //200 mostra que está tudo certo com a requisição
            erroAjax.classList.add("invisivel");
            var resposta =  xhr.responseText;

            var pacientes = JSON.parse(resposta);

            pacientes.forEach( function(paciente){
                adicionaPacienteNaTabela(paciente);
            })
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }
    });
    xhr.send();

});
