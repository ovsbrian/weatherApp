const container = document.getElementById('container')
const btn = document.getElementById('btn')
const info = document.getElementById('info')
const search = document.getElementById('search')


btn.addEventListener('click', (e) => {
    e.preventDefault();
    valdiarInput()
    resultCity.style.display = 'block'
})

const valdiarInput = () => {
    const ciudad = search.value.trim()
    if (ciudad ){
    
        getLonLat(ciudad)
        search.value = ''
       
    }
}

const mostrarInfo = () => {
    if (info.style.display === 'none') {
        info.style.display = 'block'
    } 
}


