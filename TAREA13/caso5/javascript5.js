function numero() { // Declara la función `numero` que no acepta parámetros
    num = prompt("Escribe un número del 10 al 20"); // Muestra un cuadro de diálogo que pide al usuario que escriba un número del 10 al 20 y lo asigna a la variable `num`
    num = Number(num); // Convierte el valor ingresado a un número (tipo Number) y lo asigna nuevamente a `num`
    if (num <= 10 || num >= 20) { // Verifica si `num` es menor o igual a 10 o mayor o igual a 20
        alert("Este número no es valido"); // Si `num` es menor o igual a 10 o mayor o igual a 20, muestra una alerta diciendo que el número no es válido
    } else { // Si `num` está entre 10 y 20 (exclusivo)
        alert("El número es correcto"); // Muestra una alerta diciendo que el número es correcto
    }
}
