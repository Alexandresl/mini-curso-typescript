"use strict";
var input1 = document.querySelector('#num1');
var input2 = document.querySelector('#num2');
var button = document.querySelector('#button');
function sum(a, b) {
    return a + b;
}
button.addEventListener("click", function () {
    console.log(sum(Number(input1.value), Number(input2.value)));
});
