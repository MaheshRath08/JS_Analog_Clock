let hour = document.querySelector(".hour")
let min = document.querySelector(".min")
let sec = document.querySelector(".sec")

setInterval(myClock, 1000)

function myClock(){
    let d = new Date()
    let h = d.getHours() 
    let m = d.getMinutes() 
    let s = d.getSeconds() 

    hour.style.transform = `rotate(${30*h + m/2}deg)`
    min.style.transform = `rotate(${6*m}deg)`
    sec.style.transform = `rotate(${6*s}deg)`
}