document.addEventListener("DOMContentLoaded", function(){

   arrJuegos = JSON.parse(arrJuegos);

  var listadoJuegos = document.getElementById("listado");

  for(var i = 0; i < arrJuegos.length; i++){
    listadoJuegos.innerHTML = listadoJuegos.innerHTML + "<li>" + "<"+"a href='" + arrJuegos[i].href + "'>" + "<img src='" + arrJuegos[i].foto + "' width='200px' height='250px'></a><p><strong>"  + arrJuegos[i].nombre + "</strong></p>"
    + "<p>"+ arrJuegos[i].precio + "</p>" + "<p>" + arrJuegos[i].valoracion  + "</p>" + "</li>";
  }
});
