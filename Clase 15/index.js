
let nombre = document.getElementById("nombre").value;
const div1 = document.querySelector("#contenedorOne");
const boton = document.getElementById("agregar");


console.log(nombre);


boton.addEventListener("click", function(){
    div1.append(nombre + " ");


}) 


