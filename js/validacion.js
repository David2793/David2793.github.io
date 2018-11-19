function validar() {
  var nombre, dni, dianacimiento, fechaNacimientoMes, aniodenacimiento, email1, email2, expresion;
  nombre = document.getElementById('nombre').value;
  dni = document.getElementById('dni').value;
  dianacimiento = document.getElementById('dianacimiento').value;
  fechaNacimientoMes = document.getElementById('fechaNacimientoMes').value;
  aniodenacimiento = document.getElementById('aniodenacimiento').value;
  email1 = document.getElementById('email1').value;
  email2 = document.getElementById('email2').value;
  movil = document.getElementById('movil').value;



  expresion = /\w+@\w+\.+[a-z]/;


  document.getElementById("direccion")

  if(nombre === ""){
    alert ("El campo nombre está vacio");
    return false;
  }
  else if (dni === ""){
    alert ("El campo C.I está vacio");
    return false;
  }
  else if (dianacimiento === ""){
    alert ("El campo día de nacimiento está vacio");
    return false;
  }
  else if (fechaNacimientoMes === ""){
    alert ("El campo mes de nacimientoestá vacio");
    return false;
  }
  else if (aniodenacimiento === ""){
    alert ("El campo año de nacimiento está vacio");
    return false;
  }
  else if (email1 === ""){
    alert ("El campo email está vacio");
    return false;
  }
  else if (!expresion.test(email1)){
    alert ("El correo no es valido");
    return false;
  }
  else if (email2 === ""){
    alert ("El campo repita email está vacio");
    return false;
  }
  else if (!expresion.test(email2)){
    alert ("Repita email no es valido");
    return false;
  }
  else if (nombre.length>30){
  alert ("El nombre es muy largo");
  return false;
  }
  else if (dni.length>12){
    alert ("El campo C.I es muy largo");
    return false;
  }
  else if (isNaN (dni)){
    alert ("La C.I ingresada no es un número");
    return false;
  }
else if (email1.length>40){
  alert ("El campo email es muy largo");
  return false;
}
else if (email2.length>40){
  alert ("El campo repita email es muy largo");
  return false;
}
else if (isNaN (movil)){
  alert ("El celular ingresado no es un número");
  return false;
}
else if (movil>9){
  alert ("El campo celular es muy largo");
  return false;
}



}
