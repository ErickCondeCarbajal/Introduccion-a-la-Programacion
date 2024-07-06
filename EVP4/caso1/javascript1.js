let num1 = parseInt(prompt("Ingrese el primer número:"));
        let num2 = parseInt(prompt("Ingrese el segundo número:"));

        if (num1 > num2) {
            let temp = num1;
            num1 = num2;
            num2 = temp;
        }

        let i = num1;

        do {
            if (i % 2 !== 0) {
                let cubo = i * i * i;
                document.write("El cubo de " + i + " es " + cubo + "<br>");
            }
            i++;
        } while (i <= num2);