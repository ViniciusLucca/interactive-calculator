let btnItems = document.querySelectorAll('.btnItem');
let btnNums = document.querySelectorAll('.btnNum');
let btnOps = document.querySelectorAll('.btnOperator');
let display = document.querySelector('#displayText');
let currentOp;
let nums = {first: undefined, second: undefined};

btnNums.forEach(element => {
    element.addEventListener('click', type);
});
btnOps.forEach(element => {
    element.addEventListener('click', addOperator);
})
document.querySelector('#clear').addEventListener('click', clear);
document.querySelector('#equals').addEventListener('click', () => operate(nums.first, currentOp, nums.second));

function addOperator(e){
    if (currentOp == undefined) {
        type(e);
    }
    else {
        if (isNaN(+display.value[display.value.length - 1]))
        {
            display.value = toString(Array.from(display.value).splice(display.value.length - 1, 1));
        } else{
            nums.first = +((display.value).split(e.target.value))[0];
            nums.second = +((display.value).split(e.target.value))[1];
            console.log(operate(nums.first, currentOp, nums.second))
        }
    }
    currentOp = e.target.value;

}
function type(e){
    let char = e.target.value;
    display.value += char;
}

function clear(){
    display.value = '';
}

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(num1, operator, num2){
    switch (operator) {
        case "+":
            console.log(add(num1, num2));
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
    
        default:
            break;
    }
}