var nombre1="fernando";
var nombre2="mafer";
var nombre3="wilder";
var nombre5="andres";
var nombre6="alexander";
var nombre7="diego";
var nombre8="nelson";



var nombresAlumnos=["fernando","mafer" ,"wilder" ,"andres" ,"alexander","diego","nelson" ]

var nombres=[
			"fernando",  // elemento 1  indice 0
			"mafer" ,	// elemento 2	indice 1
			"wilder" ,	// elemento 3	indice 2
			"andres" ,	// elemento 4	indice 3
			"alexander" ,	// elemento 5 	indice 4
			"diego",		// elemento 6	indice 5
			"nelson",		// elemento 7	indice 6
			"juan carlos"	// elemento 8	indice 7
			]	


console.log("el valor del arreglo es : " +nombres[7] );


console.log(" la cantidad de elementos que tiene un arreglo es : " + nombres.length )

console.log("vamos a juntar a todos los elementos del arreglo en una sola cadena " + nombres.join(","))



var cantidad=nombres.push("Nuevo Alumno");
console.log("se ha agregado un nuevo elemento al arreglo , ahora existen " + cantidad +"elementos")
console.log("este es el valor del nuevo arreglo " + nombres);


console.log("se esta elimianod el ultimo elemento de la lista");
var eliminado=nombres.pop();
console.log("se ha eliminado el valor : " + eliminado);
console.log("este es el valor del nuevo arreglo : " + nombres);
console.log('este metodo me sirve para buscar dentro del contenido de un arreglo')
console.log('vamos a busar al elementos "nelson": ' + nombres.indexOf("nelson"))
console.log('el metodo reverse pone en reversa el arreglo' + nombres.reverse());
console.log('el metodo concat me permite agregar varios elementos' + nombres.concat("Juanito","Pepito","Luisito","rosita"))
console.log("El valor arreglo es " + nombres);




