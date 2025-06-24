const buttons = document.querySelectorAll('input[type="button"]')
console.log(buttons)
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        calcular(btn)
    })
})

function calcular(btn) {

    let rawa = document.getElementById('operando1').value ? document.getElementById('operando1').value : 0
    let rawb = document.getElementById('operando2').value ? document.getElementById('operando2').value : 0
    
    let a = /^\d+$/.test(rawa)
    let b = /^\d+$/.test(rawb)
    let res
    if (a && b) {
        switch (btn.id) {
        case "suma":
            console.log("sumar")
            res = parseInt(rawa) + parseInt(rawb)
            break;
        case "resta":
            console.log("resta")
            res = parseInt(rawa) - parseInt(rawb)
            break
        case "multiplicacion":
            console.log("multiplicacion")
            res = parseInt(rawa) * parseInt(rawb)
            break
        case "division":
            if (b === 0) {
                alert("No se puede dividir entre cero")
                res = 0
            } else {
                console.log("division")
                res = parseInt(rawa) / parseInt(rawb)
            }

            break
        default:
            break;
    }
    } else {
        res = 0
    }   
    

    document.getElementById('resultado').value = parseInt(res)
}
