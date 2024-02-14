import img from './assets/location.jpg'

export default function location() {
    const info = document.querySelector('header')
    info.textContent = ''
    const h2 = document.createElement('h2')
    h2.textContent = '¡Visítanos de lunes a viernes!'
    const p = document.createElement('p')
    p.textContent = 'Desde el medio día hasta las 3pm,\nen la carrera 6 #66-99 casa 9\nAtobog, Colombia'
    info.append(h2, p)

    const main = document.querySelector('#contenido')
    main.textContent = ''
    main.style.backgroundImage = `url(${img})`
} 
