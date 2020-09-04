var botaoAdd = document.querySelector("#buscar-pacientes")

botaoAdd.addEventListener("click", function (){
    var xhr = new XMLHttpRequest()

    xhr.open("GET" , "https://api-pacientes.herokuapp.com/pacientes")
    
    xhr.addEventListener("load", function() {

        

            var resposta = xhr.responseText
            var pacientes = JSON.parse(resposta)
            
            for( var i = 0; i < pacientes.length; i++) {
                adicionaPacienteTabela(pacientes[i])
            }


        
    })
    xhr.send()
})