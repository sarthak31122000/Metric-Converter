const headingEl=document.getElementById('heading-el')
const lengthEl=document.getElementById('length-el')
const volumeEl=document.getElementById('volume-el')
const massEl=document.getElementById('mass-el')

let number=parseInt(headingEl.textContent)
// console.log(number)

let feet=(3.28084*number).toFixed(3)
let meters=(number/3.28084).toFixed(3)
let litres=(( 0.264172)*number).toFixed(3)
let gallons=(number/( 0.264172)).toFixed(3)
let pounds=(number*2.20462).toFixed(3)
let kilos=(number/(2.20462)).toFixed(3)


lengthEl.textContent=` ${number} meters = ${feet} feet | ${number} feet = ${meters} meters`
volumeEl.textContent=` ${number} liters = ${gallons} gallons | 0 gallons = ${litres} liters`
massEl.textContent=`${number} kilos = ${pounds} pounds | ${number} pounds = ${kilos} kilos`

