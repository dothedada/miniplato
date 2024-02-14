import entireMenu from './menu.json'
require.context('./assets', false, /\.jpg$/i)

const date = new Date()
const daysWeek = [
    'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'
]
const menuDays = daysWeek.slice(1, -1)
const today = daysWeek[date.getDay()]
const info = document.querySelector('header')

export function showPlateInfo(day = today) {
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
    document.querySelector('#contenido').textContent = ''
    const menuNav = document.createElement('aside')
    const menuList = document.createElement('ul')
    for (const day of menuDays) {
        const menuItem = document.createElement('li')
        const menuBtn = document.createElement('button')
        menuBtn.type = 'button'
        if(today === day) menuBtn.classList.add('currentItem')
        menuBtn.textContent = `${today === day ? '> ' : '' }${day}`
        menuBtn.addEventListener('click', event => {
            document.querySelector('.currentItem').classList.remove('currentItem')
            event.target.classList.add('currentItem')
            showPlateInfo(day)
        })
        const menuPlate = document.createElement('p')
        menuPlate.textContent = entireMenu[day].plate
        menuItem.append(menuBtn, menuPlate)
        menuList.appendChild(menuItem)
    }
    menuNav.appendChild(menuList)
    document.querySelector('#contenido').appendChild(menuNav)
}

export default function menu() {
    info.textContent = ''
    drawMenu()
    showPlateInfo(daysWeek[date.getDay()])
}
