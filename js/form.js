var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    // pega as informações dos pacientes do form 
    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);

    if(erros.length > 0 ){
        exibeMensagensDeErro(erros);
        return;
    }
    
    adicionaPacienteNaTabela(paciente);

    form.reset(); //Limpa os campos após enviar os dados para tabela
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});


function adicionaPacienteNaTabela(paciente){
    // cria a Tr e a Td dos pacientes 
    var pacienteTr = montaTr(paciente);

    //adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");

    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente){
    // cria a Tr e a Td dos pacientes 
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente"); //adiciona uma classe

    //colocando as td como filhos de tr e criando as tr
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr

}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){
    
    var erros = [];
    
    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco!");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("O peso é inválido!"); 
    }
        
    if(!validaAltura(paciente.altura)) erros.push("Altura é inválida!"); //forma simplificada de uma linha

    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco!");
    }

    if(paciente.peso.length == 0){
        erros.push("O peso não pode estar vazio!");
    }

    if(paciente.altura.length == 0){
        erros.push("A altura não pode estar vazia!");
    }
   
    return erros;
}

