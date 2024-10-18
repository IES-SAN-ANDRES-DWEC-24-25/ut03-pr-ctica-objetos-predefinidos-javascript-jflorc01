document.addEventListener('DOMContentLoaded', () => {
    // Ejercicio 1
    const btnFecha = document.getElementById('btnFecha');
    btnFecha.addEventListener('click', () => {
        let fecha = obtenerFechaActual();
        document.getElementById('resultadoFecha').innerText = `Fecha Actual: ${fecha}`;
    });

    // Ejercicio 2
    document.getElementById('btnAreaCirculo').addEventListener('click', () => {
        const radio = parseFloat(document.getElementById('radioCirculo').value);
        if (isNaN(radio) || radio < 0) {
            alert('Por favor, ingrese un radio válido.');
            return;
        }
        const area = calcularAreaCirculo(radio);
        document.getElementById('resultadoArea').innerText = `Área del Círculo: ${area}`;
    });

    // Ejercicio 3
    document.getElementById('btnContarVocales').addEventListener('click', () => {
        const cadena = document.getElementById('cadenaVocales').value;
        const total = contarVocales(cadena);
        document.getElementById('resultadoVocales').innerText = `Número de Vocales: ${total}`;
    });

    // Ejercicio 4
    document.getElementById('btnCelsiusFahrenheit').addEventListener('click', () => {
        const celsius = parseFloat(document.getElementById('celsius').value);
        if (isNaN(celsius)) {
            alert('Por favor, ingrese un valor válido para Celsius.');
            return;
        }
        const fahrenheit = celsiusAFahrenheit(celsius);
        document.getElementById('resultadoFahrenheit').innerText = `${celsius}°C = ${fahrenheit}°F`;
    });

    // Ejercicio 5
    document.getElementById('btnFormatearNumero').addEventListener('click', () => {
        const numero = parseFloat(document.getElementById('numeroFormatear').value);
        if (isNaN(numero)) {
            alert('Por favor, ingrese un número válido.');
            return;
        }
        const numeroFormateado = formatearNumero(numero);
        document.getElementById('resultadoNumero').innerText = `Número Formateado: ${numeroFormateado}`;
    });

    // Ejercicio 6
    document.getElementById('btnReyesMagos').addEventListener('click', () => {
        const fechaInput = document.getElementById('fechaReyes').value;
        if (!fechaInput) {
            alert('Por favor, seleccione una fecha.');
            return;
        }
        // Convertir formato "yyyy-mm-dd" a "dd/mm/yyyy"
        const partes = fechaInput.split('-');
        const fechaFormateada = `${partes[2]}/${partes[1]}/${partes[0]}`;
        const dias = reyesMagos(fechaFormateada);
        document.getElementById('resultadoReyes').innerText = `Días para Reyes Magos: ${dias}`;
    });

    // Ejercicio 7
    document.getElementById('btnAleatorio').addEventListener('click', () => {
        const minimo = parseInt(document.getElementById('minimo').value);
        const maximo = parseInt(document.getElementById('maximo').value);

        if (isNaN(minimo) || minimo < 1) {
            alert('Por favor, ingrese un número válido de minimo.');
            return;
        }

        if (isNaN(maximo) || maximo < 1) {
            alert('Por favor, ingrese un número válido de maximo.');
            return;
        }
        const resultado = calcularAleatorio(minimo, maximo);
        document.getElementById('resultadoAleatorio').innerText = `${resultado}`;
    });

    // Ejercicio 8
    document.getElementById('btnNumberToWords').addEventListener('click', () => {
        const cadena = document.getElementById('cadenaNumberToWords').value;
        const numero = numberToWords(+cadena);
        console.log(numero);
        document.getElementById('resultadoNumberToWords').innerText = `${numero}`;
    });

    // Ejercicio 9
    document.getElementById('btnVerificarPalindromo').addEventListener('click', () => {
        const cadena = document.getElementById('cadenaPalindromo').value;
        const esPal = esPalindromo(cadena);
        const mensaje = esPal ? 'Es un palíndromo.' : 'No es un palíndromo.';
        document.getElementById('resultadoPalindromo').innerText = mensaje;
    });

    // Ejercicio 10
    document.getElementById('btnCamelCase').addEventListener('click', () => {
        const cadena = document.getElementById('cadenaCamelCase').value;
        const camel = camelCase(cadena);
        document.getElementById('resultadoCamelCase').innerText = `lowerCamelCase: ${camel}`;
    });
});

// Funciones auxiliares (NO ME FUNCIONA EN EL OTRO ARCHIVO)

// Devuelve la fecha actual en formato dd/mm/yyyy
function obtenerFechaActual() {
    const fecha = new Date();
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11
    const año = fecha.getFullYear();
    return `${dia}/${mes}/${año}`;
  }
  
  // Calcula el área de un círculo a partir de su radio con dos decimales
  function calcularAreaCirculo(radio) {
    let result = Math.PI * radio * radio;
    return result.toFixed(2);
  }
  
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
  