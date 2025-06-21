const interface = require('readline-sync')

function sumar(num1,num2) {
    return num1+num2
}

function restar(num1,num2) {
    return num1-num2
}

function multiplicar(num1,num2) {
    return num1*num2
}

function dividir(num1,num2) {
    if(num2 === 0 ) return 'No se puede realizar division entre 0'
    return num1/num2
}


let response = ''
let numero1, numero2 = 0
do{
    console.log('1.- Suma')
    console.log('2.- Resta')
    console.log('3.- Muliplicacion')
    console.log('4.- Division')
    console.log('5.- Salir')
    response = parseInt(interface.question('Que operacion deseas realizar? '))
    switch (response) {
    case 1:
        numero1 = parseInt(interface.question('Capture el primer numero: '))
        numero2 = parseInt(interface.question('Capture el segundo numero: '))
        console.log(sumar(numero1,numero2))
        break;
    case 2:
        numero1 = parseInt(interface.question('Capture el primer numero: '))
        numero2 = parseInt(interface.question('Capture el segundo numero: '))
        console.log(restar(numero1,numero2))
        break;
    case 3:
        numero1 = parseInt(interface.question('Capture el primer numero: '))
        numero2 = parseInt(interface.question('Capture el segundo numero: '))
        console.log(multiplicar(numero1,numero2))
        break;
    case 4:
        numero1 = parseInt(interface.question('Capture el primer numero: '))
        numero2 = parseInt(interface.question('Capture el segundo numero: '))
        console.log(dividir(numero1,numero2))
        break;
    default:
        break;
}

} while(response !==5)
