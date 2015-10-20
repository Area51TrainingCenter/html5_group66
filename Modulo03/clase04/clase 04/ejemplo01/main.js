// DOM 
// el es document object model
// es la referencia que voy a tener del html en js
//


//este metodo me permite traer los elementos con la etiqueta especificada
// este selector devulve un arreglo
var opciones=document.getElementsByTagName('li');
//console.log(opciones);


//este metodo me permite traer los elementos con la clase especificada
//este selector me devulve un arreglo
var opciones2 = document.getElementsByClassName('opcion');
//console.log(opciones2);

//este selector me permite traer los elementos que tenga el id especificado
// este selector me devulve un elemento
var item1 = document.getElementById("opcion1");

var item2=document.getElementById("opcion2");

var item3=document.getElementById("opcion3");

    '' //addEventListener("evento",nombreDeFuncion)
// este metodo me permite agregar escuchadores a los elmentos

item1.addEventListener("click",tarea1);
item2.addEventListener("click",tarea2);
item3.addEventListener("click",tarea3);

   


	var caja=document.getElementById("box");
	caja.style.width="300px";
	caja.style.height="200px";
	caja.style.backgroundColor="red";
	caja.innerHTML="<h1 class='resaltar'>Elemento 2</h1>";
	var link=document.getElementById("link");
	link.setAttribute("href", "http://www.facebook.com"); 


}
function tarea2(){

	var caja=document.getElementById("box");
	caja.style.width="10px";
	caja.style.height="20px";
	caja.style.backgroundColor="blue";
	caja.innerHTML="<strong>Elemento 2</strong><img src=''><p></p>";

	//codigo que quiera definir;
}

function tarea3(){
	//codigo va a qui
	var caja=document.getElementById("box");
	caja.style.width="150px";
	caja.style.height="100px";
	caja.style.backgroundColor="green";
	caja.innerHTML="<strong>Elemento 2</strong>";
}









/*
document.getElementById('opcion1').addEventListener("click",mensaje1)
document.getElementById('opcion2').addEventListener("click",mensaje2)
document.getElementById('opcion3').addEventListener("click",mensaje3)
*/

