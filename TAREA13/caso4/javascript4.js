function cifra() { // Declara la función `cifra` que no acepta parámetros
    num = prompt("escribe un número"); // Muestra un cuadro de diálogo que pide al usuario que escriba un número y lo asigna a la variable `num`
    num = Number(num); // Convierte el valor ingresado a un número (tipo Number) y lo asigna nuevamente a `num`
    if (num >= 10) { // Verifica si `num` es mayor o igual a 10
        alert("Tu número tiene más de una cifra"); // Si `num` es mayor o igual a 10, muestra una alerta diciendo que el número tiene más de una cifra
    } else { // Si `num` es menor que 10
        alert("tu número solo tiene una cifra"); // Muestra una alerta diciendo que el número tiene solo una cifra
    }
}
