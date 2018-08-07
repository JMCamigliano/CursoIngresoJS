function mostrar()
{
	var notas;
	var sexo;
	var promedio;
	var acumulador;
	var contador;

	acumulador=0;
	promedio=0;
	CantidadDeVarones=0;
	contador=0;


	while(contador<5)
	{

		contador++;
		
		notas=prompt("Ingrese nota");
		notas=parseInt(notas);

		while(notas<0||notas>10)
		{
			
			notas=prompt("Reingrese nota válida");
			notas=parseInt(nota);

		}

		sexo=prompt("Ingrese sexo");

		while(sexo!="f"&&sexo!="m")
		{
			
			sexo=prompt("Reingrese sexo");

		}

		if (contador==1) 
		{
			
			NotaMasBaja=notas;
			SexoNotaMasBaja=sexo;

		}else
		{
			if (notas<NotaMasBaja) 
			{
				
				NotaMasBaja=notas;
				SexoNotaMasBaja=sexo;

			}
		}

		if (notas>=6&&sexo=="m") 
		{

			CantidadDeVarones++;

		}

		acumulador=acumulador+notas;
	}

	promedio=acumulador/contador;

	alert("El promedio es "+promedio+". La nota mas baja es "+NotaMasBaja+" y su sexo es "+SexoNotaMasBaja+". La cantidad de varones con su nota mayor o igual a 6 es "+CantidadDeVarones);


}


