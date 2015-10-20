// variable de tipo numerica ( 10 , 10.3, 10.345)
var numero=10;
// variable de tipo texto
var texto="esta es una cadena de texto";
// variable booleana
// varlores relacionados a true es : 1;
// varlores relacionados a false son : 0 , nan , "",
var estado=true;
var estado2=false;
console.log("el valor de la varibale estado es booleana : ");
console.log(estado);

var fecha="07/10/2015";

var nuevaFecha =new Date();
console.log("el dia del mes es :" + nuevaFecha.getDate());
console.log("el mes es :" + nuevaFecha.getMonth());
var mesactual=nuevaFecha.getMonth()+1;
console.log("el mes en el formato correcto es :"+ mesactual);
console.log("el anio es :" + nuevaFecha.getFullYear());
console.log("el dia de la semana es :" + nuevaFecha.getDay());
console.log("las Horas transucrridos son " + nuevaFecha.getHours());
console.log("los minutos transucrridos son " + nuevaFecha.getMinutes());
console.log("los segundo son : " + nuevaFecha.getSeconds());
