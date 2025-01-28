
// Array con numeros
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

//Funcion callback que filtra los numeros
function filtro(x) {
    return x>=0?console.log(x):null;
}
// Llamamos a la funcion removeNeg con un callback
const posNumbers = removeNeg(myNumbers, filtrar);

// La funcion retorna solo los numeros positivos de una serie de numeros
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}