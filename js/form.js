var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#addForm")
    var paciente = obtemPacienteForm(form);
    
    

    var erros = validaPaciente(paciente)
    if(erros.length > 0) {
        exibeMensagemErro(erros)
        return
    }
    adicionaPacienteTabela(paciente)

    form.reset()
    var mensagensErro = document.querySelector("ul")
    mensagensErro.innerHTML = ""
     

})

function adicionaPacienteTabela(paciente) {
    var pacienteTR = montaTR(paciente)
    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTR)
}



function exibeMensagemErro(erros) {
    var ul = document.querySelector("#mensagens-erro")
    ul.innerHTML = ""
    erros.forEach(function(erro) {
        var li = document.createElement("li")
        li.textContent = erro 
        ul.appendChild(li)
    })
    
}
function obtemPacienteForm(form) {

    var paciente = {
        nome: form.nome.value, 
        peso: form.peso.value, 
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente; 

}
function montaTR(paciente) {
    var pacienteTR = document.createElement("tr") 
    pacienteTR.classList.add("paciente")


    pacienteTR.appendChild(montaTD(paciente.nome, "info-nome"));
    pacienteTR.appendChild(montaTD(paciente.peso, "info-peso"));
    pacienteTR.appendChild(montaTD(paciente.altura, "info-altura"));
    pacienteTR.appendChild(montaTD(paciente.gordura, "info-gordura"));
    pacienteTR.appendChild(montaTD(paciente.imc, "info-imc")); 
    return pacienteTR
}


function montaTD(dado, classe) {
    var td = document.createElement("td")
    td.textContent = dado 
    td.classList.add(classe)
    return td 
}
function validaPaciente(paciente){
    var erros = []
    if(!validaPeso(paciente.peso)){
        erros.push("Peso é inválido")
    }
  
    if(!validaAltura(paciente.altura)) {
        erros.push("Altura inválida")
    }
    if(paciente.nome.length <= 0) {
        erros.push("Nome inválido")
    }
    if(paciente.gordura.length <=0) {
        erros.push("Sem valor para a gordura")
    }
  
    return erros
}