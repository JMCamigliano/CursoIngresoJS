/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var Largo;
	var Ancho;
	var Radio;

	var cantidad;

	Largo=document.getElementById('Largo').value;
	Largo=parseInt(Largo);
	Ancho=document.getElementById('Ancho').value;
	Ancho=parseInt(Ancho);
	Radio=document.getElementById('Radio').value;
	Radio=parseInt(Radio);

	cantidad=Largo*Ancho*3;

	alert(cantidad);
}

function Circulo () 

{	
	var Largo;
	var Ancho;
	var Radio;

	var cantidad;

	Largo=document.getElementById('Largo').value;
	Largo=parseInt(Largo);
	Ancho=document.getElementById('Ancho').value;
	Ancho=parseInt(Ancho);
	Radio=document.getElementById('Radio').value;
	Radio=parseInt(Radio);
	
	cantidad=3.14*Radio*Radio;

	alert(cantidad);

}

function Materiales () 
{
	var Largo;
	var Ancho;
	var Radio;
	var cemento;
	var cal;

	Largo=document.getElementById('Largo').value;
	Largo=parseInt(Largo);
	Ancho=document.getElementById('Ancho').value;
	Ancho=parseInt(Ancho);
	Radio=document.getElementById('Radio').value;
	Radio=parseInt(Radio);
	
	cantidadCemento=(Largo*Ancho)*2;
	cantidadCal=(Largo*Ancho)*3;

	alert("Se necesitan " +cantidadCemento+ " bolsas de cemento y " +cantidadCal+ " bolsas de cal." );
}