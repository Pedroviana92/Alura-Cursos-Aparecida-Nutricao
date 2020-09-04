var titulo = document.querySelector(".titulo_principal");
titulo.textContent = "Aparecida Educação Alimentar";

var paciente = document.querySelectorAll(".paciente")
console.log(paciente)

for( var i = 0; i < paciente.length; i++) {
    var pesoPessoa = paciente[i].querySelector(".info-peso")
    var peso = pesoPessoa.textContent
    var altura = paciente[i].querySelector(".info-altura")
    var alturaPessoa = altura.textContent
    var imc = paciente[i].querySelector(".info-imc")
    var pesoValido = validaPeso(peso)
    var alturaValida = validaAltura(alturaPessoa)

    if(!pesoValido) {
        pesoValido = false
        imc.textContent = "Peso Inválido!"
        paciente[i].classList.add("paciente-invalido")

    }
    if(!alturaValida) {
        alturaValida = false
        imc.textContent = "Altura Inválida!"
        paciente[i].classList.add("paciente-invalido")
    }
    if(pesoValido && alturaValida) {
        valorIMC = calculaImc(peso, alturaPessoa)
    var imc = paciente[i].querySelector(".info-imc")
    imc.textContent = valorIMC

    }
    
}
function calculaImc(peso, altura) {
    var imc;
    imc = (peso / (altura * altura)).toFixed(2);
    return imc;
}
function validaPeso(peso) {
    if(peso > 0 && peso < 1000){
        return true
    }
    else {
        return false
    }
}
function validaAltura(altura) {
    if(altura > 0 && altura < 3.00) {
        return true
    }
    else {
        return false
    }
    
}



