function mostrar()
{
	var numeroUno;
	var numeroDos;
	var suma;
	var division;
 
	numeroUno=prompt ("Ingrese el primer número");
	numeroDos=prompt ("Ingrese el segundo número");
	
	if(numeroUno==numeroDos){
		alert (numeroUno+numeroDos);
	}

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	if(numeroUno>numeroDos){
		division=numeroUno/numeroDos
		alert (division);
	
	}
}