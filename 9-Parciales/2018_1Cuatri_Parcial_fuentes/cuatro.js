function mostrar()
{
	var numeroUno;
	var numeroDos;
	var suma;
	var resta;

	numeroUno=prompt ("Ingrese el primer número");
	numeroDos=prompt ("Ingrese el segundo número");
	
	if(numeroUno==numeroDos){
		alert (numeroUno+numeroDos);
	}

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	if(numeroUno>numeroDos){
		resta=numeroUno-numeroDos
		alert (resta);
	}else{

		suma=numeroUno+numeroDos
		
		if(suma>10){

			alert ("La suma es "+suma+" y superó el 10");
		}
		else{

			alert (suma);}
		}

	
		
		/*if(suma>10){

		alert (La suma es y superó el 10);*/
		
}
	


	
		


