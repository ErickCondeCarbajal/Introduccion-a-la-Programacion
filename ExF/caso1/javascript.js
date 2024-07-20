document.addEventListener('DOMContentLoaded', () => { // Espera a que el DOM esté completamente cargado antes de ejecutar el código
    const projects = [ // Array que contiene objetos, cada uno representando un proyecto de departamento
        { 
            src: 'img/image1.png', // Ruta de la imagen del departamento
            constructor: 'INVERSIONES 368', // Nombre del constructor
            price: 'Precio: $80,000', // Precio del departamento
            area: 'Área: 100.15 m²' // Área del departamento
        },
        { 
            src: 'img/image2.png', 
            constructor: 'CONSTRUIM INMOBILIRIA', 
            price: 'Precio: $120,000', 
            area: 'Área: 120.30 m²' 
        },
        { 
            src: 'img/image3.png', 
            constructor: 'ALVAJ SAC', 
            price: 'Precio: $79,500', 
            area: 'Área: 80.12 m²' 
        },
        { 
            src: 'img/image4.png', 
            constructor: 'GRUPO GOBESA', 
            price: 'Precio: $100,850', 
            area: 'Área: 69.50 m²' 
        },
        { 
            src: 'img/image5.png', 
            constructor: 'ALVAJ SAC', 
            price: 'Precio: $150,000', 
            area: 'Área: 150.20 m²' 
        },
        { 
            src: 'img/image6.png', 
            constructor: 'BESCO', 
            price: 'Precio: $110,500', 
            area: 'Área: 90.60 m²' 
        },
        { 
            src: 'img/image7.png', 
            constructor: 'INVERSIONES DICON', 
            price: 'Precio: $123,000', 
            area: 'Área: 110.30 m²' 
        },
        { 
            src: 'img/image8.png', 
            constructor: 'QALA CONSTRUCTORA S.A.C.', 
            price: 'Precio: $130,000', 
            area: 'Área: 130.15 m²' 
        },
        { 
            src: 'img/image9.png', 
            constructor: 'INVERSIONES AJM E HIJOS', 
            price: 'Precio: $147,000', 
            area: 'Área: 140.20 m²' 
        },
        { 
            src: 'img/image10.png', 
            constructor: 'INVERSIONES INMOBILIARIAS PB S.A.C.', 
            price: 'Precio: $112,000', 
            area: 'Área: 110.50 m²' 
        }
    ];

    let currentIndex = 0; // Índice inicial que apunta al primer proyecto en el array

    const projectImage = document.getElementById('project-image'); // Referencia al elemento de la imagen del proyecto
    const constructorName = document.getElementById('constructor'); // Referencia al elemento del nombre del constructor
    const price = document.getElementById('price'); // Referencia al elemento del precio del departamento
    const area = document.getElementById('area'); // Referencia al elemento del área del departamento
    const message = document.getElementById('message'); // Referencia al elemento del mensaje
    const prevButton = document.getElementById('prev-button'); // Referencia al botón de "Atrás"
    const nextButton = document.getElementById('next-button'); // Referencia al botón de "Siguiente"

    function updateProject() { // Función para actualizar la información del proyecto mostrado
        projectImage.src = projects[currentIndex].src; // Actualiza la imagen del proyecto
        constructorName.textContent = projects[currentIndex].constructor; // Actualiza el nombre del constructor
        price.textContent = projects[currentIndex].price; // Actualiza el precio del departamento
        area.textContent = projects[currentIndex].area; // Actualiza el área del departamento
        message.textContent = ''; // Limpia cualquier mensaje anterior
    }

    function showMessage(msg) { // Función para mostrar un mensaje
        message.textContent = msg; // Establece el texto del mensaje
    }

    prevButton.addEventListener('click', () => { // Evento para el botón "Atrás"
        if (currentIndex > 0) { // Si no está en el primer proyecto
            currentIndex--; // Decrementa el índice
            updateProject(); // Actualiza la información del proyecto mostrado
        } else {
            showMessage('Ya estás en el primer departamento.'); // Muestra un mensaje si está en el primer proyecto
        }
    });

    nextButton.addEventListener('click', () => { // Evento para el botón "Siguiente"
        if (currentIndex < projects.length - 1) { // Si no está en el último proyecto
            currentIndex++; // Incrementa el índice
            updateProject(); // Actualiza la información del proyecto mostrado
        } else {
            showMessage('Ya estás en el último departamento.'); // Muestra un mensaje si está en el último proyecto
        }
    });

    updateProject(); // Inicializa la información del proyecto mostrado al cargar la página
});
