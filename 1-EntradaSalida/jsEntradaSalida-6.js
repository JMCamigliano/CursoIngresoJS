/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	resultado=66;
	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno+numeroDos;
	alert("El resultado de la suma es " + resultado);


/* 

EL ID EN HTML SE ENCUENTRA POSICIONANDOTE EN EL CUADRO. CLICK DERECHO, INSPECCIONAR.

Cuando hay dos palabras juntas, la segunda siempre va con mayusculas. Ejemplo: numeroUno


Todo lo que obtenga del prompt, es texto.
Todo lo que obtengo de GetElementByID, SIEMPRE es una palabra.

Para tomar el document.get va primero el nombre de la variable.
Para mostrar, al reves.

parseInt
Retorna un valor.
Cuando le pasamos algo, retorna el valor. El nùmero. Siempre lo que le pase tiene qe ser un nùmero.

Sin signo = adelante, no tiene ningùn significado.
Lo que precede al signo, tiene formato numèrico.

alert("El resultado de la suma es " + numeroUno + numeroDos). NO FUNCIONA!!!
Hay que sumar siempre con la variable resultado.


*/

}

