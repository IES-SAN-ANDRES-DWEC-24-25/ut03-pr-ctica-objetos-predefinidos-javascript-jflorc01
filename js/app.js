// Devuelve la fecha actual en formato dd/mm/yyyy
function obtenerFechaActual(){
   
  return new Date();
  
}

// Calcula el área de un círculo a partir de su radio con dos decimales
function calcularAreaCirculo(radio) {

  let result = Math.PI * radio * radio;
  // result = Math.round(result * 100) / 100;
  return result.toFixed(2);
 
}

// Cuenta el número de vocales en una cadena de texto
function contarVocales(cadena) {

  let cont = 0;
  let vocales = ['a', 'e', 'i', 'o', 'u'];

  for(let i = 0; i < cadena.length; i++){
    if(vocales.includes(cadena.charAt(i))){
      cont++;
    }
  }

  return cont;

}
  
  
// Convierte una temperatura de grados Celsius a Fahrenheit
celsiusAFahrenheit = (celsius) => {
  
  return (celsius * 9/5) +32;

}

// Crea una función que formatee un número agregando comas como separadores de miles.
function formatearNumero(numero) {

  // let aux = numero.toString;
  // let grupos = round(aux.length / 3) - 1;

  // if(aux.length > 3){

  // }


  
}


// Función que recibe un string en formato dd/mm/yyyy y devuelve el número de días que faltan para el 6 de Enero del año siguiente
function reyesMagos(fecha) {
 
  }


// Ejercicio 10: Convertir a lowerCamelCase
function camelCase(cadena) {
  
  let arr = cadena.split(" ");
  let result = arr[0].toLowerCase();

  for(let i = 1; i < arr.length; i++){
    
    arr[i] = arr[i].toLowerCase;
    let aux = arr[i];
    aux = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    result += aux;

  }
}


// Crear una función que devuelva el número de días que quedan para la próxima Navidad
function diasParaNavidad(){

}


// Función que genera un número aleatorio entre comienzo y fin
function calcularAleatorio(comienzo, fin){

  return Math.random() * (fin - comienzo) + comienzo;

}



//   función para verificar si una cadena es un palíndromo sin utilizar expresiones regulares ni programación funcional
function esPalindromo(cadena){

  
}

// Función que recibe un número y devuelve un string con el número escrito en palabras
function numberToWords(num) {
 

}
