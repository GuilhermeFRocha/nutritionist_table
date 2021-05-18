let pacientes = document.querySelectorAll(".paciente")

for (let i = 0; i < pacientes.length ; i++) {
var paciente1 = pacientes[i];
let p1 = paciente1.querySelector(".info-peso")
let a1 = paciente1.querySelector(".info-altura")
let imc1 = paciente1.querySelector(".info-imc")

let peso1 =(Number(p1.textContent));
let altura1 = (Number(a1.textContent));

let pesoEhValido = true
let alturaEhValido = true

if (peso1 <= 0 || peso1 >= 1000 ) { 
    pesoEhValido = false
    imc1.textContent = "Peso Invalido"
    paciente1.classList.add("paciente_invalido")
}else if (altura1 <= 0 || altura1 >= 3.00) {
    alturaEhValido = false
    imc1.textContent = "Altura Invalida"
    paciente1.classList.add("paciente_invalido")
}
else (alturaEhValido && pesoEhValido)
    let soma1 = peso1 / (altura1 * altura1)
    imc1.textContent = soma1.toFixed(2)
}

let botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault()
    let form = document.querySelector("#form-adiciona")
    let nome = form.nome.value
    let peso = form.peso.value
    let altura = form.altura.value
    let gordura = form.gordura.value

    let pacienteTr = document.createElement("tr")

    let nomeTd = document.createElement("td")
    let pesoTd = document.createElement("td")
    let alturaTd = document.createElement("td")
    let gorduraTd = document.createElement("td")

    nomeTd.textContent = nome
    pesoTd.textContent = peso
    alturaTd.textContent = altura
    gorduraTd.textContent = gordura

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)

  let tabela = document.querySelector("#tabela-pacientes")  
    tabela.appendChild(pacienteTr)
})


