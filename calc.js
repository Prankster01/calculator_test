let num1 = "";
let num2 = "";
let ans;
let opp = "";
let action = 3;
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const opper = document.getElementById("opper");
const answer = document.getElementById("answer");

function reset(){
    let num1 = "";
    let num2 = "";
    let ans;
    let opp = "";

    number1.textContent = num1;
    number2.textContent = num2;
    answer.textContent = ans;
    opper.textContent = opp;
}

function stack(number, after){
    if (number === "0" || number === ""){
        number = after;
    }
    else{
        number = number+after;
    }

    return number;
}

//start of nonsense ---------------------------------------------------------------------------------------

function n1(){
    if (action === 3){
        reset();
        num1 = stack(num1,"1");
        action = 1;
        number1.textContent = num1;
    }
    else if(action === 1){
        num1 = stack(num1,"1");
        number1.textContent = num1;
    }
    else{
        num2 = stack(num2,"1");
        number2.textContent = num2;
    }
}

function n2(){
    if (action === 3){
        reset();
        num1 = stack(num1,"2");
        action = 1;
        number1.textContent = num1;
    }
    else if(action === 1){
        num1 = stack(num1,"2");
        number1.textContent = num1;
    }
    else{
        num2 = stack(num2,"2");
        number2.textContent = num2;
    }
}

function n3(){
    if (action === 3){
        reset();
        num1 = stack(num1,"3");
        action = 1;
        number1.textContent = num1;
    }
    else if(action === 1){
        num1 = stack(num1,"3");
        number1.textContent = num1;
    }
    else{
        num2 = stack(num2,"3");
        number2.textContent = num2;
    }
}

function n4(){
    if (action === 3){
        reset();
        num1 = stack(num1,"4");
        action = 1;
        number1.textContent = num1;
    }
    else if(action === 1){
        num1 = stack(num1,"4");
        number1.textContent = num1;
    }
    else{
        num2 = stack(num2,"4");
        number2.textContent = num2;
    }
}

function n5(){
    if (action === 3){
        reset();
        num1 = stack(num1,"5");
        action = 1;
        number1.textContent = num1;
    }
    else if(action === 1){
        num1 = stack(num1,"5");
        number1.textContent = num1;
    }
    else{
        num2 = stack(num2,"5");
        number2.textContent = num2;
    }
}

function n6(){
    if (action === 6){
        reset();
        num1 = stack(num1,"6");
        action = 1;
        number1.textContent = num1;
    }
    else if(action === 1){
        num1 = stack(num1,"6");
        number1.textContent = num1;
    }
    else{
        num2 = stack(num2,"6");
        number2.textContent = num2;
    }
}

function n7(){
    if (action === 3){
        reset();
        num1 = stack(num1,"7");
        action = 1;
        number1.textContent = num1;
    }
    else if(action === 1){
        num1 = stack(num1,"7");
        number1.textContent = num1;
    }
    else{
        num2 = stack(num2,"7");
        number2.textContent = num2;
    }
}

function n8(){
    if (action === 8){
        reset();
        num1 = stack(num1,"8");
        action = 1;
        number1.textContent = num1;
    }
    else if(action === 1){
        num1 = stack(num1,"8");
        number1.textContent = num1;
    }
    else{
        num2 = stack(num2,"8");
        number2.textContent = num2;
    }
}

function n9(){
    if (action === 3){
        reset();
        num1 = stack(num1,"9");
        action = 1;
        number1.textContent = num1;
    }
    else if(action === 1){
        num1 = stack(num1,"9");
        number1.textContent = num1;
    }
    else{
        num2 = stack(num2,"9");
        number2.textContent = num2;
    }
}

function n0(){
    if (action === 3){
        reset();
        num1 = stack(num1,"0");
        action = 1;
        number1.textContent = num1;
    }
    else if(action === 1){
        num1 = stack(num1,"0");
        number1.textContent = num1;
    }
    else{
        num2 = stack(num2,"0");
        number2.textContent = num2;
    }
}

//end of nonsense ------------------------------------------------------------------------------------------

function plus(){
    if (action === 1){
        opp = "+";
        opper.textContent = opp;
        action = 2;
    }
    
    else{
        answer.textContent = "Error, you can only put an operator after a number! Calculator only accepts an operator at a time!";
    }
}