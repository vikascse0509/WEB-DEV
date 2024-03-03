// document.getElementById('detectBtn').addEventListener('onclick',detectChar)
function detectChar() {
    const characterInput = document.getElementById('charInput')
    const result = document.getElementById('result')

    const character = characterInput.value
    if(isASCII(character)){
        result.innerText = 'The entered character is an ASCII character'
    }
    else{
        result.innerText = 'The entered character is an unicode character'
    }
}

function isASCII(character){
    return character.charCodeAt(0)<=127
}