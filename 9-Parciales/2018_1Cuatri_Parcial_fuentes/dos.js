/*
Tomar los datos de los cuadros de texto y formar la frase: "Yo soy XXXX, vivo en la localidad de XXX y estudio en la UTN"

*/

function mostrar()


{
  	var nombre;
  	var localidad;

  	nombre=document.getElementById('elNombre').value;
  	localidad=document.getElementById('laLocalidad').value;

  	alert ("Mi nombre es " +nombre+ ", vivo en la localidad de " +localidad+ " y estudio en la UTN.");

}
