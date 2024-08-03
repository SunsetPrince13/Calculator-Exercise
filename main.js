let btn1 = document.getElementById("b1");
let btn2 = document.getElementById("b2");
let btn3 = document.getElementById("b3");
let btn4 = document.getElementById("b4");
let btn5 = document.getElementById("b5");
let btn6 = document.getElementById("b6");
let btn7 = document.getElementById("b7");
let btn8 = document.getElementById("b8");
let btn9 = document.getElementById("b9");
let btn0 = document.getElementById("b0");

let numberBox = document.getElementById("Number");
let countOfNumbers = document.createTextNode(0);

let plusbtn = document.getElementById("plus");
let minusbtn = document.getElementById("minus");
let multiplicationbtn = document.getElementById("multiplication");
let divisionbtn = document.getElementById("division");
let toPower = document.getElementById("power");

let clearbtn = document.getElementById("clear");
let sqrt_btn = document.getElementById("square_root");
let inverse_btn = document.getElementById("inverse");
let square_btn = document.getElementById("square");
let decimal_btn = document.getElementById("decimal_point");
let plus_minus = document.getElementById("plus_or_minus");
let antilog_btn = document.getElementById("antilog");

let sin_btn = document.getElementById("sin");
let cosin_btn = document.getElementById("cosine");
let tan_btn = document.getElementById("tan");
let log_btn = document.getElementById("log");
let pi_btn = document.getElementById("pi");
let sqrtdigit_btn = document.getElementById("sqrt_digits");
let percent_btn = document.getElementById("percent");

numberBox.appendChild(countOfNumbers)


let temp = 0;
let newtemp = 0;

clear.addEventListener("click", function(){
    temp = 0;
    newtemp = 0;
    numberBox.innerHTML = 0;
})

btn1.addEventListener("click", function(){
    
    countOfNumbers = document.createTextNode(1);

    numberBox.appendChild(countOfNumbers);
})


btn2.addEventListener("click", function(){
    
    countOfNumbers = document.createTextNode(2);

    numberBox.appendChild(countOfNumbers);
})

btn3.addEventListener("click", function(){
    countOfNumbers = document.createTextNode(3);

    numberBox.appendChild(countOfNumbers);
})
btn4.addEventListener("click", function(){
    countOfNumbers = document.createTextNode(4);

    numberBox.appendChild(countOfNumbers);
})
btn5.addEventListener("click", function(){
    countOfNumbers = document.createTextNode(5);

    numberBox.appendChild(countOfNumbers);
})
btn6.addEventListener("click", function(){
    countOfNumbers = document.createTextNode(6);

    numberBox.appendChild(countOfNumbers);
})
btn7.addEventListener("click", function(){
    countOfNumbers = document.createTextNode(7);

    numberBox.appendChild(countOfNumbers);
})
btn8.addEventListener("click", function(){
    countOfNumbers = document.createTextNode(8);

    numberBox.appendChild(countOfNumbers);
})
btn9.addEventListener("click", function(){
    countOfNumbers = document.createTextNode(9);

    numberBox.appendChild(countOfNumbers);
})

btn0.addEventListener("click", function(){
    countOfNumbers = document.createTextNode(0);

    numberBox.appendChild(countOfNumbers);
})

pi_btn.addEventListener("click", function(){
    answer = Math.PI;
    numberBox.innerHTML = answer;
    console.log(answer);
})

decimal_btn.addEventListener("click", function(){
    countOfNumbers = document.createTextNode(".");

        numberBox.appendChild(countOfNumbers);

        console.log(countOfNumbers);


    
})


plusbtn.addEventListener("click", function(){
    temp = numberBox.innerHTML;
    //countOfNumbers = document.createTextNode(0);
    numberBox.innerHTML = newtemp;
    operandType = "+";
    
})

minusbtn.addEventListener("click", function(){
    temp = numberBox.innerHTML;
    //countOfNumbers = document.createTextNode(0);
    numberBox.innerHTML = 0;
    operandType = "-";
    
})

multiplicationbtn.addEventListener("click", function(){
    temp = numberBox.innerHTML;
    //countOfNumbers = document.createTextNode(0);
    numberBox.innerHTML = 0;
    operandType = "*";
    
})

