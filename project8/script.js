document.getElementById('bmiform').addEventListener('submit',function(e){
    e.preventDefault()

    const gender = document.getElementById('gender').value
    const age = parseInt(document.getElementById('age').value)
    const heightfeet = parseInt(document.getElementById('height-feet').value)
    const heightinches = parseInt(document.getElementById('height-inches').value)
    const weight = parseFloat(document.getElementById('weight').value)

    if(gender && age && heightfeet && heightinches && weight )
    {
        const height = ((heightfeet * 12)+ heightinches)*0.0254
        const bmi = weight/(height * height)

        const resulElem = document.getElementById('result')

        let category = ''
        if (bmi < 18.5) {
            category = 'underweight'
            
        }
        else if(bmi>=18.5 && bmi <24.9){
            category = 'Normal Weight'
        }
        else if(bmi>=24.9 && bmi<29.9){
            category = 'Overweight'
        }
        else{
            category = 'Obesity'
        }
        let finalResult = 'Your BMI : '+ bmi.toFixed(2) + '<br>'
        finalResult += 'category : ' + category
        resulElem.innerHTML = finalResult  
    }

})