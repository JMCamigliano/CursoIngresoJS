/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre;
	nombre = getElementById('elNombre').value;
	alert (nombre);

// // documentgetbyid hace referencia al cuadro del html en el cual ingresamos el nombre, tenemos que agregarle el .value ( porque sino nos traeria el objeto, el cuadro y no el dato que estamos ingresando)
}


