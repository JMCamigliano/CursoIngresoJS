/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 

{
	var Temperatura;
	var FahrenheitCentigrados;

	Temperatura=document.getElementById('Temperatura').value;
	Temperatura=parseInt(Temperatura);

	FahrenheitCentigrados=((Temperatura-32)*5/9);

	alert (+Temperatura+ " grados Fahrenheit son " +FahrenheitCentigrados+ " grados Centigrados" );
}

function CentigradosFahrenheit () 

{
	var Temperatura;
	var CentigradosFahrenheit;

	Temperatura=document.getElementById('Temperatura').value;
	Temperatura=parseInt(Temperatura);

	CentigradosFahrenheit=((Temperatura*9/5)+32);

	alert (+Temperatura+ " grados Centígrados son " +CentigradosFahrenheit+ " grados Fahrenheit" );
}
