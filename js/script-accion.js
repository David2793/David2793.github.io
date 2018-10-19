document.addEventListener("DOMContentLoaded", function(){

  var arrJuegos = '[{"nombre": "Fifa 2018", "descripcion": "Esto es una descripcion"},' +
                  '{"nombre": "Pes 2019", "descripcion": "Esto es una descripcion"},' +
                  '{"nombre": "Halo", "descripcion": "Esto es una descripcion"}]';

   arrJuegos = JSON.parse(arrJuegos);

  var listaJuegos = document.getElementById("lista-juegos");

  for(var i = 0; i < arrJuegos.length; i++){
    listaJuegos.innerHTML = listaJuegos.innerHTML + "<li>" + arrJuegos[i].nombre + "</li>";
  }
});
