// DOM 
// el es document object model
// es la referencia que voy a tener del html en js
//


//este metodo me permite traer los elementos con la etiqueta especificada
// este selector devulve un arreglo
var opciones=document.getElementsByTagName('li');

//este metodo me permite traer los elementos con la clase especificada
document.getElementByClassName('opciones');

//este selector me permite traer los elementos que tenga el id especificado
document.getElementById("opcion1");


document.getElementById('opcion1').addEventListener("click",mensaje1)
document.getElementById('opcion2').addEventListener("click",mensaje2)
document.getElementById('opcion3').addEventListener("click",mensaje3)


























function mensaje1(){
	document.getElementById("box").style.width="500px";
	document.getElementById("box").style.height="500px";
	document.getElementById("box").style.backgroundColor="red";
	document.getElementById("box").style.margin="10px auto 10px auto";
	getElementById("box").innerHTML="<strong>Mensaje1</strong>";

	//document.getElementById("foto").setAttribute("src", "../eventos2/img/horro1.jpg"); 

}



function mensaje2(){
	document.getElementById("box").style.width="350px";
	document.getElementById("box").style.height="350px";
	document.getElementById("box").style.backgroundColor="blue";
	document.getElementById("box").style.margin="10px auto 10px auto";
	document.getElementById("box").innerHTML="<strong>Mensaje2</strong>";
}




function mensaje3(){
	document.getElementById("box").style.width="400px";
	document.getElementById("box").style.height="400px";
	document.getElementById("box").style.backgroundColor="yellow";
	document.getElementById("box").style.margin="10px auto 10px auto";
	document.getElementById("box").innerHTML="<strong>Mensaje3</strong>";
}
