//getElementyById
contenedor=document.getElementById('contenedor');
console.log(contenedor.innerHTML);

//getElementsByClassName
const toppings =document.getElementsByClassName('topping');
console.log(toppings);

//getElemntsByTagName
const toppingsFondoMarron=document.getElementsByClassName('fondo-marron');
console.log(toppingsFondoMarron);

//queryselector
const primerToppingNaranja=document.querySelector('ul li:not(.fondo-marron)');
console.log(primerToppingNaranja)

//queryselectorall()
const toppingsNaranja=document.querySelectorAll('.toppings.fondo-naranja');
console.log(toppingsNaranja);

//Asignar estilo en javascript
const primerTopping=document.querySelector('.topping');
console.log(primerTopping.style)

//Acceder al texto en DOM
// const listaDeToppings=document.getElementById('lista-toppings');
// console.log('> innerText');
// console.log(listaDeToppings.innerText);

// console.log('> textContent');
// console.log(listaDeToppings.textContent);

// console.log('> innerHTML');
// console.log(listaDeToppings.innerHTML);

//Modificar el texto
const titulo=document.getElementById('titulo');
titulo.innerText='Mis Toppings Favoritos'

//Atributos con Javascript
const enlace=document.getElementsByTagName('a');
console.log(enlace[0].setAttribute('href','https://www.freecodecamp.org/espanol/'));

// Clases
// const primerTopping = document.querySelector('topping');
// console.log(primerTopping.classList);


//Agregar una clase
// const primerTopping=document.querySelector('.topping');
// primerTopping.classList.add('mi-clase');
// console.log(primerTopping.classList);

//Eliminar una clase
// const primerTopping=document.querySelector('.topping');
// primerTopping.classList.remove('topping');
// console.log(primerTopping.classList);

//Crear un elemento
// const listaDeToppings=document.getElementById();
// const toppingNuevo=document.createElement('li');
// toppingNuevo.classList.add('topping','fondo-marron');
// toppingNuevo.innerText='Queso Extra';
// listaDeToppings.append(toppingNuevo);

//RECORRER DOOM
 const listaDeToppings=document.getElementById();

 //Eventos on event
 function mostrarClic(topping){
    console.log(topping);
 }

 //addEventListener
//  const toppings=document.getElementById('topping');

//  for(const topping of toppings){
//     topping.addEventListener('click',(e)=>  {
//         console.log(e.target.innerText);
//     })

//  }
