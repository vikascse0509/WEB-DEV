document.getElementById('incrementBtn').addEventListener('click',incrementCounter)
document.getElementById('decrementBtn').addEventListener('click',decrementCounter)
document.getElementById('resetBtn').addEventListener('click',resetButton)

let counterDisplay = document.getElementById('counterDisplay')
let countervalue = 0

function updateCounterDisplay() {
counterDisplay.textContent = countervalue    
}

function incrementCounter() {
    countervalue++
    updateCounterDisplay()
}

function decrementCounter() {
    if (countervalue > 0) {
        countervalue--
        updateCounterDisplay()
        
    }
}

function resetButton() {
    countervalue = 0
    updateCounterDisplay()
}
