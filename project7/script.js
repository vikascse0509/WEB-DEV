const containerEl = document.querySelector('.container')

for (let index = 0; index < 50; index++) {
    const colorcontainerEl = document.createElement("div")
    colorcontainerEl.classList.add("color-container")

    const colorcodeEl = document.createElement("span")
    colorcodeEl.classList.add("color-code")
    colorcontainerEl.appendChild(colorcodeEl)

    const copyButtonEl = document.createElement("button")
    copyButtonEl.innerText = "Copy"
    colorcontainerEl.appendChild(copyButtonEl)

    containerEl.appendChild(colorcontainerEl)
    console.log(containerEl)
}

function randomColor() {
    const chars = "123456789ABCDEF"
    const colocodeLength = 6
    let colorCode = ""

    for (let index = 0; index < colocodeLength; index++) {
        const randomNum = Math.floor(Math.random()*chars.length)
        colorCode += chars.substring(randomNum,randomNum+1)
        console.log(colorCode)
    }
    return colorCode
}
const colorContainerEls = document.querySelectorAll(".color-container")
generateColor()
function generateColor() {
    for(let i=0;i<colorContainerEls.length;i++){
        const colorcontainerEl = colorContainerEls[i]
        const newcolorCode = randomColor()
        const colorcodeEl = colorcontainerEl.querySelector(".color-code")

        colorcontainerEl.style.backgroundColor = "#" + newcolorCode
        colorcodeEl.innerText = "#" + newcolorCode
    }
}

colorContainerEls.forEach((colorcontainerEl)=>{
    const copyButtonEl = colorcontainerEl.querySelector("button")
    const colorcodeEl = colorcontainerEl.querySelector(".color-code")
    copyButtonEl.addEventListener('click',()=>{
        const colorCode = colorcodeEl.innerText
        copytoClipboard(colorCode)
    })
})


function copytoClipboard(text) {
    navigator.clipboard.writeText(text)
    .then(()=>{
        alert('Copied to clipboard'+text)
    })
    .catch((error)=>{
        console.log('Failed to copy to clipboard',error)
    })
}