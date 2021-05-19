let botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault()
    let form = document.querySelector("#form-adiciona")

   let paciente =  obtemPacienteDoFormulario(form)


    let pacienteTr = montaTr(paciente)

    if (!validaPaciente(paciente)){
        
    }

    let tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr)

    form.reset()

})
    function obtemPacienteDoFormulario(form) {

        let paciente = {
            nome: form.nome.value,
            peso: form.peso.value,
            altura: form.altura.value,
            gordura: form.gordura.value,
            imc: calculaImc(form.peso.value, form.altura.value)
        }
        return paciente
    }

    function montaTr(paciente){

    let pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente")

    

    let nomeTd = montaTd(paciente.nome,"nome-peso")
    let pesoTd = montaTd(paciente.peso,"info-peso")
    let alturaTd = montaTd(paciente.altura,"info-altura")
    let gorduraTd = montaTd(paciente.gordura,"info-gorduraTd")
    let imcTd = montaTd(paciente.imc,"info-imc")

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    return pacienteTr

    }

function montaTd(dado,classe) {
    let td = document.createElement("td")
    td.textContent =dado
    td.classList.add(classe)

    return td
}

    let pesoTd = document.createElement("td")
    let alturaTd = document.createElement("td")
    let gorduraTd = document.createElement("td")
    let imcTd = document.createElement("td")



    function validaPaciente (paciente){
        if (validaPeso(paciente.peso)){
            return true
        }else {
            return false
        }
    }