import platosMenu from './menu.json'

const menu = () => {
    const date = new Date()
    const daysWeek = [
        'Domingo',
        'Lunes', 
        'Martes', 
        'Miercoles', 
        'Jueves', 
        'Viernes', 
        'Sábado'
    ]

    // const menu = Data
    console.log(platosMenu[daysWeek[date.getDay()]])



}

export default menu
