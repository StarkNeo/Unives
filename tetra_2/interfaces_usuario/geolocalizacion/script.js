const iniciar =()=>{
    let boton =  document.getElementById('obtener');
    boton.addEventListener('click',obtener, false);
};

const obtener = ()=>{
    navigator.geolocation.getCurrentPosition(mostrar, errores);

}

const mostrar =(posicion)=>{
    let ubicacion =  document.getElementById('ubicacion');
    console.log(posicion)
    let datos = '';
    datos+='Latitud: '+posicion.coords.latitude+'<br>';
    datos+='Longitud: '+posicion.coords.longitude+'<br>';
    datos+='Exactitud: '+posicion.coords.accuracy+'mts.<br>';
    ubicacion.innerHTML=datos;
}

function errores(error) {
    alert('Error: '+error.code+' '+error.message)
}

window.addEventListener('load',iniciar, false)