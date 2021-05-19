let pacientes = document.querySelectorAll(".paciente")

for (let i = 0; i < pacientes.length ; i++) {
var paciente1 = pacientes[i];
let p1 = paciente1.querySelector(".info-peso")
let a1 = paciente1.querySelector(".info-altura")
let imc1 = paciente1.querySelector(".info-imc")

let peso =(Number(p1.textContent));
let altura = (Number(a1.textContent));

let pesoEhValido = validaPeso(peso)
let alturaEhValido = validaAltura(altura)

if (!pesoEhValido ) { 
    pesoEhValido = false
    imc1.textContent = "Peso Invalido"
    paciente1.classList.add("paciente_invalido")
}else if (!alturaEhValido) {
    alturaEhValido = false
    imc1.textContent = "Altura Invalida"
    paciente1.classList.add("paciente_invalido")
}
else (alturaEhValido && pesoEhValido)
    let imc = calculaImc(peso,altura)
    imc1.textContent = imc
}


function validaPeso(peso){
    if (peso >= 0 && peso <1000){
        return true
    } else {
        return false
    }
}

function validaAltura(altura){
    if (altura >= 0 && altura <= 3.0){
        return true
    } else {
        return false
    }

}

function calculaImc (peso,altura) {

    let imc= 0
    imc = peso / (altura * altura)
    return imc.toFixed(2)
}


