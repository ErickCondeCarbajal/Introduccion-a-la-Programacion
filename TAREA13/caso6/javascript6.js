function numeros() { // Declara la función `numeros` que no acepta parámetros
    var i = 1; // Declara la variable `i` y la inicializa con 1
    var par = 0; // Declara la variable `par` y la inicializa con 0
    var impar = -1; // Declara la variable `impar` y la inicializa con -1
    do { // Inicia un bucle `do...while` que se ejecutará al menos una vez
        par += 2; // Incrementa `par` en 2
        impar += 2; // Incrementa `impar` en 2
        if (i <= 10) { // Verifica si `i` es menor o igual a 10
            document.getElementById("par").innerHTML += par + "<br>"; // Si `i` es menor o igual a 10, añade el valor de `par` al contenido del elemento con id "par" seguido de un salto de línea
            document.getElementById("impar").innerHTML += impar + "<br>"; // Añade el valor de `impar` al contenido del elemento con id "impar" seguido de un salto de línea
        }
        document.getElementById("enteros").innerHTML += i + "<br>"; // Añade el valor de `i` al contenido del elemento con id "enteros" seguido de un salto de línea
        i++; // Incrementa `i` en 1
    } while (i <= 20); // El bucle se repite mientras `i` sea menor o igual a 20
}
