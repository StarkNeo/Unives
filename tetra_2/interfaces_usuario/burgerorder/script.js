
setTimeout(()=>{
    document.getElementById('confirmacion').innerHTML="Tu pago ha sido procesado!"
    document.getElementById('datos-pedido').innerHTML=`To orden es la numero 1000 y se estara enviando a tu domicilio en maximo 20 minutos`
    let order = document.getElementById('your-order');
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams)
    urlParams.forEach((value, key)=>{
        order.innerHTML+=`<li>${key}: ${value}</li>`;
    });
    
    
    
},10000)

function getBack() {
    window.location.assign('./form.html')
    
}

