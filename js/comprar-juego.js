document.addEventListener("DOMContentLoaded", function(){
    var campoNombre = document.getElementById("nombre");
    var campoCI = document.getElementById("dni");
    var campoTelefonoMovil = document.getElementById("movil");
    var campoEmail = document.getElementById("email");
    var campoRepitaelEmail = document.getElementById("email2");
    var campoDomicilio = document.getElementById("domicilio");
    var campoLocalidad = document.getElementById("localidad");
    var campoCodigoPostal = document.getElementById("codigoPostal");
    var radiojuegodigital = document.getElementById("digital");
    var radiojuegofisico = document.getElementById("fisico");
    var botoncomprar = document.getElementById("boton-comprar");


    radiojuegodigital.addEventListener("change", function(){
        domicilio.style.display="none";
    });

    radiojuegofisico.addEventListener("change", function(){
        domicilio.style.display="block";
    });

    radiojuegodigital.addEventListener("change", function(){
        localidad.style.display="none";
    });

    radiojuegofisico.addEventListener("change", function(){
        localidad.style.display="block";
    });

    radiojuegodigital.addEventListener("change", function(){
        codigoPostal.style.display="none";
    });

    radiojuegofisico.addEventListener("change", function(){
        codigoPostal.style.display="block";
    });

    radiojuegodigital.addEventListener("change", function(){
        dpto.style.display="none";
    });

    radiojuegofisico.addEventListener("change", function(){
        dpto.style.display="block";
    });


    });

    //PRODUCTO PARA COMPRAR:
    var productos = ["Counter Strike 1.6 (PC)"];
  	var imgGrandes = [""];
  	var imgPeque = ["counter.jpg"];
  	var precio = [150];
  	var stock = [10];
  	var precioTransportecomun = 0.05;
  	var precioTransportecomun = 0.2;
  	var precioTransportecomun = 0.5;
  	var IVA = 0.22;
  	var uniUser;

window.onload = function(){
    var juego = document.getElementsByName("juego");
    for (i in productos){
    juego[i].innerHTML = '<a id="imgG'+i+'" href="' +imgGrandes[i]+ '"><img id="imgP'+i+'" class="imagen" src="' +imgPeque[i]+ '"></a><div <span id="counterstrike'+i+'">' +productos[i]+ '</span>: <span id="pre'+i+'">' +precio[i]+ '$</span></b></div><div class="stock">Hay en stock <span id="uni'+i+'">' +stock[i]+ '</span> unidades,<br/>Selecciona la cantidad de juegos: <input class="uniBien" type="number" id="uniUser'+i+'" name="uniUser" value="0" size="4" /></div>';
  }

    var fecha = new Date();
    //Fecha de nacimiento DIA:

    for (var i=1;i<=31;i++){
        document.getElementById("dianacimiento").innerHTML = document.getElementById("dianacimiento").innerHTML + '<option value="' +i+ '">' +i+ '</option>';
    }

    var vdianacimiento = document.getElementById("dianacimiento").selectedIndex;
    if( vdianacimiento == null || vdianacimiento == 0 ) {
    todoBien=false;
        document.getElementById("dianacimiento").className = "textMal";
    }
    else{
        document.getElementById("dianacimiento").className = "textBien";
        }


    var anio = fecha.getFullYear();
    //Fecha de nacimiento AÑO:

    for (var i=anio;i>=(anio-100);i--){
			document.getElementById("aniodenacimiento").innerHTML = document.getElementById("aniodenacimiento").innerHTML + '<option value="' +i+ '">' +i+ '</option>';
		}

    //Fecha de nacimiento AÑO:
			var vaniodenacimiento = document.getElementById("aniodenacimiento").selectedIndex;
			if( vaniodenacimiento == null || vaniodenacimiento == 0 ) {
				todoBien=false;
				document.getElementById("aniodenacimiento").className = "textMal";
			}
			else{
				document.getElementById("aniodenacimiento").className = "textBien";
			}

      //Telefono:
  			var vMovil = document.getElementById("movil").value;
  			if( !(/^\d{9}$/.test(vMovil))  ) {
  				todoBien=false;
  				document.getElementById("movil").className = "textMal";
  			}
  			else{
  				document.getElementById("movil").className = "textBien";
  			}
        //email:
    			var vEmail1 = document.getElementById("email1").value;
    			var vEmail2 = document.getElementById("email2").value;

    			//email 1
    			if( !(/^\w+([-.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(vEmail1)) ) {
    				todoBien=false;
    				document.getElementById("email1").className = "textMal";
    			}
    			else{
    				document.getElementById("email1").className = "textBien";
    			}

    			//email 2
    			if( !(/^\w+([-.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(vEmail2)) ) {
    				todoBien=false;
    				document.getElementById("email2").className = "textMal";
    			}
    			else{
    				document.getElementById("email2").className = "textBien";
    			}

          //Comparacion email 1 y 2
    			if (vEmail1 != vEmail2){
    				todoBien=false;
    				document.getElementById("email2").className = "textMal";
    			}
};
          //FUNCION DE VALIDACION DE UNIDADES:
          	function validaLasUnidades(elEvento) {

          		var todoBien = true;
          		uniUser = document.getElementsByName("uniUser");


              for (i in productos){

              if ( uniUser[i].value == "" || uniUser[i].value > stock[i] || uniUser[i].value < 0 ){

              todoBien = false;
              uniUser[i].className = "uniMal";

   //Con solo un error se para la validacion de unidades:
   return;
 }
 else{
   todoBien = true;
   uniUser[i].className = "uniBien";
 }
}

//Si no ha habido ni un solo error, se ejecuta la siguiente funcion que se encarga de cargar el carro de la compra:
if (todoBien){
 calculaElTotal();
}
}
