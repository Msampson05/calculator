"use strict";
window.onload = init;
function init() {
    // Find HTML elements 

    const number1Field = document.getElementById("number1Field");
    
    const number2Field = document.getElementById("number2Field");
    

     // Buttons
    const addBtn = document.getElementById("addBtn");
    addBtn.onclick = onAddBtnClicked; 

    const subBtn = document.getElementById("subBtn");
    //addBtn.onclick = onSubBtnClicked; 

    const mulBtn = document.getElementById("mullBtn");
    //addBtn.onclick = onMulBtnClicked;

    const divBtn = document.getElementById("divBtn");
    //addBtn.onclick = onDivBtnClicked; 


    
}
function onAddBtnClicked() {
    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");
    let number1 = Number(number1Field.value);
    let number2 = Number(number2Field.value);
    let answer = number1 + number2;
    const answerField = document.getElementById("answerField");
    answerField.value = answer;
}



