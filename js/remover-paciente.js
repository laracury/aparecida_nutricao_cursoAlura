var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){

    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){ //executa a remoção após 500ms, ou 0.5s
        var alvoEvento = event.target; // Aqui removeria as Tds
        var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover
        paiDoAlvo.remove();
    },500); 

    //event.target.parentNode.remove() -> forma simplificada
});

// pacientes.forEach(function(paciente){
//      paciente.addEventListener("dblclick", function(){
//         console.log("Fui clicado com duplo clique");

//      });
// });