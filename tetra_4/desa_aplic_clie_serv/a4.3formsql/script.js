
let nombre, correo;
//Manejo del GET REQUEST
let formAct = document.getElementById("formAct1");
formAct.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = new FormData(event.target);
  nombre = formData.get("actnombre");
  correo = formData.get("actmail");

  fetch(`crud.php?nombre=${nombre}&correo=${correo}`)
    .then(response => response.json())
    .then(data => {
      //Manejar la respuesta de PHP
      document.getElementById("newmail").value = data.correo;
      document.getElementById("newaddress").value = data.direccion;
      document.getElementById("newphone").value = data.telefono;
      document.getElementById("newmarital").value = data.edocivil;
      document.getElementById("newstate").value = data.estado;

    })
    .catch(error => {
      console.error(error)
    });
});

//Manejo del PUT REQUEST
let formAct2 = document.getElementById("formAct2");
formAct2.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = new FormData(event.target);
  formData.append("nombre", nombre);
  formData.append("correo", correo);
  // Display the keys
  for (const key of formData.keys()) {
    console.log(key);
  }
  for (const value of formData.values()) {
    console.log(value);
  };

  fetch("crud.php", {
    method: "POST",
    body: formData,
  })
    .then(response => response.json())
    .then(data => {
      alert("El registro fue actualizado");
      window.location.reload(true);
    })
    .catch(error => console.error(error))
});

//Manejo del DELETE REQUEST
document.getElementById("borrar").addEventListener("click",()=>{
  fetch("crud.php",{
    method:"DELETE",
    headers:{
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({nombre:nombre,correo:correo})
  })
  .then(response=>response.json())
  .then(data=>{
    alert("El registro fue borrado")
  })
  .catch(error=>console.error(error));
  
})

//Logica del menu de opciones tipo acordeon

document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none"; // Ocultar si está visible
    } else {
      // Ocultar todos los contenidos primero
      document.querySelectorAll('.accordion-content').forEach(c => c.style.display = "none");
      content.style.display = "block"; // Mostrar solo el seleccionado
    }
  });
});

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

