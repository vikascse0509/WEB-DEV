function isPalindrom(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,'')
    console.log(cleanStr)
    const revstr = cleanStr.split('').reverse().join('')
    console.log(revstr)
    return cleanStr === revstr
}

function palindromeChecker(){
    const inputText = document.getElementById("inputText")
    const result = document.getElementById("result")
    
    if(isPalindrom(inputText.value)){
        result.textContent = `"${inputText.value}" is a palidrome`
    }else{
        result.textContent = `"${inputText.value}" is not a palidrome`
    }
    result.classList.add('fadeIn')
    inputText.value = ''
}




document.getElementById("checkButton").addEventListener("click",palindromeChecker)