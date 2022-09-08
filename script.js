const secondsCont = document.getElementById('second')
const minutescont = document.getElementById('minutes')
const hoursCont = document.getElementById('hours')
const daysCont = document.getElementById('days')
const launch2023 = document.getElementById('launch2023')
const contdown = document.getElementById('contdown')

//inicio do contador
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


//modal Formulario
function btnForm() {
    document.getElementById('container-left').style.display = "none";
    document.getElementById('signUp').style.display = 'flex'
}

function closeForm() {
    document.getElementById('container-left').style.display = "block";
    document.getElementById('signUp').style.display = 'none'
}



