// Devuelve la fecha actual en formato dd/mm/yyyy
function obtenerFechaActual() {
  const fecha = new Date();
  const dia = String(fecha.getDate()).padStart(2, '0');
  const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11
  const año = fecha.getFullYear();
  return `${dia}/${mes}/${año}`;
}

// Calcula el área de un círculo a partir de su radio con dos decimales
// function calcularAreaCirculo(radio) {
//   let result = Math.PI * radio * radio;
//   return result.toFixed(2);
// }

// Cuenta el número de vocales en una cadena de texto
function contarVocales(cadena) {
  let cont = 0;
  const vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  for (let i = 0; i < cadena.length; i++) {
      if (vocales.includes(cadena.charAt(i))) {
          cont++;
      }
  }

  return cont;
}

// Convierte una temperatura de grados Celsius a Fahrenheit
celsiusAFahrenheit = (celsius) => {

  return (celsius * 9 / 5) + 32;

}

// Crea una función que formatee un número agregando comas como separadores de miles.
function formatearNumero(numero) {

  const numeroStr = numero.toString();
    let resultado = '';
    let contador = 0;

    for (let i = numeroStr.length - 1; i >= 0; i--) {
        // Añadimos el dígito actual al resultado
        resultado = numeroStr[i] + resultado;
        contador++;

        // Cada 3 dígitos (excepto el primero) añadimos un punto
        if (contador % 3 === 0 && i !== 0) {
            resultado = '.' + resultado;
        }
    }

    return resultado;

}

// Función que recibe un string en formato dd/mm/yyyy y devuelve el número de días que faltan para el 6 de Enero del año siguiente
function reyesMagos(fecha) {

  // Separar la fecha en día, mes y año
  const partes = fecha.split('/');
  const dia = parseInt(partes[0]); 
  const mes = parseInt(partes[1]); 
  const año = parseInt(partes[2]); 

  const fechaActual = new Date(año, mes - 1, dia);
  const proximoReyes = new Date(año + 1, 0, 6);

  // Calcular la diferencia en milisegundos
  const diferencia = proximoReyes.getTime() - fechaActual.getTime();

  const diasFaltantes = Math.ceil(diferencia / (1000 * 60 * 60 * 24)); // Milisegundos a días

  return diasFaltantes;
}

// Ejercicio 10: Convertir a lowerCamelCase
function camelCase(cadena) {
  let arr = cadena.split(" ");
  let result = arr[0].toLowerCase();

  for (let i = 1; i < arr.length; i++) {
      let palabra = arr[i].toLowerCase();
      let capitalizada = palabra.charAt(0).toUpperCase() + palabra.slice(1);
      result += capitalizada;
  }
  return result;
}

function reyesMagos(fecha) {
  const fechaActual = new Date(fecha.split('/').reverse().join('-'));
  const proximoReyes = new Date(`${fechaActual.getFullYear()}-01-06`);
  if (fechaActual > proximoReyes) {
      proximoReyes.setFullYear(proximoReyes.getFullYear() + 1);
  }
  const diferencia = proximoReyes - fechaActual;
  return Math.ceil(diferencia / (1000 * 60 * 60 * 24));
}

// Función que genera un número aleatorio entre comienzo y fin
function calcularAleatorio(comienzo, fin) {
  return Math.floor(Math.random() * (fin - comienzo + 1)) + comienzo;
}

// Función para verificar si una cadena es un palíndromo sin utilizar expresiones regulares ni programación funcional
function esPalindromo(cadena) {
  const cadenaLimpia = cadena.toLowerCase().replace(' ', ''); // Quitar espacios y pasar a minúsculas
  const longitud = cadenaLimpia.length;

  for (let i = 0; i < longitud / 2; i++) {
      if (cadenaLimpia[i] !== cadenaLimpia[longitud - 1 - i]) {
          return false;
      }
  }

  return true;
}

// Función que recibe un número y devuelve un string con el número escrito en palabras
function numberToWords(num) {
  

}
