/*
MARIA F 15
JOSE  M 33	
FER	  F 25

Pedir

Nombre
Sexo
Edad

No puede ser mayor a 0 y no puede ser menor a 100
*/
function mostrar()

{	

	var nombre;
	var sexo;
	var edad;
	var contador;
	var respuesta;
	respuesta="si!"
	contador=0


	while(contador<3){

		nombre=prompt ("Ingrese su nombre");
		sexo=prompt ("Ingrese sexo");

		while(sexo!="f" && sexo!="m"){

			sexo=prompt("ERROR, Ingrese un sexo");}

		edad=prompt ("Ingrese su edad");
		edad=ParseInt(edad);
		
		while(isNaN (edad)|| edad>100||edad<0){

		edad=prompt ("Edad invalida");
		edad=ParseInt(edad);
		}

		contador+1;


	}

		respuesta = prompt("Ingrese no para salir");
	


		var cantidadMujeres;
		var cantidadVarores;
		var cantidadMenores;
		var cantidadMayores;

}
