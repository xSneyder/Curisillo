'use strict';

//Pedir datos
let operando1, operando2, operacion,resultado;

function pedirDatos() {

operando1 = +prompt ('Operando 1')
operacion = prompt ('Operación')
operando2 = +prompt ('Operando 2')
}
//Hacer el calculo
function hacerCalculo() {
switch(operacion) {
    case '+': return operando1 + operando2;
    case '-': return operando1 + operando2;
    case '*': return operando1 + operando2;
    case '/': return operando1 + operando2;
    default: throw 'NO se conoce esa operación';
    }
}
//Mostrar el resultado

function mostrarResultado() {
    console.log('El resultado de' ${operando1} ${operacion} ${operando2} = ${resultado})
}

pedirDatos();
resultado = hacerCalculo();
mostrarResultado();
