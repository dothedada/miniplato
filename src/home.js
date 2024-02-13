import Logo from './assets/minimini-texture.svg'
const main = () => {
    const info = document.querySelector('header')
    const title = document.createElement('h1')
    const welcome = document.createElement('p')
    info.textContent = ''
    title.textContent = 'Corrientazos Gourmet'
    welcome.textContent = 'Llena tu barriga con todo el sabor de Mini-Mini!'
    info.append(title, welcome)

    const miniTexture = new Image()
    miniTexture.src = Logo
    miniTexture.style.width = "calc(100% - 2rem)"

    document.querySelector('#contenido').textContent = ''
    document.querySelector('#contenido').appendChild(miniTexture)

    const navBTN = document.querySelectorAll('nav button')
    navBTN.forEach(btn => btn.classList.remove('activo'))
    navBTN[0].classList.add('activo')
}

export default main
