tarea1();

document.getElementById('opcion1').addEventListener("click",tarea1);
document.getElementById('opcion2').addEventListener("click",tarea2);
document.getElementById('opcion3').addEventListener("click",tarea3);

function tarea1(){
	//document.getElementById("box").innerHTML="<img src='"+ movies[0].img+"'><p>"+ movies[0].sinopsis+"</p>";
	document.getElementById("foto-pelicula").setAttribute("src",movies[0].img);
	document.getElementById("detalle-pelicula").innerHTML=movies[0].sinopsis;
}
function tarea2(){
	//document.getElementById("box").innerHTML="<img src='"+ movies[1].img+"'><p>"+ movies[1].sinopsis+"</p>";
	document.getElementById("foto-pelicula").setAttribute("src",movies[1].img);
	document.getElementById("detalle-pelicula").innerHTML=movies[1].sinopsis;
}
function tarea3(){
	//document.getElementById("box").innerHTML="<img src='"+ movies[2].img+"'><p>"+ movies[2].sinopsis+"</p>";
document.getElementById("foto-pelicula").setAttribute("src",movies[2].img);
	document.getElementById("detalle-pelicula").innerHTML=movies[2].sinopsis;
}