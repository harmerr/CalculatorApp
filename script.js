const userInput = document.querySelectorAll('.inputElements')
let lastInput
let totalInput = document.getElementById('#calculatorInput')

userInput.forEach((input, i) => {
    input.addEventListener('click', () => {
        lastInput = input.innerHTML
        console.log(lastInput)
        totalInput = totalInput.append(lastInput)
    })
})


console.log(totalInput)
