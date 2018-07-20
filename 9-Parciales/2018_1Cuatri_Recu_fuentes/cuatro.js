function mostrar()

{
	var numeroUno;
	var numeroDos;
	var division;
	var suma;

	numeroUno=prompt("Ingrese el primer número");
	numeroDos=prompt("Ingrese el segundo número");
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	suma=numeroUno+numeroDos;

	if (numeroUno==numeroDos) {

		alert(+ numeroUno + "" + numeroDos);

	}

	if (numeroUno>numeroDos) {

		division=numeroUno/numeroDos;
		alert(division); }

	if (numeroUno<numeroDos){
		
		if(suma<50){

			alert ("La suma es "+suma+" y es menor a 50");}

		else{

			alert (suma);}
	}
}
