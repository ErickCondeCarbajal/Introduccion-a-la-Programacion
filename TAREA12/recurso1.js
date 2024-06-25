window.onload = cargarImagen;
var i = 0;
var misImagenes = new Array(10);
function cargarImagen() {
    misImagenes[0] = "img/1.jpg";
    misImagenes[1] = "img/2.jpg";
    misImagenes[2] = "img/3.jpg";
    misImagenes[3] = "img/4.jpg";
    misImagenes[4] = "img/5.jpg";
    misImagenes[5] = "img/6.jpg";
    misImagenes[6] = "img/7.jpg";
    misImagenes[7] = "img/8.jpg";
    misImagenes[8] = "img/9.jpg";
    misImagenes[9] = "img/10.jpg";
    document.imgSrc.src = misImagenes[i];
}

function siguiente() {
    if (i >= 9) {
        i = misImagenes.length - 1;
        window.alert("Última Imagen en la galería");
    } else {
        i++;
    }
    document.imgSrc.src = misImagenes[i];
}
function anterior() {
    if (i < 1) {
        i = 0;
        window.alert("Primera Imagen en la galería");
    } else {
        i--;
    }
    document.imgSrc.src = misImagenes[i];
}
