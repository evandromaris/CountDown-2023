const secondsCont = document.querySelector('#second')
const minutescont = document.querySelector('#minutes')
const hoursCont = document.querySelector('#hours')
const daysCont = document.querySelector('#days')
const launch2023 = document.querySelector('#launch2023')
const contdown = document.querySelector('#contdown')


const newDays = new Date().getFullYear() +1;
const launchTime = new Date(`January 01 ${newDays} 00:00:00`)

const updateCountdown = () => {
    const currentTime = new Date()
    const difference = launchTime - currentTime
    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60 ) % 60
    const seconds = Math.floor(difference / 1000) % 60

//Colocando 2 digitos nos times abaixo de 10
    secondsCont.textContent = seconds < 10 ? '0' + seconds : seconds
    minutescont.textContent = minutes < 10 ? '0' + minutes : minutes 
    hoursCont.textContent = hours < 10 ? '0' + hours : hours
    daysCont.textContent = days < 10 ? '0' + days : days
}

setTimeout(() => {
    contdown.style.display = 'flex'
    launch2023.style.display = 'none'
}, 2000)

setInterval(updateCountdown, 1000)