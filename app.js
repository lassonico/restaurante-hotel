import { platos } from "./platos.js";

// -------------- Boton de reserva -----------------

const enlace = document.querySelector('.contenedor-textos a') // boton de reservar
enlace.addEventListener('click', function(e){
    e.preventDefault()
    const seccionScroll = e.target.attributes.href.value;
    const seccion = document.querySelector(seccionScroll);
    seccion.scrollIntoView({ behavior: "smooth" });
})

// -------------- Map de platos ------------

const carta = document.getElementById('menu')

function elementoPlato(plato) {
    const platoDiv = document.createElement('div');
    platoDiv.classList.add('card-plato');
    platoDiv.innerHTML = `
    <img src='img/platos/plato_${plato.id}.jpg' alt="imagen de ${plato.nombre}">
    <div class="textos-card">
        <p class="format-text" ><span class="titulo-plato">${plato.nombre}</span> ......................................... <span class="precio">$${plato.precio}</span></p>
        <p class="plato-descripcion">${plato.descripcion}</p>
    </div>
    `

    // <div class="card">
    //     <div class="card-details">
    //         <p class="text-title">Card title</p>
    //         <p class="text-body">Here are the details of the card</p>
    //     </div>
    //     <button class="card-button">More info</button>
    // </div>

    platoDiv.addEventListener('click', () => {

        const mensaje = `Hola, me interesa el plato ${plato.nombre} y quiero pedirlo a domicilio`
        const telefono = "573228458059";
        const url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);

        window.open(url, "_blank");
        
    })

    return platoDiv;
}

function cargarPlatos() {
    platos.forEach(plato => {
      const elementoCarta = elementoPlato(plato);
      carta.appendChild(elementoCarta);
    });

}

document.addEventListener('DOMContentLoaded', cargarPlatos);

// -------------- fin map de img ---------

// ------ ENVIO DEL FORMULARIO -------

const formulario = document.getElementById('formdatos')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const nombre = document.getElementById('nombre').value;
    const telefonocliente = document.getElementById('telefono').value;
    const comentarios = document.getElementById('comentarios').value;

    const mensaje = `Hola, mi nombre es ${nombre} y quiero hacer una reservación, mi numero es ${telefonocliente}. ${comentarios}`
    const telefono = "573228458059";
    const url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);

    window.open(url, "_blank");
    
    formulario.reset()

    window.scroll(0,0)
})

