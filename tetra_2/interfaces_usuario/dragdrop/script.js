function recoger(e) {
    e.dataTransfer.setData('image',this.src);
    e.dataTransfer.effectAllowed = 'move';
}

function arrastrar(e) {
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function soltar(e) {
    let imagen = new Image();
    imagen.className='fruit';
    imagen.src= e.dataTransfer.getData('image');
    document.getElementById('cesta').appendChild(imagen);
}

document.getElementById('platano').ondragstart = recoger;
document.getElementById('fresa').ondragstart = recoger;
document.getElementById('pera').ondragstart = recoger;
document.getElementById('cesta').ondragover = arrastrar;
document.getElementById('cesta').ondrop=soltar;