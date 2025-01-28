function recortar(numero, minimo, maximo) {
    if (numero<minimo) {
        return minimo;
    }
    else if(numero>maximo){
        return maximo;
    }
    else{
        return numero;
    }
};

console.log(recortar(15,0,10));