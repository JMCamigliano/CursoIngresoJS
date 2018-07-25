function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var suma;
	var promedio;

	while(contador<5){

		numero=prompt ("Ingrese el siguiente numero");

		contador=contador+1

		acumulador=acumulador+contador

	}


	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;


}