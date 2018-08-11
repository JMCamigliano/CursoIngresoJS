function mostrar()
{
	var nombre;
	var ancho;
	var alto;
	var peso;
	var contador;
	var masPesado;
	var masAlto;
	var menorAncho;
	var contador300E600;

	contador=0;
	contador300E600=0;
	
	while(contador<5){

		contador++
		nombre=prompt("Ingrese el nombre del producto");

		ancho=prompt("Ingrese el ancho del producto");
		ancho=parseInt(ancho);

		while (ancho<0 || ancho>10){

			ancho=prompt("Ingrese el ancho del producto");
			ancho=parseInt(ancho);
		}

		alto=prompt("Ingrese el alto del producto");
		alto=parseInt(alto);

		while (alto<0 || alto>10){

			alto=prompt("Ingrese el alto del producto");
			alto=parseInt(alto);
		}

		peso=prompt("Ingrese el peso del producto");
		peso=parseInt(peso);

		while (peso<0 || peso>1000){

			peso=prompt("Ingrese el peso del producto");
			peso=parseInt(peso);
		}

		if(contador == 1){

			masAlto=alto;
			masPesado=peso;
			menorAncho=ancho;
		}else

		{
			if(alto>masAlto){

				masAlto=alto;
			}

			if(peso>masPesado){

				masPesado=peso;
			}

			if(ancho<menorAncho){

				menorAncho=ancho;
			}
		}

		if (peso>300 && peso<600){

			contador300E600=contador+1

			}

	}
		
	alert("El mas pesado es " +masPesado+ " la altura mas alta es "+masAlto+ " el menor ancho es "+menorAncho+" y la cantidad que tiene un peso entre 300 y 600 kilos es "+contador300E600);	

}
