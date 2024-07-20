const boton = document.querySelector('button'); // Selecciona el primer elemento <button> en el documento y lo guarda en la variable 'boton'
const color = document.getElementById('color'); // Selecciona el elemento con id 'color' y lo guarda en la variable 'color'

function generarColorHexAleatorio() { // Define una función para generar un color hexadecimal aleatorio
    let digitos = '0123456789ABCDEF'; // Cadena que contiene todos los dígitos hexadecimales posibles
    let colorHex = '#'; // Inicializa la variable colorHex con el símbolo '#'

    for (let i = 0; i < 6; i++) { // Bucle que se ejecuta 6 veces para formar un color hexadecimal de 6 dígitos
        let indiceAleatorio = Math.floor(Math.random() * 16); // Genera un número aleatorio entre 0 y 15
        colorHex += digitos[indiceAleatorio]; // Añade el dígito correspondiente al número aleatorio a 'colorHex'
    }
    return colorHex; // Retorna el color hexadecimal generado
}

boton.addEventListener('click', function() { // Añade un evento 'click' al botón
    let colorAleatorio = generarColorHexAleatorio(); // Llama a la función 'generarColorHexAleatorio' y guarda el valor retornado en 'colorAleatorio'

    color.textContent = colorAleatorio; // Cambia el texto del elemento 'color' al nuevo color hexadecimal generado

    document.body.style.backgroundColor = colorAleatorio; // Cambia el color de fondo del cuerpo del documento al nuevo color hexadecimal generado
});
