var comun = 0;
var premium = 0;
var especial = 0;
var subtotal = 0;
var iva = 0;
var envio = 0;
var total = 0;
var cantidad = 0;
var costoEnvio = 0;

total = total.toFixed(2);

document.addEventListener("DOMContentLoaded", function() {

 function calcularCostos() {
  comun = cantidad * precioUnitario * 0.005;
  especial = cantidad * precioUnitario * 0.02;
  premium = cantidad * precioUnitario * 0.05;
  subtotal = (cantidad * precioUnitario) + costoEnvio;
  iva = subtotal * 0.22;
  total = subtotal + iva;

  spanSubtotal.innerHTML = "$" + Number((subtotal).toFixed(1));
  spanTotal.innerHTML = "$" + Number((total).toFixed(1));
  spanTransporte1.innerHTML = "$" + comun;
  spanTransporte2.innerHTML = "$" + especial;
  spanTransporte3.innerHTML = "$" + premium;
  spanIva.innerHTML = "$" + Number((iva).toFixed(1));
 }

 var campoNombre = document.getElementById("nombre");
 var campoCI = document.getElementById("dni");
 var campodia = document.getElementById("dianacimiento");
 var campomes = document.getElementById("fechaNacimientoMes");
 var campoanio = document.getElementById("aniodenacimiento");
 var tarjetaanio = document.getElementById("tarjetaanio");
 var tarjetames = document.getElementById("tarjetames")
 var campoTelefonoMovil = document.getElementById("movil");
 var campoEmail = document.getElementById("email");
 var campoRepitaelEmail = document.getElementById("email2");
 var campoDomicilio = document.getElementById("domicilio");
 var campoLocalidad = document.getElementById("localidad");
 var campoCodigoPostal = document.getElementById("codigoPostal");
 var radiojuegodigital = document.getElementById("digital");
 var radiojuegofisico = document.getElementById("fisico");
 var botoncomprar = document.getElementById("boton-comprar");
 var transportecomun = document.getElementById("radioComun");
 var transporteespecial = document.getElementById("radioEspecial");
 var transportepremium = document.getElementById("radioPremium");
 var comun = document.getElementById("enviofisico");



 radiojuegodigital.addEventListener("change", function() {
  domicilio.style.display = "none";
  localidad.style.display = "none";
  codigoPostal.style.display = "none";
  dpto.style.display = "none";
  enviofisico.style.display = "none";
 });

 radiojuegofisico.addEventListener("change", function() {
  domicilio.style.display = "block";
  localidad.style.display = "block";
  codigoPostal.style.display = "block";
  dpto.style.display = "block";
  enviofisico.style.display = "block";

 });


 transportecomun.addEventListener("change", function() {
  costoEnvio = subtotal * 0.005;
  calcularCostos();
 });

 transporteespecial.addEventListener("change", function() {
  costoEnvio = subtotal * 0.02;
  calcularCostos();
 });

 transportepremium.addEventListener("change", function() {
  costoEnvio = subtotal * 0.05;
  calcularCostos();
 });

 //Carga de contenido de forma dinamica:

 var productos = ["Counter Strike 1.6 (PC)"];
 var imgGrandes = ["counter.jpg"];
 var imgPeque = ["counter.jpg"];


 var juego = document.getElementsByName("juego");
 for (i in productos) {
  juego[i].innerHTML = '<a id="imgG' + i + '" href="' + imgGrandes[i] + '"><img id="imgP' + i + '" class="imagen" src="' + imgPeque[i] + '"></a></div>';
 }

 //Campos de Datos Personales
 //Día de nacimiento:
 var fecha = new Date();


 for (var i = 1; i <= 31; i++) {
  document.getElementById("dianacimiento").innerHTML = document.getElementById("dianacimiento").innerHTML + '<option value="' + i + '">' + i + '</option>';
 }

 var vdianacimiento = document.getElementById("dianacimiento").selectedIndex;
 if (vdianacimiento == null || vdianacimiento == 0) {
  todoBien = false;
  document.getElementById("dianacimiento").className = "textMal";
 } else {
  document.getElementById("dianacimiento").className = "textBien";
 }


 //Año de nacimiento:
 var anio = fecha.getFullYear();


 for (var i = anio; i >= (anio - 100); i--) {
  document.getElementById("aniodenacimiento").innerHTML = document.getElementById("aniodenacimiento").innerHTML + '<option value="' + i + '">' + i + '</option>';
 }

 var vaniodenacimiento = document.getElementById("aniodenacimiento").selectedIndex;
 if (vaniodenacimiento == null || vaniodenacimiento == 0) {
  todoBien = false;
  document.getElementById("aniodenacimiento").className = "textMal";
 } else {
  document.getElementById("aniodenacimiento").className = "textBien";
 }


 //Tarjeta de credito:
 for (var i = 1; i <= 12; i++) {
  document.getElementById("tarjetames").innerHTML = document.getElementById("tarjetames").innerHTML + '<option value="' + i + '">' + i + '</option>';
 }

 for (var i = anio; i <= (anio + 21); i++) {
  document.getElementById("tarjetaanio").innerHTML = document.getElementById("tarjetaanio").innerHTML + '<option value="' + i + '">' + i + '</option>';
 }

 //Fecha de tarjeta MES:
 var tarjetames = document.getElementById("tarjetames").selectedIndex;
 if (tarjetames == null || tarjetames == 0) {
  todoBien = false;
  document.getElementById("tarjetames").className = "textMal";
 } else {
  document.getElementById("tarjetames").className = "textBien";
 }

 //Fecha de tarjeta AÑO:
 var tarjeanio = document.getElementById("tarjetaanio").selectedIndex;
 if (tarjetaanio == null || tarjetames == 0) {
  todoBien = false;
  document.getElementById("tarjetaanio").className = "textMal";
 } else {
  document.getElementById("tarjetaanio").className = "textBien";
 }


 var precioUnitario = 150;
 var campoCantidad = document.getElementById("campocantidad");
 var spanSubtotal = document.getElementById("subtotal");
 var spanTotal = document.getElementById("total");
 var spanTransporte1 = document.getElementById("comun");
 var spanTransporte2 = document.getElementById("especial");
 var spanTransporte3 = document.getElementById("premium");
 var spanIva = document.getElementById("iva");

 campoCantidad.addEventListener("change", function() {
  cantidad = campoCantidad.value;
  cantidad = parseInt(cantidad);
  calcularCostos();

 });
});
