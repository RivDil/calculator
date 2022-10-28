
let addB = document.getElementById('addB');
let subB = document.getElementById('subB');
let multB = document.getElementById('multB');
let divb = document.getElementById('divB');

let equals = document.getElementById('equals');
let clear = document.getElementById('clear');

let input = document.getElementById('input');

let plusOrMinus = document.getElementById('plusOrMinus');


function add(a,b){
    return a + b
}
function substract(a,b){
    if (a < 0 && b < 0){
        return  a + b
    }else{

        return a - b
    }
}
function multiply(a,b){
    return a * b
}
function divide(a,b){
    if (a == 0 || b == 0){
        return 'SINTAX ERROR'
    }else{
        
        return a / b
    }
}
function percentage(a,b){
    return (a/b)*100
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
    }else if (operator === '%'){
        return  percentage (a,b)
    }
}


let dotButton = true;
let numbutton = true;
let operatorPressed = false;


function KeyboardB(){
    document.addEventListener('keyup', (event) => {
        var name = event.key;
        var code = event.code;

        if(name == 0 ||name == 1 || name == 2 || name == 3 || name == 4|| name == 5|| name == 6|| name == 7|| name == 8|| name == 9){
            if(numbutton == false){
                document.querySelectorAll('.numButtons').disabled = true;
            }
            else if (input.value.length <= 0){
                input.value += event.key
                operatorPressed = true;
            }else if (input.value === 'SINTAX ERROR'){
                document.querySelectorAll('.numButtons').disabled = true;
            }else{
                input.value += event.key;
            } 
        }else if (name == '*' || name == '/' || name == '-' || name == '+' || name == '%'){
            if(operatorPressed === true){
                input.value += event.key;
                operatorPressed = false;
                document.querySelectorAll('.operatorButtons').disabled = true;
                numbutton = true;
                dotButton = true;
                document.getElementById('dot').disabled = false;
            }
        }else if (name == 'Backspace'){
            eliminateC()
        }else if(name == 'Escape'){
            clearDisplay()
        }else if(name == '.'){
            if (dotButton == true){
                input.value += document.getElementById('dot').value;
                document.getElementById('dot').disabled = true;
                dotButton = false;
            }
        }else if (name == 'Enter'){
            inputValue()
        }else{
            return
        }

        // Alert the key name and key code on keydown
        console.log(`Key pressed ${name} \r\n Key code value: ${code}`);
    }, false);
}



function calculator(){




        document.querySelectorAll('.numButtons').forEach(i => i.addEventListener('click', function(){
            if(numbutton == false){
                document.querySelectorAll('.numButtons').disabled = true;
            }
            else if (input.value.length <= 0){
                input.value += i.innerHTML
                operatorPressed = true;
            }else if (input.value === 'SINTAX ERROR'){
                document.querySelectorAll('.numButtons').disabled = true;
            }else{
                input.value += i.innerHTML
            }
        })
        )


        document.querySelectorAll('.operatorButtons').forEach(i=>i.addEventListener('click', function(){
            if(operatorPressed === true){
                input.value += i.innerHTML;
                operatorPressed = false;
                document.querySelectorAll('.operatorButtons').disabled = true;
                numbutton = true;
                dotButton = true;
                document.getElementById('dot').disabled = false;
            }
        }))

        document.getElementById('dot').addEventListener('click',()=>{
            if (dotButton == true){
                input.value += document.getElementById('dot').value;
                document.getElementById('dot').disabled = true;
                dotButton = false;
            }
        });

        KeyboardB()

}
function inputValue(){
    let regex = /[^.0-9]/g;
    if (input.value.length <= 0 || input.value.match(regex) == null){
        input.value = 'SINTAX ERROR';
        document.querySelectorAll('.numButtons').disabled = true;
    }else{
        if (input.value.match(regex).length >= 2){
            console.log('is a operation with 2 or more than two operators');
            let regexNums = /[-?!][\d.]+|[\d.]+/g;
            let divide = input.value.match(regexNums);
            let operator = input.value.match(regex);
            console.log(operator[1]);
            console.log(divide);
            input.value = operate(operator[1],parseFloat(divide[0]),parseFloat(divide[1]));
            operatorPressed = true;
            numbutton = false;
            dotButton = true;
            return
            
        }else{
            let operator = input.value.match(regex);
            let divide = input.value.split(`${operator}`);
            console.log(operator);
            console.log(divide);
            input.value = operate(operator[0],parseFloat(divide[0]),parseFloat(divide[1]));
            operatorPressed = true;
            numbutton = false;
            dotButton = true;
            return
        }
    }
}
function clearDisplay(){
    input.value = '';
    operatorPressed = false;
    numbutton = true;
    dotButton = true;
    document.getElementById('dot').disabled = false
}

function eliminateC(){
    if (input.value == 'SINTAX ERROR'){
        return
    }else{
        let divide = input.value.split('')
        divide.pop();
        console.log(divide);
        input.value = divide.join('');

    }
}
calculator()









