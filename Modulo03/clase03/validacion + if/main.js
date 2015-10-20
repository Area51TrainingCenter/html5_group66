//document.getElementsById('inp-correo')
// me devuelve el elemento que tenga el id inp-correo

//document.getElementsByTagName('input')
//me devulve los elementos que sean de etiqueta input

//document.getElementByClassName('form-control');
// me devuelve los elementos que tenga como clase form-control
 
function acceder(){

var correo=document.getElementById('inp-correo').value;

var password=document.getElementById("inp-password").value;

	/*if(correo=="jtorriccelli1986@gmail.com"){
		if(password=="1234"){
			console.log("correo y password correcto");
		}
		else{
			console.log("password NO correcto");
		}

	}
	else{
	 	console.log("correo NO ES correcto");
	 	}
*/
   if(correo=="jtorriccelli1986@gmail.com" && password=="1234"){
		
	document.getElementById("mensaje-error").innerHTML="Bienvenido al sistema"	
	
	}
	else{
	 document.getElementById("mensaje-error").innerHTML="Datos no correctos"	
	 	}



}

function validar(){


   var correo=document.getElementById('inp-correo').value;

   var password=document.getElementById("inp-password").value;
   var estado;
   if(correo=="jtorriccelli1986@gmail.com" && password=="1234"){
		estado= true;	
	}

   else{
	 document.getElementById("mensaje-error").innerHTML="Datos no correctos"	
	 estado=false;
	}

    return estado;

}