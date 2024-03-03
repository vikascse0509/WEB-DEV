let hr = document.getElementById('hour')
let min = document.getElementById('min')
let sec = document.getElementById('sec')

function displayTime() {
    let date = new Date()
    // console.log(date)
    let hour = date.getHours()
    let mint = date.getMinutes()
    let secs = date.getSeconds()

    let hRotation = 30*hour + mint/2
    let mRotation = 6*mint
    let sRotation = 6*secs
console.log(hRotation,mRotation,sRotation)
hr.style.transform = `rotate(${hRotation}deg)`
min.style.transform = `rotate(${mRotation}deg)`
sec.style.transform = `rotate(${sRotation}deg)`
}
setInterval(displayTime,1000)