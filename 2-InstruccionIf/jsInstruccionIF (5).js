function mostrar()
{

	var edad;
	edad=document.getElementById('edad').value;

	if (edad<13) {

		alert("Usted NO es un adolescente.");
	}

	if (edad>17) {

		alert("Usted NO es un adolescente.");
	}	
		
	/*if (edad<13 || edad>17) 

	{

		alert ("Usted NO es un adolescente.");
	
	 }*/
}