var telefono={
	marca:"apple",
	color:"blanco",
	fabricacion:"2014",
	pantalla:"colores",
	modelo:"iphone 5"
}

var telefono2={
	marca:"samsung",
	color:"negro",
	fabricacion:"2014",
	pantalla:"colores",
	modelo:"Galaxy"
}


var telefonos=[
	telefono,
	telefono2
	];


console.log("el objeto telefono es de la marca  :"+ telefono.marca)

console.log("el objeto telefono es fabriacion  :"+ telefono.fabricacion)
console.log("el objeto telefono es de color  :"+ telefono["color"])


telefono.marca="alcatel";
console.log("el objeto telefono es de la marca  :"+ telefono.marca)
telefono.tecnologia="4g";
console.log("valores del objeto telefono :" +telefono.tecnologia)
telefono2.tecnologia="3g";

console.log(telefonos[0].marca)