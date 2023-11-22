let saldoDisponible = 0;
let usuarioEncontrado = '';

function usuario(){
    let usuarios = document.getElementById('usuario').value;
    let contraseña = document.getElementById('contraseña').value;
    if(usuarios == cuentas[0].nombre && contraseña == cuentas[0].contraseña){
        saldoDisponible = saldoDisponible + 500;
        usuarioEncontrado = 'Maximiliano';
        localStorage.setItem('usuarioEncontrado', 'Maximiliano');
        localStorage.setItem('saldoDisponible', saldoDisponible);
        window.open('ATM.html');

    }else if(usuarios == cuentas[1].nombre && contraseña == cuentas[1].contraseña){
        saldoDisponible = saldoDisponible + 550;
        usuarioEncontrado = 'Leonardo';
        localStorage.setItem('usuarioEncontrado', 'Leonardo');
        localStorage.setItem('saldoDisponible', saldoDisponible);
        window.open('ATM.html');
        
    }else if(usuarios == cuentas[2].nombre && contraseña == cuentas[2].contraseña){
        saldoDisponible = saldoDisponible + 1000;
        usuarioEncontrado = 'Saira'
        localStorage.setItem('usuarioEncontrado', 'Saira');
        localStorage.setItem('saldoDisponible', saldoDisponible);
        window.open('ATM.html');
    }else{
        alert('Error')
    }
}








