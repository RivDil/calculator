
let addB = document.getElementById('addB');
let subB = document.getElementById('subB');
let multB = document.getElementById('multB');
let divb = document.getElementById('divB');

let equals = document.getElementById('equals');
let clear = document.getElementById('clear');

let input = document.getElementById('input');


function add(a,b){
    return a + b
}
function substract(a,b){
    return a - b
}
function multiply(a,b){
    return a * b
}
function divide(a,b){
    return a / b
}



function operate(operator,a,b){
    if (operator === '-'){
        return substract(a,b)
    }else if (operator === '+'){
        return add(a,b)
    }else if (operator === '*'){
        return multiply(a,b)
    }else if (operator === '/'){
        return divide(a,b)
    }
}

let operatorPressed = true;
function getValue(){
    
    let pressedOperationButton =  document.querySelectorAll('.operatorButtons');
    
    document.querySelectorAll('.operatorButtons').forEach(i=>i.disabled = true);
    document.getElementById('subB').disabled = false;
    document.querySelectorAll('.allButtons').forEach(i => i.addEventListener('click', function(e){
        if (pressedOperationButton.forEach(i => i.contains(e.target))){
            input.value += i.innerHTML;
            document.querySelectorAll('.operatorButtons').forEach(i=>i.disabled = true)
            operatorPressed = true;
        }else{
            document.querySelectorAll('.operatorButtons').forEach(i=>i.disabled = false)
            input.value += i.innerHTML;
            operatorPressed = false;
        }
        
    })
    )
}
getValue()









