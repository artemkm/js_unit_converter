/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let toConvert = document.getElementById("to-convert")
const btnConvert = document.getElementById("btn-convert")
let cvtMeter = document.getElementById("cvt-meter")
let cvtLiter = document.getElementById("cvt-liter")
let cvtKilos = document.getElementById("cvt-kilos")

btnConvert.addEventListener('click', function() {
    let cifer = Number(toConvert.value)

    // forward
    let feetInmeter = cifer * 3.281
    feetInmeter = feetInmeter.toFixed(3)
    let gallonsInLiter = cifer * 0.264
    gallonsInLiter = gallonsInLiter.toFixed(3)
    let poundsInKilo = cifer * 2.204
    poundsInKilo = poundsInKilo.toFixed(3)

    // backward
    let metersInFoot = cifer / 3.281
    metersInFoot = metersInFoot.toFixed(3)
    let litersInGallon = cifer / 0.264
    litersInGallon = litersInGallon.toFixed(3)
    let kilosInPound = cifer / 2.204
    kilosInPound = kilosInPound.toFixed(3)

    let meterLine = `${cifer} meters = ${feetInmeter} feet | ${cifer} feet = ${metersInFoot} meters`
    let literLine = `${cifer} liters = ${gallonsInLiter} gallons | ${cifer} gallons = ${litersInGallon} liters`
    let kilosLine = `${cifer} kilos = ${poundsInKilo} pounds | ${cifer} pounds = ${kilosInPound} kilos`

    cvtMeter.textContent = meterLine
    cvtLiter.textContent = literLine
    cvtKilos.textContent = kilosLine
})
