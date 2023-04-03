const pi = 3.14159265359;
const e = 2.718281828459;

const operations = document.getElementsByClassName('operations')[0];
let input = document.getElementById('expression');
let output = document.getElementsByClassName('output')[0];
let exp = input.value;
console.log(expression);

operations.addEventListener('mousedown', (event) => {
    let id;
    if(event.target.tagName == "svg") id = event.target.parentElement.id;
    else id = event.target.id;
    document.getElementById(id).style.backgroundColor = '#91C1E7';

});

operations.addEventListener('mouseup', (event) => {
    let id;
    if(event.target.tagName == "svg") id = event.target.parentElement.id;
    else id = event.target.id;
    let elem = document.getElementById(id);
    if(elem.className === 'operations-item-number') elem.style.backgroundColor = '#FDFDFD';
    else elem.style.backgroundColor = '#F8F8F8';
});

operations.addEventListener("click", (event) => {
    let id;
    if(event.target.tagName == "svg") id = event.target.parentElement.id;
    else id = event.target.id;

    let exp = input.value;

    if(id=='clear') input.value = '';

    else if(id=='backspace') input.value = exp.slice(0, exp.length-1);
    
    else if(id=='square') {
        if(isNaN(exp)) {
            let index = findNumberIndex(exp);
            if(index == exp.length) output.innerHTML = "Invalid Operation";
            else {
                let num = +exp.slice(index);
                input.value = exp.slice(0, index) + num*num;
            }
        }
        else input.value = +exp * +exp;
    }    

    else if(id=='inverse') {
        if(isNaN(exp)) {
            let index = findNumberIndex(exp);
            if(index == exp.length) output.innerHTML = "Invalid Operation";
            else {
                let num = +exp.slice(index);
                input.value = exp.slice(0, index) + 1/num;
            }
        }
        else input.value = 1/+exp;
    }
});

function findNumberIndex(str) {
    let i = str.length-1;
    while((!isNaN(str[i]) || str[i]=='.') && i>=0) {
        i--;
    }
    return i+1;
}