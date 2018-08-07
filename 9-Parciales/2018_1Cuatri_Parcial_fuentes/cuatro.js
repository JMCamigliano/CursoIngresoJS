function mostrar()
{

	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno=prompt ("Ingrese el primer número");
	numeroDos=prompt ("Ingrese el segundo número");	
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	suma=numeroUno+numeroDos;

	if(numeroUno==numeroDos){

		alert (+ numeroUno + "" +numeroDos);
	}

	if(numeroUno>numeroDos){

		alert (numeroUno-numeroDos);
	}

	if(numeroDos>numeroUno){
	
		if(suma>10){

			alert ("La suma es " +suma+ " y superó el 10");}

			else{

				alert (suma);
		    }	
	}	
}

