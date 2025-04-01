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
document.querySelector('#equals').addEventListener('click', () => {getOperators(); operate(nums.first, currentOp, nums.second)});

function getOperators(){
    nums.first = +((display.value).split(currentOp))[0];
    nums.second = +((display.value).split(currentOp))[1];
}
function addOperator(e){
    if (currentOp == undefined) {
        type(e);
    }
    else {
        if (isNaN(+display.value[display.value.length - 1]))
        {
            
            display.value = display.value.slice(0, display.value.length - 1);
            type(e)
        } else{
            nums.first = +((display.value).split(e.target.value))[0];
            nums.second = +((display.value).split(e.target.value))[1];
            operate(nums.first, currentOp, nums.second);
            return;
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
function reset(){
    nums.first = undefined;
    nums.last = undefined;
    currentOp = undefined;
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
    if (num2 == 0) {
        alert("Error: it's not possible to divide by 0!");
        return 0;
    }
    return num1 / num2;
}

function operate(num1, operator = '+', num2 = 0){
    let result;
    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
    
        default:
            break;
    }
    console.log(result);
    reset();
    clear();
    display.placeholder = result ?? 0;
}