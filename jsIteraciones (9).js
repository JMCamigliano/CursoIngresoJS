function mostrar()
{

	var contador=0;
	var maximo;
	var minimo;
	var numeroIngresado;
	var respuesta='si';

	/*maximo=-999999
	minimo=999999*/

	while(respuesta!='no')
	{
		contador++;
		numeroIngresado = prompt ("Ingrese un valor");
		numeroIngresado = parseInt (numeroIngresado);

		if(contador==1){

			maximo=numeroIngresado
			minimo=numeroIngresado
		}
		else
		{
			if(numeroIngresado>maximo){

				maximo=numeroIngresado
			}

			if(numeroIngresado<minimo){

				maximo=numeroIngresado

			}
		}

	}

		respuesta=prompt ("Ingrese no, para salir");

	document.getElementById('numeroIngresado').value=maximo
}

/*Al presionar el botón pedir números hasta que el usuario quiera, mostrar el número máximo y el número mínimo.*/
