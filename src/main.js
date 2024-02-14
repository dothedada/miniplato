import './styles.css'
import main from './home'
import menu, { showPlateInfo } from './menu'
import location from './location'

showPlateInfo()
main()

function botonera(btn) {
    const navBTN = document.querySelectorAll('nav button')
    navBTN.forEach(btn => btn.classList.remove('activo'))
    navBTN[btn].classList.add('activo')
}

document.getElementById('home').addEventListener('click', () => {
    botonera(0)
    main()
})
document.getElementById('menu').addEventListener('click', () => {
    botonera(1)
    menu()
})
document.getElementById('contact').addEventListener('click', () => {
    botonera(2)
    location()
})
