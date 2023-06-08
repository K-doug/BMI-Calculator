//BMI Calculator

"use strict";

window.onload = function Calculate (){

    document.getElementById("calculate").addEventListener("click",function(){

        var heightft = parseInt(document.getElementById("feet").value);
        var heightin = parseInt(document.getElementById("inches").value);
        console.log(heightft + heightin);

        var height = heightft*12;

        height += heightin;

        var heightCm = (height * 2.54); 

        var yourHeight = "You height of " + heightft + " ft" + heightin + " inch is " + height + " in inches and " + heightCm + " in cm";
        document.getElementById("heightCalculation").innerHTML = yourHeight;

        var weightst = parseInt(document.getElementById("stones").value);
        var weightpd = parseInt(document.getElementById("pounds").value);

        var weight = weightst * 14;

        weight += weightpd;

        var weightKg = (weight/2.2046);
        
        weightKg = Math.round(weightKg *100)/100;

        var yourWeight = "You weight of " + weightst + "st " + weightpd + "lb is " + weight + " in lbs and  " + weightKg + " in kgs";
        document.getElementById("weightCalculation").innerHTML = yourWeight;

        var heightM = heightCm * 0.01

        var bmi = Math.round((weightKg / (heightM * heightM))*100)/100;

        var bmiCalc = "Your BMI is " + bmi;
        document.getElementById("BMI").innerHTML = bmiCalc;


        if (bmi < 18.5) {
            document.getElementById("result").innerHTML = "You are underweight according to NHS Guidelines"
        } else if (bmi >= 18.5 && bmi <= 24.9){
            document.getElementById("result").innerHTML = "You are a healthy weight according to NHS Guidelines"
        } else if(bmi >=25 && bmi <=29.9){
            document.getElementById("result").innerHTML = "You are overweight according to NHS Guidelines"
        } else {
            document.getElementById("result").innerHTML = "You are obese according to NHS Guidelines"
        };

    });

};


