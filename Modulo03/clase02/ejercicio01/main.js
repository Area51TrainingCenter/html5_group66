var fecha=new Date();
var dato=fecha.getMonth();
// 9;
var nombre=nombredelmes(dato);

console.log("el nombre actual del mes es " + nombre)

function nombredelmes(valor1){
	var meses=[
	"enero",
	"febero",
	"marzon",
	"abril",
	"mayo",
	"junio",
	"julio",
	"agosto",
	"septiembre",
	"octubre",
	"noviembre",
	"diciembre"
	];

	return meses[valor1];
}