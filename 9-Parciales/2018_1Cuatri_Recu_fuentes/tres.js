function mostrar()
{
	var precio;
	var descuento;
	var IVA;
	var elPrecioFinal;

	precio=prompt("Ingrese el precio");
	descuento=prompt("Ingrese el descuento");

	PrecioDescuento=precio * descuento / 100;
	preciodescuento=precio - (precio * descuento/ 100);
	IVA=precio-(precio*1.21);
	elPrecioFinal=[precio - (precio * descuento/ 100)]*1.21;


	alert("El descuento es " +PrecioDescuento+ ", el precio con el descuento es " +preciodescuento+ 
		" y el IVA es " +IVA);

	document.getElementById('elPrecioFinal').value=elPrecioFinal

}
