
function mostrar()
{
	var base;
	var altura;
	var superficie;
	var perímetro;

	base=prompt("Ingrese la base del triángulo");
	altura=prompt("Ingrese la altura del triángulo");

	superficie=(base*altura)/2;
	perímetro=base*3;

	alert ("La superficie del triángulo es " +superficie+ " y el perímetro es " +perímetro);
}
