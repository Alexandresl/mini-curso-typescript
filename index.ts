const input1 = document.querySelector('#num1') as HTMLInputElement;
const input2 = document.querySelector('#num2') as HTMLInputElement;
const button = document.querySelector('#button')!;

function sum(a: number, b: number) {
    return a + b;
}

button.addEventListener("click", function() {
    console.log(sum(Number(input1.value), Number(input2.value)));
});