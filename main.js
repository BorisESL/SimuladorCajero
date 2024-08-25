const pinCorrecto = "1234";
let saldo = 5000;
let intentos = 3;

function validarPin() {
    while (intentos > 0) {
        let pin = prompt("Ingrese su Pin de 4 numeros :");
        if (pin === pinCorrecto) {
            return true;
        } else {
            intentos--;
            alert("Pin incorrecto. Usted tiene " + intentos + " intentos restantes.");
        }
    }
    return false;
}

function consultarSaldo() {
    alert ("Su saldo actual es $ " + saldo);
}

function retirarDinero() {
    let monto = parseFloat(prompt("Ingrese monto a retirar"));
    if (monto <= 0 || (isNaN(monto) )) {
       console.log("Monto inválido. Favor ingrese un monto válido")
    } else if (monto <= 0) { 
        console.log("Saldo insuficiente")
    } else {
        saldo -= monto;
        console.log("Retiro exitoso. Su saldo actual es de :" + saldo);
    }
}

function depositarDinero() {
    let monto = parseFloat(prompt("Ingrese monto a depositar"));
    if (monto <= 0 || (isNaN(monto))) {
        console.log("monto inválido. Favor ingrese un monto valido");
    } else {
        saldo += monto;
        console.log("Depósito exitoso. Su saldo actual es de : " + saldo);
    }
}

function cajeroAutomatico () {
    
}