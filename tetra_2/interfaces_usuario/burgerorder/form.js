let listaHamburguesas = []
let pedido = {
    cliente: "",
    alimentos: '',
};

const validarForm = () => {
    let campos = document.forms["pedidos"]
    if (campos.nombre === ' ') {
        alert("Campos vacios")
    }
}

validarForm();

const cliente = (nombre, direccion, telefono, email) => {
    return {
        "nombre": nombre,
        "direccion": direccion,
        "telefono": telefono,
        "email": email
    }
}

const addProduct = () => {
    let form = document.getElementById('burger');
    let formulario = new FormData(form)
    let hamburguesa = {
        "tipo de carne": '',
        "cantidad": '',
        "coccion": '',
        "ingrediente": [],
        "queso": '',
        "tipo-queso": '',
        "pan": '',
        "aderezo": [],
        "extra": ''
    }
    for (const [key, value] of formulario) {
        if (key === 'ingrediente') {
            hamburguesa[key].push(value)
        }
        else if (key === 'aderezo') {
            hamburguesa[key].push(value)
        }
        else if(key === 'tipo-queso'){
            hamburguesa['queso'] === 'Si'? hamburguesa[key]=value:hamburguesa[key]='';
        }
        else {
            hamburguesa[key] = value
        }

    }
    listaHamburguesas.push(hamburguesa)
    verPedido()
}

//ABRIR FORMULARIO HAMBURGUESA
const openForm = () => {
    document.getElementById('burger').style.display = 'flex'
}

//MOSTRAR PEDIDO
const verPedido = () => {
    let miPedido = document.getElementById('mi-pedido');
    miPedido.innerHTML='';
    let numero = 0
    listaHamburguesas.forEach(element => {
        numero+=1
        let head = document.createElement('div');
        head.className='element-head';
        let control = document.createElement('p');
        control.className='control'
        control.innerHTML=numero
        let btnEliminar = document.createElement('button');
        btnEliminar.className='btn-eliminar-elemento'
        btnEliminar.innerHTML='Eliminar';
        head.appendChild(control);
        head.appendChild(btnEliminar);
        let elemento = document.createElement('div');
        elemento.className='elemento'
        elemento.appendChild(head)
        
        for (const key in element) {
            
            elemento.innerHTML+=`${key}: ${element[key]}<br>`    
        }
        miPedido.appendChild(elemento)
     }
        
    );
}

//activa boton queso
document.getElementById('cheese').addEventListener('click',(e)=>{
    let seccionQueso = document.getElementById('cheese-type');
    if (e.target.value === 'Si') {
        seccionQueso.style.display='flex';
    }
    
    else{
        seccionQueso.style.display='none';
    }
})