divisionbtn.addEventListener("click", function(){
    temp = numberBox.innerHTML;
    //countOfNumbers = document.createTextNode(0);
    numberBox.innerHTML = 0;
    operandType = "/";
    
})

toPower.addEventListener("click", function(){
    temp = numberBox.innerHTML;
    //countOfNumbers = document.createTextNode(0);
    numberBox.innerHTML = 0;
    operandType = "^";
    
})

sqrtdigit_btn.addEventListener("click", function(){
    temp = numberBox.innerHTML;
    //countOfNumbers = document.createTextNode(0);
    numberBox.innerHTML = 0;
    operandType = "x^1/y";
    
})

plus_minus.addEventListener("click", function(){
    temp = numberBox.innerHTML;
    //countOfNumbers = document.createTextNode(0);
    numberBox.innerHTML = 0;
    answer = -(Number(temp)) // || -(Number(newtemp));
    numberBox.innerHTML = answer;
    // operandType = "+-";
    
})

antilog_btn.addEventListener("click", function(){
    temp = numberBox.innerHTML;
    //countOfNumbers = document.createTextNode(0);
    numberBox.innerHTML = 0;
    answer = Math.pow(10, Number(temp))
    numberBox.innerHTML = answer;
    // operandType = "+-";
    
})

sqrt_btn.addEventListener("click", function(){
    temp = numberBox.innerHTML;
    //countOfNumbers = document.createTextNode(0);
    operandType = "x^1/2";
    answer = Math.sqrt(Number(temp), 2)
    numberBox.innerHTML = answer;
})

square_btn.addEventListener("click", function(){
    temp = numberBox.innerHTML;
    //countOfNumbers = document.createTextNode(0);
    operandType = "x^1/2";
    answer = Math.pow(Number(temp), 2)
    numberBox.innerHTML = answer;
})

inverse_btn.addEventListener("click", function(){
    temp = numberBox.innerHTML;
    //countOfNumbers = document.createTextNode(0);
    operandType = "x^1/2";
    answer = 1/Number(temp)
    numberBox.innerHTML = answer;
})

sin_btn.addEventListener("click", function(){
    temp = numberBox.innerHTML;
    //operandType = "sin";
    answer = Math.sin(Number(temp));
    numberBox.innerHTML = answer;
    console.log(answer)
})

cosin_btn.addEventListener("click", function(){
    temp = numberBox.innerHTML;
    //operandType = "sin";
    answer = Math.cos(Number(temp));
    
    numberBox.innerHTML = answer;
    console.log(`Cos ${Number(temp)} = ${answer}`)
})

log_btn.addEventListener("click", function(){
    temp = numberBox.innerHTML;
    //operandType = "sin";
    answer = Math.log(Number(temp));
    numberBox.innerHTML = answer;
    console.log(`Cos ${Number(temp)} = ${answer}`)
})

percent_btn.addEventListener("click", function(){
    temp = numberBox.innerHTML;
    //operandType = "sin";
    answer = Number(temp)*(Number(newtemp)/100);
    numberBox.innerHTML = answer;
    console.log(answer)
})

equals.addEventListener("click", function(){
    newtemp = numberBox.innerHTML;
    numberBox.innerHTML = newtemp
    
    console.log(temp)
    console.log(newtemp)

    switch (operandType) {
        case "+":
            
            if(Number(temp) == 0 || Number(newtemp) == 0){
                answer = "Cant divide by 0";
            }else{
                answer = Number(temp) + Number(newtemp)
            }
            break;
        case "-":
            answer = Number(temp) - Number(newtemp)
            break;

        case "*":
            answer = Number(temp) * Number(newtemp)
            break;

        case "/":
            answer = Number(temp) / Number(newtemp)
            break;

        case "^":
            answer = Math.pow(Number(temp), Number(newtemp))
            break;


        case "x^1/y":
            answer = Math.pow(Number(temp), 1/Number(newtemp))
            break;
    }

    numberBox.innerHTML = answer;
})  

document.addEventListener("keydown", function(e){
    if(e.key == 1 ||
    e.key == 2 ||
    e.key == 3 ||
    e.key == 4 ||
    e.key == 5 ||
    e.key == 6 ||
    e.key == 7 ||
    e.key == 8 ||
    e.key == 9 ||
    e.key == 0  ){
        countOfNumbers = document.createTextNode(e.key);

    numberBox.appendChild(countOfNumbers);
    }
})