/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var resultado;

	sueldo=document.getElementById('sueldo').value;
	sueldo=parseInt(sueldo);

	resultado=sueldo*1.10;
	document.getElementById('resultado').value=resultado;
	


	/*
	
	50		100%
	x		10%

	=50*10/100

	Sueldo por 10 / 100
	
	Sueldo * 0,10

	Sueldo + Sueldo*0,10

		1		0,10

	=Sueldo * 1,10. Sacamos el 10% de aumento.

	Para un descuento de un 25%
	=Sueldo * 0,75


	*/
}
