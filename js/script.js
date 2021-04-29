let paciente1 = document.querySelector("#primeiro-paciente")
let p1 = paciente1.querySelector(".info-peso")
let a1 = paciente1.querySelector(".info-altura")
let imc1 = paciente1.querySelector(".info-imc")

let peso1 =(Number(p1.textContent));
let altura1 = (Number(a1.textContent));

let pesoEhValido = true
let alturaEhValido = true




if ((peso1 <= 0) || (peso1 >= 1000) ) {
    
    pesoEhValido = false
    imc1.textContent = "Peso Invalido"
}else if (altura1 <= 0 || altura1 >= 3.00) {

    alturaEhValido = false
    imc1.textContent = "Altura Invalida"
}

else (alturaEhValido && pesoEhValido)
    let soma1 = peso1 / (altura1 * altura1)
    imc1.textContent = soma1.toFixed(2)









