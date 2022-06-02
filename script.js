const btn = document.getElementById('calculate');
btn.addEventListener('click', function(){
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;

    if(height==''|| weight==''){
        alert('Please fill out the input fields!');
        return;
    }
    //BMI = weight in KG / (height in m * height in m)
    height = height/100 //height is in cm so converted it into m here

    let BMI = (weight/(height*height));
    BMI = BMI.toFixed(2) // tofixed -> num of digits after decimal point

    document.getElementById('result').innerHTML = BMI;
    let status='';
    if(BMI <18.5){
        status="underweight";
    }
     if(BMI >=18.5 && BMI<25){
        status="healthy";
    }
    if(BMI >=25 && BMI<30){
        status="overweight";
    }
     if(BMI>=30){
        status="Obese";
    }
    document.querySelector('.comment').innerHTML = `Comment:
     You are <span id="comment">${status}</span>`;
})