var value = localStorage.getItem('usuarioEncontrado');
var value2 = parseFloat(localStorage.getItem('saldoDisponible'));

document.getElementById('elegido').innerHTML = `Bienvenido ${value}`

function consultarSaldo(){
    document.getElementById('mostrar').innerHTML = `Tu saldo es de ${value2}`
}

function retirarDinero(){
    let retiro = parseFloat(prompt('¿Cuánto deseas retirar?'))
    value2 = value2 - retiro
    document.getElementById('mostrar').innerHTML = `Tu nuevo saldo es de ${value2}`
}

function depositarDinero(){
    let deposito = parseFloat(prompt('¿Cuánto deseas depositar?'))
    value2 = value2 + deposito
    document.getElementById('mostrar').innerHTML = `Tu nuevo saldo es de ${value2}`
}