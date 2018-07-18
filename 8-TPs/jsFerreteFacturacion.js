/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 

{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var resultado;

	PrecioUno=document.getElementById('PrecioUno').value;
	PrecioUno=parseInt(PrecioUno);
	PrecioDos=document.getElementById('PrecioDos').value;
	PrecioDos=parseInt(PrecioDos);
	PrecioTres=document.getElementById('PrecioTres').value;
	PrecioTres=parseInt(PrecioTres);

	resultado=PrecioUno+PrecioDos+PrecioTres;

	alert (resultado);
	
}


function Promedio () 

{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var resultado;

	PrecioUno=document.getElementById('PrecioUno').value;
	PrecioUno=parseInt(PrecioUno);
	PrecioDos=document.getElementById('PrecioDos').value;
	PrecioDos=parseInt(PrecioDos);
	PrecioTres=document.getElementById('PrecioTres').value;
	PrecioTres=parseInt(PrecioTres);

	resultado=((PrecioUno+PrecioDos+PrecioTres) / 3);

	alert (resultado);
		
}

function PrecioFinal () 

{	
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var resultado;
	var resultadoconIVA;

	PrecioUno=document.getElementById('PrecioUno').value;
	PrecioUno=parseInt(PrecioUno);
	PrecioDos=document.getElementById('PrecioDos').value;
	PrecioDos=parseInt(PrecioDos);
	PrecioTres=document.getElementById('PrecioTres').value;
	PrecioTres=parseInt(PrecioTres);

	resultado=PrecioUno+PrecioDos+PrecioTres;
	resultadoconIVA=resultado*1.21

	alert (resultadoconIVA);	
}