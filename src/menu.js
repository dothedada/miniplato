import entireMenu from './menu.json'

const date = new Date()
const daysWeek = [
    'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'
]
const menuDays = daysWeek.slice(1, -1)
const today = daysWeek[date.getDay()]

function renderPlateInfo(day) {
    const info = document.querySelector('header')
    info.textContent = ''
    const plate = document.createElement('h2')
    plate.textContent = `${today === day ? '¡HOY! ': ''}${entireMenu[day].plate}`
    const desc = document.createElement('p')
    desc.textContent = entireMenu[day].desc

    info.append(plate, desc)

    const bkg = document.querySelector('#contenido')
    bkg.style.backgroundImage = `url(${entireMenu[day].img})`
}

function drawMenu() {
    const menuNav = document.createElement('aside')
    const menuList = document.createElement('ul')
    for (const day of menuDays) {
        const menuItem = document.createElement('li')
        const menuBtn = document.createElement('button')
        menuBtn.type = 'button'
        menuBtn.textContent = `${today === day ? '> ' : '' }${day}`
        menuBtn.addEventListener('click', () => renderPlateInfo(day))
        const menuPlate = document.createElement('p')
        menuPlate.textContent = entireMenu[day].plate
        menuItem.append(menuBtn, menuPlate)
        menuList.appendChild(menuItem)
    }
    menuNav.appendChild(menuList)
    document.querySelector('#contenido').appendChild(menuNav)
}


export default function menu() {
    if (document.querySelector('#menu.activo')) return

    const info = document.querySelector('header')
    info.textContent = ''

    drawMenu(daysWeek[date.getDay()])
    renderPlateInfo(daysWeek[date.getDay()])
    // const menu = Data
    console.log(entireMenu[daysWeek[date.getDay()]])

    document.querySelector('#menu').classList.add('activo')
}
