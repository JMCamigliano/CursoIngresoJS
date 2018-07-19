
function mostrar()
{
	var ancho;
	var largo;
	var resultado;

	ancho=prompt("Por favor, ingrese el ancho del rectángulo");
	largo=prompt("Por favor, ingrese el largo del rectángulo");

	/*ancho=document.getElementById('ancho').value;
	ancho=parseINT(ancho);
	largo=document.getElementById('largo').value;
	largo=parseINT(largo);*/

	resultado=(largo*ancho)*2;

	alert ("El perímetro del rectángulo es " + resultado);

}
