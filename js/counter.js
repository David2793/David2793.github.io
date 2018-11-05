document.addEventListener("DOMContentLoaded", function(){
   var counterstrike = '{"nombre": "Counter Strike (PC)", "descripcion": "La acción de Counter-Strike se desarrolla en rondas de una duración elegida por el que las crea, en la cual un equipo de terroristas (T) se enfrenta a un equipo de antiterroristas (CT). El equipo victorioso es el que cumpla todos sus objetivos de victoria, de situación o la eliminación de todos los jugadores del otro equipo. Si al final de la ronda no hay victoria directa de uno de los dos equipos, el equipo que no realizó sus objetivos pierde por eliminación.","introduccion": "Counter strike 1.6, juego de acción y disparos en primara persona.", "precio" : "$ 150", "valoracion" : "Valoración: 8 de 10", "foto" : "imgjuegos/counter.jpg", "href": "15counterstrike.html"}';

   counter = JSON.parse(counterstrike);

   var parrafoNombre = document.getElementById("nombre");
   var parrafoIntroduccion = document.getElementById("introduccion");
   var parrafoPrecio = document.getElementById("precio");
   var encabezadoValoracion = document.getElementById("valoracion");
   var parrafoDescripcion = document.getElementById("descripcion");
   

   parrafoNombre.innerHTML = counter.nombre;
   parrafoIntroduccion.innerHTML = counter.introduccion;
   parrafoPrecio.innerHTML = counter.precio;
   encabezadoValoracion.innerHTML = counter.valoracion;
   parrafoDescripcion.innerHTML = counter.descripcion;

});
