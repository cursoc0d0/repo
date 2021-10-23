function validacion() {
  valor = document.getElementById("firstname").value;
  valor1 = document.getElementById("lastname").value;
  valor2 = document.getElementById("email").value;
  valor3 = document.getElementById("phone").value;

  if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
    alert('[ERROR] Debe ingresar un nombre valido');
    return false; 
  }
    else if
    (valor1 == null || valor1.length == 0 || /^\s+$/.test(valor1)) {
      alert('[ERROR] Debe in gresar un Apellido valido');
      return false; 
    }
    else if
    ( !(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(valor2)) ) {
      alert('[ERROR] Debe ingresar un email valido' );
      return false;
    }
    else if
    ( !(/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/.test(valor3)) ) {
      alert('[ERROR] Revise el formato del telefono ingresado');
      return false; 
    }
 else
 return true;
  }
