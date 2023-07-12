
let nombre = document.getElementById("nombre").value;
const div1 = document.querySelector("#contenedorOne");
const boton = document.getElementById("agregar");


console.log(nombre);


boton.addEventListener("click", function(){
    div1.append(nombre + " ");
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'tuki',
        background: '#fff5ee',
        showConfirmButton: false,
        timer: 1500
      })
    
  
 
}) 

/** 
const divElement = document.createElement("div");
divElement.textContent="hola";
divElement.style.color="red";
divElement.id="ElemId"



const itemNombre = document.createElement(nombre);
itemNombre.style.color="red";
itemNombre.id="Juan"
div1.appendChild(itemNombre);


setTimeout(function(){
   let elementDelete = div1.querySelector("itemNombre");
   div1.removeChild(elementDelete)
}, 3000);

*/


