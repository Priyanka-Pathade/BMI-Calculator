
// const btn = document.getElementById('calculate');
// btn.addEventListener('click', function(){
//     let height = document.getElementById('height').value;
//     let weight = document.getElementById('weight').value;

//     if(height==''|| weight==''){
//         alert('Please fill out the input fields!');
//         return;
//     }
//     //BMI = weight in KG / (height in m * height in m)
//     height = height/100 //height is in cm so converted it into m here

//     let BMI = (weight/(height*height));
//     BMI = BMI.toFixed(2) // tofixed -> num of digits after decimal point

//     document.getElementById('result').innerHTML = BMI;
//     let status='';
//     if(BMI <18.5){
//         status="Underweight 😒";
//     }
//      if(BMI >=18.5 && BMI<25){
//         status="Normal Weight 😍";
//     }
//     if(BMI >=25 && BMI<30){
//         status="Overweight 😮";
//     }
//      if(BMI>=30){
//         status="Obese 😱";
//     }
//     document.querySelector('.comment').innerHTML = 
//      `<span id="comment">${status}</span>`;
// })

/*
inches to feet converter
    let height = 75; // this could be any number of inches
    let feet = Math.floor(height / 12);
    let inches = (height - (feet * 12));
*/

var age_slider = document.getElementById("age")
var age_output = document.getElementById("age-val");
age_output.innerHTML = age_slider.value+" Years";

age_slider.oninput = function() {   //when user changes input it will print new value to it
    age_output.innerHTML = this.value+" Years";
    calculate() //to calculat the bmi show chnages on display
}
//below code is for getting height value after user slide it make set for it on display

var height_slider = document.getElementById("height")   //will give value in inches
var height_output = document.getElementById("height-val");  
//getting setting value to that elemt
// applying inch to feet conversion formula
let feet = Math.floor(height_slider.value / 12);
let inches = (height_slider.value - (feet * 12));
height_output.innerHTML = feet+"'"+inches+"\""+" Feet";
//whenrver user chages the slider value changes should reflect on span value so that we have doen this

height_slider.oninput = function() {   //when user changes input it will print new bvalue to it
    // applying inch to weigth conversion formula
    let feet = Math.floor(this.value / 12);
    let inches = (this.value - (feet * 12));

    height_output.innerHTML = feet+"'"+inches+"\""+" Feet";
    //height_output.innerHTML = this.value+" Feet";
    calculate() //to calculat the bmi show chnages on display
}

//below code is for getting weight value after user slide it make set for it on display

var weight_slider = document.getElementById("weight")
var weight_output = document.getElementById("weight-val");
weight_output.innerHTML = weight_slider.value+" Kgs";
//whenrver user chages the slider value changes should reflect on span value so that we have doen this

weight_slider.oninput = function() {   //when user changes input it will print new bvalue to it
    weight_output.innerHTML = this.value+" Kgs";
    calculate() //to calculat the bmi show chnages on display

}

//whenever user chanegs any input calling this function from the above mention functions to calculte bmi
function calculate(){
        //converting heigth from inch to cm

    height_cm = Math.floor(height_slider.value/0.39370)
    var bmi_val;
    var result = document.getElementById('result');
    var category = document.getElementById('comment');

    bmi_val = (weight_slider.value / Math.pow( (height_cm/100), 2 )).toFixed(1);
    result.textContent = bmi_val;

    if(bmi_val < 18.5){
        category_val = "Underweight 😒";
        result.style.color = "#ffc44d";
    }
    else if( bmi_val >= 18.5 && bmi_val <= 24.9 ){
        category_val = "Normal Weight 😍";
        result.style.color = "#0be881";
    }
    else if( bmi_val >= 25 && bmi_val <= 29.9 ){
        category_val = "Overweight 😮";
        result.style.color = "#ff884d";
    }
    else{
        category_val = "Obese 😱";
        result.style.color = "#ff5e57";
    }
    category.textContent  = category_val;

}