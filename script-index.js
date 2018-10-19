document.addEventListener("DOMContentLoaded", function(){

  var arrJuegos = '[{"nombre": "Counter Strike (PC)", "descripcion": "Counter strike 1.6, juego de acción y disparos en primara persona.", "foto" : "imgjuegos/counter.jpg", "href": "index.html"},' +
                  '{"nombre": "Pacman (PC)", "descripcion": "Pacman, juego donde un circulo amarillo en un laberinto, debe comer pequeños puntos.", "foto" : "imgjuegos/pacman.png, "href": "index.html"},' +
                  '{"nombre": "Age of Empires (PC)", "descripcion": "Age of Empires 3, juego de estraregia, construir, recolectar, cazar y luchar.", "foto" : "imgjuegos/age.jpg, "href": "index.html"},' +
                  '{"nombre": "Fifa 2002 (PC)", "descripcion": "Fifa 2002, juego de futbol", "foto" : "imgjuegos/fifa.jpg", "href": "index.html"},' +
                  '{"nombre": "Los Sims (PC)", "descripcion": "Sims,juego de construcción y supervivencia", "foto" : "imgjuegos/sims.jpg", "href": "index.html"},' +
                  '{"nombre": "GTA Vice City (PC)", "descripcion": "Gta vice city, juego de aventura y acción", "foto" : "imgjuegos/gta.jpg", "href": "index.html"},' +
                  '{"nombre": "F1 2002 (PC)", "descripcion": "Formula uno,juego de conducción en pistas", "foto" : "imgjuegos/f1.jpg", "href": "index.html"},' +
                  '{"nombre": "Need For Speed (PC)", "descripcion": "Need for Speed, juego de autos, carrerasy persecución", "foto" : "imgjuegos/need.jpg", "href": "index.html"},' +
                  '{"nombre": "NBA 2003 (PC)", "descripcion": "NBA 2003, juego de basketboll", "foto" : "imgjuegos/nba.jpg", "href": "index.html"},' +
                  '{"nombre": "Buscamina (PC)", "descripcion": "Buscaminas, juego de estraregia", "foto" : "imgjuegos/busca.png", "href": "index.html"},' +
                  '{"nombre": "Worms (PC)", "descripcion": "Worms, jueo de estraegia y acción, pequeños gusanos armados", "foto" : "imgjuegos/worms.jpg", "href": "index.html"},' +
                  '{"nombre": "Pou (PC)", "descripcion": "Pou, juego donde debes criar a tu mascota virtual", "foto" : "imgjuegos/pou.png, "href": "index.html"33333333333333333"}]';

   arrJuegos = JSON.parse(arrJuegos);

  var listadoJuegos = document.getElementById("listado");

  for(var i = 0; i < arrJuegos.length; i++){
    listadoJuegos.innerHTML = listadoJuegos.innerHTML + "<li>" + "<"+"a href='" + arrJuegos[i].href + "'>" + "<" + "img src='" + arrJuegos[i].foto + "'>" + arrJuegos[i].nombre + "</li>";
  }
});
