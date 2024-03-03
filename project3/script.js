const redSlider = document.getElementById("redSlider")
const greenSlider = document.getElementById("greenSlider")
const blueSlider = document.getElementById("blueSlider")

const redvalueSpan = document.getElementById("redvalue")
const greenvalueSpan = document.getElementById("greenvalue")
const bluevalueSpan = document.getElementById("bluevalue")

const colorbox = document.getElementById("color-box")
const copyButton = document.getElementById("copyButton")
const inputType = document.getElementById("inputType")

redSlider.addEventListener('input',updateColor)
greenSlider.addEventListener('input',updateColor)
blueSlider.addEventListener('input',updateColor)
copyButton.addEventListener('click',updateRgb)
    function updateColor() {
        const redValue = redSlider.value
        const greenValue = greenSlider.value
        const blueValue = blueSlider.value

        // console.log(redValue,greenValue,blueValue)

        const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})` 
        console.log(rgbColor)

        colorbox.style.backgroundColor = rgbColor

        redvalueSpan.textContent = redValue
        greenvalueSpan.textContent = greenValue
        bluevalueSpan.textContent = blueValue

        inputType.textContent = rgbColor

    }
    updateColor()

    function updateRgb(){
        const redValue = redSlider.value
        const greenValue = greenSlider.value
        const blueValue = blueSlider.value

        const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`

        navigator.clipboard.writeText(rgbColor).then(()=>{
            alert("RGB Color copied to clipbord.")
        }).catch((error)=>{
            console.error("Failed to copy the color")
        })


    }