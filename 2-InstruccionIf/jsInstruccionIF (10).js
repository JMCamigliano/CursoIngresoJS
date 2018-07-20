function mostrar()
{

	var nota;
	nota = ((Math.random() * 10) + 1);
	nota = parseInt(nota);

	/*if (nota>=9){

		alert(nota+ " EXCELENTE");
	} 

	if (nota>4 && nota<9) {

		alert(nota+ " APROBÓ");

	}

	if (nota<4){

		alert(nota+ " Vamos, la proxima se puede");
	}*/

	if (nota>3) 

	{

		if(nota > 3 && nota < 9){
			alert(nota+ " Aprobado");
		}
		
		if (nota>8) {

		alert(nota+ " EXCELENTE");
		
		}
	
	}	else{

				alert(nota+ " Vamos, la proxima se puede.")
				
				}	
}