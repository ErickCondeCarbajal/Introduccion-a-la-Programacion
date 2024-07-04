function escribe(num) { // Declara la función escribe  que acepta un parámetro `num`
    var colores = ["ninguno", "rojo", "amarillo", "verde", "azul"]; // Declara un array `colores` con una lista de colores
    var texto = document.getElementById("respuesta"); // Obtiene el elemento del DOM con el id "respuesta" y lo asigna a la variable `texto`
    texto.innerHTML = colores[num]; // Actualiza el contenido HTML del elemento `texto` con el color correspondiente al índice `num` en el array `colores`
}
