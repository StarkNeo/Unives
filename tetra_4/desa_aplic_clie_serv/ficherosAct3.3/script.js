let estados = document.getElementById('estado');
let estadosMexicanos = [
  "Aguascalientes",
  "Baja California",
  "Baja California Sur",
  "Campeche",
  "Chiapas",
  "Chihuahua",
  "Coahuila",
  "Colima",
  "Durango",
  "Guanajuato",
  "Guerrero",
  "Hidalgo",
  "Jalisco",
  "México",
  "Michoacán",
  "Morelos",
  "Nayarit",
  "Nuevo León",
  "Oaxaca",
  "Puebla",
  "Querétaro",
  "Quintana Roo",
  "San Luis Potosí",
  "Sinaloa",
  "Sonora",
  "Tabasco",
  "Tamaulipas",
  "Tlaxcala",
  "Veracruz",
  "Yucatán",
  "Zacatecas"
];
estadosMexicanos.forEach(element => {
  estados.innerHTML += `<option value=${element}>${element}</option>`;
});



const onSubmit = () => {
  let form = document.getElementById('formulario');
  let formData = new FormData(form);

  //Crear un objeto con las claves y valores del form
  let formObjeto = new Object();
  formData.forEach((valor, clave) => {
    formObjeto[clave] = valor;
  });

  
  let init = {
    method: 'POST',
    body: formData,
  };
  fetch("recibido.php", init)
    .then(response => response.text())
    .then(data => {
      let newPage = window.open();
      newPage.document.write(data);
      //console.log(data);
    })
    .catch(error => console.error(error));


}

/*
  let params =  new URLSearchParams();
  console.log(params);
  for (const element of formData.entries()) {
    params.append(element[0], element[1]);
  }
  window.open('recibido.php' + params.toString(), '_blank');

}*/

/*
const submit = (event) => {
    event.preventDefault();
    let formFields = document.getElementById('formulario');
    let submitbtn = document.querySelector("input[value=Enviar]");
    let formData = new FormData(formFields, submitbtn);
    let isEmpty = false;
    let body = new FormData(formFields);
    console.log(body);
    for (const [key, value] of formData) {
      
      if (value === '') {
        isEmpty = true;
        break;
      }
    }
    if (isEmpty) {
      alert("Formulario incompleto");
    }
    else{
      
      fetch("recibido.php",{
        method:"POST",
        body: new FormData(formFields)
      })
      .then(response=>{
        if(response.ok){
          console.log(body)
          formData.keys().forEach(element => {
            console.log(element);
          });
        }//window.location.href="recibido.php";
        else console.error("Envio fallo");
      })
      .catch(error=>console.error(error));
      
    }
  
  }
  let submitbtn = document.querySelector("input[value=Enviar]");
  submitbtn.addEventListener("click", submit);
  */