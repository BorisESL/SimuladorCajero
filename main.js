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
    alert("Su saldo actual es $ " + saldo);
}

function retirarDinero() {
    let monto = parseFloat(prompt("Ingrese monto a retirar"));
    if (monto <= 0 || (isNaN(monto))) {
        alert("Monto inválido. Favor ingrese un monto válido")
    } else if (monto > saldo) {
        alert("Saldo insuficiente")
    } else {
        saldo -= monto;
        alert("Retiro exitoso. Su saldo actual es de :" + saldo);
    }
}

function depositarDinero() {
    let monto = parseFloat(prompt("Ingrese monto a depositar"));
    if (monto <= 0 || (isNaN(monto))) {
        console.log("monto inválido. Favor ingrese un monto valido");
    } else {
        saldo += monto;
        alert("Depósito exitoso. Su saldo actual es de : " + saldo);
    }
}

function cajeroAutomatico() {
    if (validarPin()) {
        for (let continuar = true; continuar;) {
            let opcion = prompt("Seleccione una opcion:\n1. consultar saldo.\n2. retirar dinero.\n3.depositar dinero.\n4. salir ");

            switch (opcion) {
                case "1":
                    consultarSaldo();
                    break;
                case "2":
                    retirarDinero();
                    break;
                case "3":
                    depositarDinero();
                    break;
                case "4":
                    alert("Gracias por usar nuestro cajero. ¡Hasta Pronto!");
                    continuar = false;
                    break;
                default:
                    alert("Opcion inválida. Por favor, intente nuevamente");
            }
        }
    } else {
        alert("Ha excedido el número de intentos. Contactese con el banco ");
    }
}

cajeroAutomatico();