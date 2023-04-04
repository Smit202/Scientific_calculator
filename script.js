const pi = Math.PI;
const e = Math.E;

let clickCount = 0;
let ops2 = document.querySelector('.operations-item:first-child');

const operations = document.getElementsByClassName('operations')[0];
let input = document.getElementById('expression');
let output = document.getElementsByClassName('output')[0];
let exp = input.value;
console.log(expression);

ops2.addEventListener('click', () => {
    if(clickCount%2==0) {
        ops2.style.backgroundColor = '#91C1E7';
        let square = document.getElementById('square');
        let squareRoot = document.getElementById('squareRoot');
        let power = document.getElementById('power');
        let powerOfTen = document.getElementById('powerOfTen');
        let logBase10 = document.getElementById('logBase10');
        let ln = document.getElementById('ln');

        square.innerHTML = 'x<sup>3</sup>';
        squareRoot.innerHTML = 'cube root';
        power.innerHTML = 'nth root';
        powerOfTen.innerHTML = '2<sup>x</sup>';
        logBase10.innerHTML = 'log<sub>y</sub>x';
        ln.innerHTML = 'e<sup>x</sup>';

        square.id = 'cube';
        squareRoot.id = 'cubeRoot';
        power.id = 'nRoot';
        powerOfTen.id = 'powerOfTwo';
        logBase10.id = 'logBaseY';
        ln.id = 'powerOfe';
        clickCount++;
    }
    else {
        ops2.style.backgroundColor = '#F8F8F8';
        let cube = document.getElementById('cube');
        let cubeRoot = document.getElementById('cubeRoot');
        let nRoot = document.getElementById('nRoot');
        let powerOfTwo = document.getElementById('powerOfTwo');
        let logBaseY = document.getElementById('logBaseY');
        let powerOfe = document.getElementById('powerOfe');

        cube.innerHTML = 'x<sup>2</sup>';
        cubeRoot.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" enable-background="new 0 0 128 128" viewBox="0 0 128 128"><path d="m40.091 125.046-29.423-44.505h-10.668v-10.189h16.158l17.095 25.86 11.128-93.35h83.619v10.189h-74.559zm35.145-19.218c6.353-.122 6.713-3.953 6.713-3.953 1.679-5.865 4.916-12.328 8.872-18.435 4.915 8.98 10.19 17.119 14.744 17.119 5.155 0 11.15-7.181 11.15-9.577-.12-3.47-4.915-.958-8.991-4.908-3.596-3.472-6.594-8.261-9.35-13.169 5.633-7.181 11.268-13.047 14.145-15.8.48-.48 2.517-1.915 2.517-3.234 0-1.796-2.758-2.512-5.154-2.512-2.039 0-3.836.239-6.954 2.873-2.877 2.393-6.114 5.627-9.471 9.335-3.357-6.462-6.114-11.492-8.631-11.492-5.633 0-10.429 3.953-10.429 5.627 0 2.276 1.918 2.276 3.836 4.072 1.918 2.035 4.435 6.343 7.192 11.492-9.47 12.089-17.622 25.019-17.622 28.489.001 1.558 1.679 4.073 7.433 4.073z" fill="#000"/></svg>';
        nRoot.innerHTML = 'x<sup>y</sup>';
        powerOfTwo.innerHTML = '10<sup>x</sup>';
        logBaseY.innerHTML = 'log';
        powerOfe.innerHTML = 'ln';

        cube.id = 'square';
        cubeRoot.id = 'squareRoot';
        nRoot.id = 'power';
        powerOfTwo.id = 'powerOfTen';
        logBaseY.id = 'logBase10';
        powerOfe.id = 'ln';
        clickCount++;
    }
});

operations.addEventListener('mousedown', (event) => {
    let id;
    if(event.target.tagName == "svg") id = event.target.parentElement.id;
    else if(event.target.tagName == "path") id = event.target.parentElement.parentElement.id;
    else if(event.target.tagName == "polygon") id = event.target.parentElement.parentElement.id;
    else id = event.target.id;
    document.getElementById(id).style.backgroundColor = '#91C1E7';
});

operations.addEventListener('mouseup', (event) => {
    let id;
    if(event.target.tagName == "svg") id = event.target.parentElement.id;
    else if(event.target.tagName == "path") id = event.target.parentElement.parentElement.id;
    else if(event.target.tagName == "polygon") id = event.target.parentElement.parentElement.id;
    else id = event.target.id;
    let elem = document.getElementById(id);
    if(elem.className === 'operations-item-number') elem.style.backgroundColor = '#FDFDFD';
    else elem.style.backgroundColor = '#F8F8F8';
});

operations.addEventListener("click", (event) => {
    let id;
    if(event.target.tagName == "svg") id = event.target.parentElement.id;
    else if(event.target.tagName == "path") id = event.target.parentElement.parentElement.id;
    else if(event.target.tagName == "polygon") id = event.target.parentElement.parentElement.id;
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