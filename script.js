const userInput = document.querySelectorAll('.inputElements')
const equals = document.querySelector(".evaluate")
const clearInput = document.querySelector(".clear")
const display = document.querySelector("#calculatorInput")
let totalInput = ''
let lastInput = ''

userInput.forEach((input, i) => {
    input.addEventListener('click', () => {
        lastInput = input.innerHTML
        console.log(lastInput)
        totalInput += lastInput
        document.querySelector("#calculatorInput").innerHTML = totalInput
    })
})

equals.addEventListener('click', () => {
    display.innerHTML = eval(totalInput)
    totalInput = display.innerHTML
})

clearInput.addEventListener('click', () => {
    totalInput = ''
    display.innerHTML = ''
})

function clearAll() {
    totalInput = ''
    display.innerHTML = ''
}
