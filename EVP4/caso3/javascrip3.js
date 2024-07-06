var index;
    var text = "<ul>";
    var frutas = ["Platano", "Naranja", "Manzana", "Mango","Fresa","Uva","Granadilla"];
    function verfrutas() {
        for (index = 0; index < frutas.length; index++) {
            text += "<li>" + frutas[index] + "</li>";
        }
        text += "</ul>";
        document.getElementById("boton1").innerHTML = text;
    }
    function ordenar() {
        frutas.sort();
        document.getElementById("boton2").innerHTML = frutas;
    }
    function invertir() {
        frutas.reverse();
        document.getElementById("boton3").innerHTML = frutas;
    }
    function longitud() {
        var cantidad=frutas.length;
        document.getElementById("boton4").innerHTML =
        "La cantidad de elementos del arrays es:"+cantidad;
    }
    function insertar() {
        frutas.push("Platano");
        document.getElementById("boton5").innerHTML = frutas;
    }
    function eliminar() {
        frutas.splice(0, 1);
        document.getElementById("boton6").innerHTML = frutas;
    }