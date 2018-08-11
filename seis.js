function mostrar()
{
	var estacion;
	var temperatura;
	var mensaje;

	estacion=prompt("Ingrese estacion");
	temperatura=prompt("Ingrese temperatura");
	temperatura=parseInt(temperatura);

	switch(estacion){

		case "otoño":

		if(temperatura==15){

			mensaje= "Esta lindo";

		}else if(temperatura<15){

			mensaje= "Se vino el frio";

		}else if (temperatura>15 && temperatura<=21){

				mensaje= "esta re bueno!";
			
		}else

			{
				mensaje= "Mucho calor para el otoño";
			}	
		
		break;

		alert(mensaje);
	}

	
}
