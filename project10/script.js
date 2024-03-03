function calculateLove() {
    const urName = document.getElementById('urname').value.trim()
    const pName = document.getElementById('pname').value.trim()

    if (urName==="" || pName==="") {
        alert('Enter both names')
    }

    const lovePercentage = Math.floor(Math.random() * 101)
    const result = document.getElementById('result')

    result.innerHTML = `${urName} and ${pName}'s love percentage :${lovePercentage}%`

    if(lovePercentage < 30){
        result.innerHTML += "<br> Not a great Match. Keep looking!"
    }
    else if(lovePercentage>=30 && lovePercentage<70){
        result.innerHTML += "<br> There is potential. Give it a try!"
    }
    else{
        result.innerHTML += "<br> Great Match! Love is in the air!"
    }

}