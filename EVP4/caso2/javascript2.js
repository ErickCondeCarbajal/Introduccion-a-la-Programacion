function generarNumeros() {
    const min = parseInt(document.getElementById("min").value);
    const max = parseInt(document.getElementById("max").value);

    if (isNaN(min) || isNaN(max) || min >= max) {
        alert("Por favor, ingrese valores válidos. Asegúrese de que el valor mínimo sea menor que el valor máximo.");
        return;
    }

    const numeros = [];
    for (let i = 0; i < 20; i++) {
        const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
        numeros.push(numeroAleatorio);
    }

    const listaNumeros = document.getElementById("lista-numeros");
    listaNumeros.innerHTML = ""; 
    numeros.forEach((numero, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${numero}`;
        listaNumeros.appendChild(li);
    });
}
