function mostrar()
{
//tomo la edad  
	var edad;
	edad=document.getElementById('edad').value;
	/*
	if(edad<12)
	{
		alert ("Usted no es adolescente");
	}
	
	if(edad>17)
	{
		alert ("Usted no es adolescente");
	}*/
	
	if(edad<12 || edad>17)	
	{
		alert ("Usted no es adolescente");
	}


	/*
	if(edad>12 && edad<18)
	{
		
	}else
	{
		alert ("Usted no es adolescente");
	}*/


}//FIN DE LA FUNCIÓN