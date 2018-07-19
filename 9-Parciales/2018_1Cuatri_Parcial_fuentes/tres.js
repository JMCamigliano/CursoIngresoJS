function mostrar()
{
	var precio;
	var descuento;
	var elPrecioFinal;

	precio=prompt ("Ingrese el precio");
	descuento=prompt ("Ingrese el descuento");

	elPrecioFinal = precio - (precio * descuento/ 100);

	document.getElementById('elPrecioFinal').value = elPrecioFinal;


}
