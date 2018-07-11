function mostrar()
{
	var edad;
	var estCivil;
	estCivil=document.getElementById('estadoCivil').value;
	edad=document.getElementById('edad').value;
	if (edad<18&& estCivil!="Soltero"){
		alert("Es muy pequeño para NO ser soltero");
		}


}//FIN DE LA FUNCIÓN