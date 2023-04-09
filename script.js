
let exparr = [];
let evalExparr = [];
let history = [];
let memoryArray = []
let parenthesisStack = [];
let opsFlag = 0;
let trigFlag = 0;
let inverseTrigFlag = 0;
let hypTrigFlag = 0;
let funcFlag = 0;
let angleFlag = 0;
let feFlag = 0;
let memoryFlag = 0;

const ops2 = document.querySelector('.operations-item:first-child');
const operations = document.getElementsByClassName('operations')[0];
const input = document.getElementById('number');
const expression = document.getElementById('expression');
const trigonometry = document.getElementById('trigonometry');
const func = document.getElementById('func');
const inverseTrig = document.getElementById('inverseTrig');
const hyperbolicTrig = document.getElementById('hyperbolicTrig');
const trigFunctions = document.getElementById('trigFunctions');
const functionOperations = document.getElementById('functionOperations');
const angle = document.getElementById('angle');
const format = document.getElementsByClassName('format')[0];
const memory = document.getElementsByClassName('memory')[0];
const FE = document.getElementById('FE')

input.value = 0;

operations.addEventListener('mousedown', mouseDownAction);
operations.addEventListener('mouseup', mouseUpAction);

trigFunctions.addEventListener('mousedown', mouseDownAction);
trigFunctions.addEventListener('mouseup', mouseUpAction);

functionOperations.addEventListener('mousedown', mouseDownAction);
functionOperations.addEventListener('mouseup', mouseUpAction);

format.addEventListener('mousedown', (event) => event.target.style.backgroundColor = '#DDDDDD');
format.addEventListener('mouseup', (event) => event.target.style.backgroundColor = '#F3F3F3');

memory.addEventListener('mousedown', (event) => event.target.style.backgroundColor = '#DDDDDD');
memory.addEventListener('mouseup', (event) => event.target.style.backgroundColor = '#F3F3F3');

angle.addEventListener('click', () => {
    // angle.style.backgroundColor = '#DDDDDD';
    if(angleFlag==0) {
        angle.innerHTML = 'RAD';
        angleFlag = 1;
    }
    else if(angleFlag==1) {
        angle.innerHTML = 'GRAD';
        angleFlag = 2;
    }
    else {
        angle.innerHTML = 'DEG';
        angleFlag = 0;
    }
});

FE.addEventListener('click', () => {
    if(feFlag==0) {
        FE.style.borderBottom = '3px solid #6a9dc8';
        feFlag = 1;
    }
    else {
        FE.style.borderBottom = 'none';
        feFlag = 0;
    }
});

func.addEventListener('click', () => {
    if(trigFlag==1) {
        document.getElementById('trigonometryDropdown').style.display = 'none';
        trigonometry.style.backgroundColor = '#F6F6F6';
        trigFlag = 0;
    }

    if(funcFlag==0) {
        document.getElementById('functionDropdown').style.display = 'block';
        func.style.backgroundColor = '#D5D5D5';
        funcFlag = 1;
    }
    else {
        document.getElementById('functionDropdown').style.display = 'none';
        func.style.backgroundColor = '#F6F6F6';
        funcFlag = 0;
    }
})

trigonometry.addEventListener('click', () => {
    if(funcFlag==1) {
        document.getElementById('functionDropdown').style.display = 'none';
        func.style.backgroundColor = '#F6F6F6';
        funcFlag = 0;
    }

    if(trigFlag==0) {
        document.getElementById('trigonometryDropdown').style.display = 'block';
        trigonometry.style.backgroundColor = '#DDDDDD';
        trigFlag = 1;
    }
    else {
        document.getElementById('trigonometryDropdown').style.display = 'none';
        trigonometry.style.backgroundColor = '#F6F6F6';
        trigFlag = 0;
    }
});

inverseTrig.addEventListener('click', () => {
    if(inverseTrigFlag==0 && hypTrigFlag==0) {
        trigFunctions.innerHTML = `<div class="trigFunc" id="arcsin">sin<sup>-1</sup></div>
        <div class="trigFunc" id="arccos">cos<sup>-1</div>
        <div class="trigFunc" id="arctan">tan<sup>-1</div>
        <div class="trigFunc" id="arcsec">sec<sup>-1</div>
        <div class="trigFunc" id="arccsc">csc<sup>-1</div>
        <div class="trigFunc" id="arccot">cot<sup>-1</div>`;
        inverseTrigFlag = 1;
        inverseTrig.style.backgroundColor = '#91C1E7';
    }

    else if(inverseTrigFlag==1 && hypTrigFlag==0) {
        trigFunctions.innerHTML = `<div class="trigFunc" id="sin">sin</div>
        <div class="trigFunc" id="cos">cos</div>
        <div class="trigFunc" id="tan">tan</div>
        <div class="trigFunc" id="sec">sec</div>
        <div class="trigFunc" id="csc">csc</div>
        <div class="trigFunc" id="cot">cot</div>`;
        inverseTrigFlag = 0;
        inverseTrig.style.backgroundColor = 'white';
    }

    else if(inverseTrigFlag==1 && hypTrigFlag==1) {
        trigFunctions.innerHTML = `<div class="trigFunc" id="sinh">sinh</div>
        <div class="trigFunc" id="cosh">cosh</div>
        <div class="trigFunc" id="tanh">tanh</div>
        <div class="trigFunc" id="sech">sech</div>
        <div class="trigFunc" id="csch">csch</div>
        <div class="trigFunc" id="coth">coth</div>`;
        inverseTrigFlag = 0;
        inverseTrig.style.backgroundColor = 'white';
    }

    // if(inverseTrigFlag==0 && hypTrigFlag==1) {
    else {
        trigFunctions.innerHTML = `<div class="trigFunc" id="arcsinh">sinh<sup>-1</sup></div>
        <div class="trigFunc" id="arccosh">cosh<sup>-1</div>
        <div class="trigFunc" id="arctanh">tanh<sup>-1</div>
        <div class="trigFunc" id="arcsech">sech<sup>-1</div>
        <div class="trigFunc" id="arccsch">csch<sup>-1</div>
        <div class="trigFunc" id="arccoth">coth<sup>-1</div>`;
        inverseTrigFlag = 1;
        inverseTrig.style.backgroundColor = '#91C1E7';
    }
});

hyperbolicTrig.addEventListener('click', () => {
    if(inverseTrigFlag==0 && hypTrigFlag==0) {
        trigFunctions.innerHTML = `<div class="trigFunc" id="sinh">sinh</div>
        <div class="trigFunc" id="cosh">cosh</div>
        <div class="trigFunc" id="tanh">tanh</div>
        <div class="trigFunc" id="sech">sech</div>
        <div class="trigFunc" id="csch">csch</div>
        <div class="trigFunc" id="coth">coth</div>`;
        hypTrigFlag = 1;
        hyperbolicTrig.style.backgroundColor = '#91C1E7';
    }

    else if(inverseTrigFlag==1 && hypTrigFlag==0) {
        trigFunctions.innerHTML = `<div class="trigFunc" id="arcsinh">sinh<sup>-1</sup></div>
        <div class="trigFunc" id="arccosh">cosh<sup>-1</div>
        <div class="trigFunc" id="arctanh">tanh<sup>-1</div>
        <div class="trigFunc" id="arcsech">sech<sup>-1</div>
        <div class="trigFunc" id="arccsch">csch<sup>-1</div>
        <div class="trigFunc" id="arccoth">coth<sup>-1</div>`;
        hypTrigFlag = 1;
        hyperbolicTrig.style.backgroundColor = '#91C1E7';
    }

    else if(inverseTrigFlag==1 && hypTrigFlag==1) {
        trigFunctions.innerHTML = `<div class="trigFunc" id="arcsin">sin<sup>-1</sup></div>
        <div class="trigFunc" id="arccos">cos<sup>-1</div>
        <div class="trigFunc" id="arctan">tan<sup>-1</div>
        <div class="trigFunc" id="arcsec">sec<sup>-1</div>
        <div class="trigFunc" id="arccsc">csc<sup>-1</div>
        <div class="trigFunc" id="arccot">cot<sup>-1</div>`;
        hypTrigFlag = 0;
        hyperbolicTrig.style.backgroundColor = 'white';
    }

    // if(inverseTrigFlag==0 && hypTrigFlag==1) {
    else {
        trigFunctions.innerHTML = `<div class="trigFunc" id="sin">sin</div>
        <div class="trigFunc" id="cos">cos</div>
        <div class="trigFunc" id="tan">tan</div>
        <div class="trigFunc" id="sec">sec</div>
        <div class="trigFunc" id="csc">csc</div>
        <div class="trigFunc" id="cot">cot</div>`;
        hypTrigFlag = 0;
        hyperbolicTrig.style.backgroundColor = 'white';
    }
});

ops2.addEventListener('click', () => {
    if(opsFlag==0) {
        ops2.style.backgroundColor = '#91C1E7';
        let square = document.getElementById('square');
        let squareRoot = document.getElementById('squareRoot');
        let power = document.getElementById('power');
        let powerOfTen = document.getElementById('powerOfTen');
        let logBase10 = document.getElementById('logBase10');
        let ln = document.getElementById('ln');

        square.innerHTML = 'x<sup>3</sup>';
        squareRoot.innerHTML = '<sup>3</sup><svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" enable-background="new 0 0 128 128" viewBox="0 0 128 128"><path d="m40.091 125.046-29.423-44.505h-10.668v-10.189h16.158l17.095 25.86 11.128-93.35h83.619v10.189h-74.559zm35.145-19.218c6.353-.122 6.713-3.953 6.713-3.953 1.679-5.865 4.916-12.328 8.872-18.435 4.915 8.98 10.19 17.119 14.744 17.119 5.155 0 11.15-7.181 11.15-9.577-.12-3.47-4.915-.958-8.991-4.908-3.596-3.472-6.594-8.261-9.35-13.169 5.633-7.181 11.268-13.047 14.145-15.8.48-.48 2.517-1.915 2.517-3.234 0-1.796-2.758-2.512-5.154-2.512-2.039 0-3.836.239-6.954 2.873-2.877 2.393-6.114 5.627-9.471 9.335-3.357-6.462-6.114-11.492-8.631-11.492-5.633 0-10.429 3.953-10.429 5.627 0 2.276 1.918 2.276 3.836 4.072 1.918 2.035 4.435 6.343 7.192 11.492-9.47 12.089-17.622 25.019-17.622 28.489.001 1.558 1.679 4.073 7.433 4.073z" fill="#000"/></svg>';
        power.innerHTML = '<sup>y</sup><svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" enable-background="new 0 0 128 128" viewBox="0 0 128 128"><path d="m40.091 125.046-29.423-44.505h-10.668v-10.189h16.158l17.095 25.86 11.128-93.35h83.619v10.189h-74.559zm35.145-19.218c6.353-.122 6.713-3.953 6.713-3.953 1.679-5.865 4.916-12.328 8.872-18.435 4.915 8.98 10.19 17.119 14.744 17.119 5.155 0 11.15-7.181 11.15-9.577-.12-3.47-4.915-.958-8.991-4.908-3.596-3.472-6.594-8.261-9.35-13.169 5.633-7.181 11.268-13.047 14.145-15.8.48-.48 2.517-1.915 2.517-3.234 0-1.796-2.758-2.512-5.154-2.512-2.039 0-3.836.239-6.954 2.873-2.877 2.393-6.114 5.627-9.471 9.335-3.357-6.462-6.114-11.492-8.631-11.492-5.633 0-10.429 3.953-10.429 5.627 0 2.276 1.918 2.276 3.836 4.072 1.918 2.035 4.435 6.343 7.192 11.492-9.47 12.089-17.622 25.019-17.622 28.489.001 1.558 1.679 4.073 7.433 4.073z" fill="#000"/></svg>';
        powerOfTen.innerHTML = '2<sup>x</sup>';
        logBase10.innerHTML = 'log <sub>y</sub> x';
        ln.innerHTML = 'e<sup>x</sup>';

        square.id = 'cube';
        squareRoot.id = 'cubeRoot';
        power.id = 'yRoot';
        powerOfTen.id = 'powerOfTwo';
        logBase10.id = 'logBaseY';
        ln.id = 'powerOfe';
        opsFlag = 1;
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
        yRoot.innerHTML = 'x<sup>y</sup>';
        powerOfTwo.innerHTML = '10<sup>x</sup>';
        logBaseY.innerHTML = 'log';
        powerOfe.innerHTML = 'ln';

        cube.id = 'square';
        cubeRoot.id = 'squareRoot';
        yRoot.id = 'power';
        powerOfTwo.id = 'powerOfTen';
        logBaseY.id = 'logBase10';
        powerOfe.id = 'ln';
        opsFlag = 0;
    }
});

operations.addEventListener("click", (event) => {
    
    let num, id, isCleared;
    // if(feFlag) {
    //     num = (+input.value).toExponential();
    //     // input.value = num;
    // }
    // else num = input.value;
    num = input.value

    if(event.target.tagName == "svg") id = event.target.parentElement.id;
    else if(event.target.tagName == "path") id = event.target.parentElement.parentElement.id;
    else if(event.target.tagName == "polygon") id = event.target.parentElement.parentElement.id;
    else if(event.target.tagName == "sup") id = event.target.parentElement.id;
    else if(event.target.tagName == "sub") id = event.target.parentElement.id;
    else id = event.target.id;

    if (exparr.at(-1)=='=') {
        exparr = [];
        evalExparr = [];
        isCleared = true;
    }
    else    isCleared = false;

    let interval = setInterval(() => {
        if(expression.scrollLeft !== expression.scrollWidth) {
            expression.scrollTo(expression.scrollLeft + 1, 0)
        }
        else clearInterval(interval)
    }, 0);

    if(id=='clear') {
        exparr = [];
        evalExparr = [];
        expression.value = exparr.join(' ');
        input.value = '0';
    }

    else if(id=='clearEntry') {
        input.value = 0;
        document.getElementById('clearEntry').innerHTML = 'C';
            document.getElementById('clearEntry').id = 'clear'
    }

    else if(id=='backspace') {
        if(num!=0 && num.length>1)  input.value = num.slice(0, num.length-1);
        else if(num==0 && ['(', ')'].includes(exparr.at(-1))) {
            exparr.pop();
            evalExparr.pop();
            expression.value = exparr.join(' ');
        } 
        else    input.value = 0;
    }

    else if(id == 'pi') {
        input.value = Math.PI;
    }

    else if(id == 'e') {
        input.value = Math.E;
    }

    else if(id=='exponential') {
        if(isNaN(num))  alert(`${num} is invalid number`);
        else    input.value = (+num).toExponential();
        expression.value = exparr.join(' ');
    }

    else if(id=='inverse') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = 1/+num;
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`1/(${num})`);
        }
        else {
            exparr.push(`1/(${exparr.pop()})`);
            input.value = 1/+num;
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='absolute') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = Math.abs(+num);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`abs(${num})`);
        }
        else {  
            exparr.push(`abs(${exparr.pop()})`);
            input.value = Math.abs(+num);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='factorial') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            
            input.value = factorial(+num);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`fact(${num})`);
        }
        else {
            exparr.push(`fact(${exparr.pop()})`);
            input.value = factorial(+num);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='square') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = (+num) ** 2;
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`(${num})^2`);
        }
        else {
            exparr.push(`(${exparr.pop()})^2`);
            input.value = (+num) ** 2;
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
        
    }  
    
    else if(id=='squareRoot') {
        if(isNaN(num) || +num<0) {
            alert(`${num} must be positive number`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = Math.sqrt(+num);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`sqrt(${num})`);
        }
        else {
            exparr.push(`sqrt(${exparr.pop()})`);
            input.value = Math.sqrt(+num);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    } 

    else if(id=='power') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            if(exparr.at(-1)=='yroot') {
                evalExparr.push(`1/${+num})`);
                evalExparr.push('**');
            }
            else if(exparr.at(-1)=='log base') {
                evalExparr.push(`${+num})`);
                evalExparr.push('**');
            }
            else evalExparr.push(input.value);
            exparr.push(num)
            exparr.push('^');
        }
        else {
            exparr.push('^');
            evalExparr.push('**');
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='powerOfTen') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {           
            input.value = 10 ** (+num);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`10^${num}`);
        }
        else {
            exparr.push(`10^(${exparr.pop()})`);
            input.value = 10 ** (+num);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='cube') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = (+num) ** 3;
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`(${num})^3`);
        }
        else {
            exparr.push(`(${exparr.pop()})^3`);
            input.value = (+num) ** 3;
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='cubeRoot') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = (+num) ** (1/3);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`cuberoot(${num})`);
        }
        else {
            exparr.push(`cuberoot(${exparr.pop()})`);
            input.value = Math.pow(+num, 1/3);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    } 

    else if(id=='powerOfTwo') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = 2 ** (+num);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`2^(${num})`);
        }
        else {
            exparr.push(`2^(${exparr.pop()})`);
            input.value = 2 ** (+num);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='powerOfe') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = Math.exp(+num);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`e^(${num})`);
        }
        else {
            exparr.push(`e^(${exparr.pop()})`);
            input.value = Math.exp(+num);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='logBase10') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = Math.log10(+num);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`log(${num})`);
        }
        else {
            exparr.push(`log(${exparr.pop()})`);
            input.value = Math.log10(+num);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='ln') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = Math.log(+num);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`ln(${num})`);
        }
        else {
            exparr.push(`ln(${exparr.pop()})`);
            input.value = Math.log(+num);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='yRoot') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            exparr.push(num)
            exparr.push('yroot');
            evalExparr.push(`Math.pow(${+num},`);
        }
        else {
            exparr.push('yroot');
            evalExparr.push(`Math.pow(${+num},`);
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='logBaseY') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            exparr.push(num)
            exparr.push('log base');
            evalExparr.push(`logarithm(${+num},`)
        }
        else {
            evalExp.push('log base');
            evalExparr.push(`logarithm(${+num},`);
        }
        expression.value = exparr.join(' ');
    }


    else if(id=='leftParenthesis') {
        if((evalExparr.length==0 || isNaN(evalExparr.at(-1))) && evalExparr.at(-1)!=')') {
            exparr.push('(');
            evalExparr.push('(');
            parenthesisStack.push('(');
        }
        // bug in case of previous is yroot
        else {
            exparr.push('(');
            evalExparr.push('*');
            evalExparr.push('(');
            parenthesisStack.push('(');
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='rightParenthesis') {
        if(parenthesisStack.length!=0) {
            if ((evalExparr.length!=0 && !isNaN(evalExparr.at(-1))) || evalExparr.at(-1)==')') {
                exparr.push(')');
                evalExparr.push(')');
                parenthesisStack.pop();
            }
            // bug in case of previous is yroot
            else {
                if(evalExparr.length!=0) {
                    exparr.push(num);
                    exparr.push(')');
                    evalExparr.push(num);
                    evalExparr.push(')');
                    parenthesisStack.pop();
                }
            }
        }
        else alert('inavalid right parenthesis');
        expression.value = exparr.join(' ');
    }

    else if(id=='mod') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if((evalExparr.length==0 || isNaN(evalExparr.at(-1))) && exparr.at(-1)!=')') {
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+num})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+num})`);
            else evalExparr.push(num);
            evalExparr.push('%');
            exparr.push(num)
            exparr.push('mod');
        }
        else {
            exparr.push('mod');
            evalExparr.push('%');
        }
        expression.value = exparr.join(' ');
    }   

    else if(id=='division') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if((evalExparr.length==0 || isNaN(evalExparr.at(-1))) && exparr.at(-1)!=')') {
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+num})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+num})`);
            else evalExparr.push(num);
            evalExparr.push('/');
            exparr.push(num)
            exparr.push('/');
        }
        else {
            exparr.push('/');
            evalExparr.push('/');
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='multiplication') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if((evalExparr.length==0 || isNaN(evalExparr.at(-1))) && exparr.at(-1)!=')') {
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+num})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+num})`);
            else evalExparr.push(num);
            evalExparr.push('*');
            exparr.push(num)
            exparr.push('x');
        }
        else {
            exparr.push('x');
            evalExparr.push('*');
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='subtraction') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if((evalExparr.length==0 || isNaN(evalExparr.at(-1))) && exparr.at(-1)!=')') {
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+num})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+num})`);
            else evalExparr.push(num);
            evalExparr.push('-');
            exparr.push(num)
            exparr.push('-');
        }
        else {
            exparr.push('-');
            evalExparr.push('-');
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='addition') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if((evalExparr.length==0 || isNaN(evalExparr.at(-1))) && exparr.at(-1)!=')') {
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+num})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+num})`);
            else evalExparr.push(num);
            evalExparr.push('+');
            exparr.push(num)
            exparr.push('+');
        }
        else {
            exparr.push('+');
            evalExparr.push('+');
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='equal') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if((evalExparr.length==0 || isNaN(evalExparr.at(-1))) && !['(', ')'].includes(exparr.at(-1))) {
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+num})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+num})`);
            else evalExparr.push(num);
            exparr.push(num)
            exparr.push('=');
        }
        else {
            exparr.push('=');
        }
        expression.value = exparr.join(' ');
        input.value = eval(evalExparr.join(''));
    }

    else if(id=='sign') {
        input.value = -1*num;
    }

    else {
        if(num=='0' && id!='.') input.value = id;
        // else if(isNaN(evalExparr.at(-1)) && evalExparr.at(-1)=='(') input.value = id;
        else if(isNaN(evalExparr.at(-1)) && exparr.at(-2)==num || isCleared) input.value = id;
        else input.value += id;

        if(+input.value!=0) {
            document.getElementById('clear').innerHTML = 'CE';
            document.getElementById('clear').id = 'clearEntry';
        }
        else {
            document.getElementById('clearEntry').innerHTML = 'C';
            document.getElementById('clearEntry').id = 'clear';
        }
    }
});

trigFunctions.addEventListener('click', (event) => {
    let num = input.value;
    let id, isCleared, radAngle;

    if(event.target.tagName == "svg") id = event.target.parentElement.id;
    else if(event.target.tagName == "path") id = event.target.parentElement.parentElement.id;
    else if(event.target.tagName == "polygon") id = event.target.parentElement.parentElement.id;
    else if(event.target.tagName == "sup") id = event.target.parentElement.id;
    else if(event.target.tagName == "sub") id = event.target.parentElement.id;
    else id = event.target.id;

    if (exparr.at(-1)=='=') {
        exparr = [];
        evalExparr = [];
        isCleared = true;
    }
    else    isCleared = false;

    let interval = setInterval(() => {
        if(expression.scrollLeft !== expression.scrollWidth) {
            expression.scrollTo(expression.scrollLeft + 1, 0)
        }
        else clearInterval(interval)
    }, 0);

    if(angleFlag==0) radAngle = degToRadian(+num);
    else if(angleFlag==1) radAngle = +num;
    else radAngle = gradToRadian(+num);

    if(id=='sin') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = Math.sin(radAngle);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`sin(${num})`);
        }
        else {
            exparr.push(`sin(${exparr.pop()})`);
            input.value = Math.sin(radAngle);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='cos') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = Math.cos(radAngle);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`cos(${num})`);
        }
        else {
            exparr.push(`cos(${exparr.pop()})`);
            input.value = Math.cos(radAngle);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='tan') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = Math.tan(radAngle);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`tan(${num})`);
        }
        else {
            exparr.push(`tan(${exparr.pop()})`);
            input.value = Math.tan(radAngle);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='sec') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = 1/Math.cos(radAngle);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`sec(${num})`);
        }
        else {
            exparr.push(`sec(${exparr.pop()})`);
            input.value = 1/Math.cos(radAngle);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='csc') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = 1/Math.sin(radAngle);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`csc(${num})`);
        }
        else {
            exparr.push(`csc(${exparr.pop()})`);
            input.value = 1/Math.sin(radAngle);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='cot') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = 1/Math.tan(radAngle);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`cot(${num})`);
        }
        else {
            exparr.push(`cot(${exparr.pop()})`);
            input.value = 1/Math.tan(radAngle);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    if(id=='arcsin') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = Math.asin(radAngle);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`arcsin(${num})`);
        }
        else {
            exparr.push(`arcsin(${exparr.pop()})`);
            input.value = Math.asin(radAngle);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='arccos') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = Math.acos(radAngle);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`arccos(${num})`);
        }
        else {
            exparr.push(`arccos(${exparr.pop()})`);
            input.value = Math.acos(radAngle);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='arctan') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = Math.atan(radAngle);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`arctan(${num})`);
        }
        else {
            exparr.push(`arctan(${exparr.pop()})`);
            input.value = Math.atan(radAngle);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='arcsec') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = Math.acos(1/radAngle);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`arcsec(${num})`);
        }
        else {
            exparr.push(`arcsec(${exparr.pop()})`);
            input.value = Math.acos(1/radAngle);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='arccsc') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = Math.asin(1/radAngle);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`arccsc(${num})`);
        }
        else {
            exparr.push(`arccsc(${exparr.pop()})`);
            input.value = Math.asin(1/radAngle);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='arccot') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = Math.atan(1/radAngle);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`arccot(${num})`);
        }
        else {
            exparr.push(`arccot(${exparr.pop()})`);
            input.value = Math.atan(1/radAngle);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    if(id=='sinh') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = Math.sinh(radAngle);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`sinh(${num})`);
        }
        else {
            exparr.push(`sinh(${exparr.pop()})`);
            input.value = Math.sinh(radAngle);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='cosh') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = Math.cosh(radAngle);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`cosh(${num})`);
        }
        else {
            exparr.push(`cosh(${exparr.pop()})`);
            input.value = Math.cosh(radAngle);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='tanh') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = Math.tanh(radAngle);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`tanh(${num})`);
        }
        else {
            exparr.push(`tanh(${exparr.pop()})`);
            input.value = Math.tanh(radAngle);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='sech') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = 1/Math.cosh(radAngle);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`sech(${num})`);
        }
        else {
            exparr.push(`sech(${exparr.pop()})`);
            input.value = 1/Math.cosh(radAngle);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='csch') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = 1/Math.sinh(radAngle);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`csc(${num})`);
        }
        else {
            exparr.push(`csch(${exparr.pop()})`);
            input.value = 1/Math.sinh(radAngle);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='coth') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = 1/Math.tanh(radAngle);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`coth(${num})`);
        }
        else {
            exparr.push(`coth(${exparr.pop()})`);
            input.value = 1/Math.tanh(radAngle);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    if(id=='arcsinh') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = Math.asinh(+radAngle);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`arcsinh(${num})`);
        }
        else {
            exparr.push(`arcsinh(${exparr.pop()})`);
            input.value = Math.asinh(radAngle);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='arccosh') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = Math.acosh(radAngle);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`arccosh(${num})`);
        }
        else {
            exparr.push(`arccosh(${exparr.pop()})`);
            input.value = Math.acosh(radAngle);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='arctanh') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = Math.atanh(radAngle);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`arctanh(${num})`);
        }
        else {
            exparr.push(`arctanh(${exparr.pop()})`);
            input.value = Math.atanh(radAngle);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='arcsech') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = Math.acosh(1/radAngle);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`arcsech(${num})`);
        }
        else {
            exparr.push(`arcsech(${exparr.pop()})`);
            input.value = Math.acosh(1/radAngle);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='arccsch') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = Math.asinh(1/radAngle);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`arccsch(${num})`);
        }
        else {
            exparr.push(`arccsch(${exparr.pop()})`);
            input.value = Math.asinh(1/+num);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='arccoth') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = Math.atanh(1/radAngle);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`arccoth(${num})`);
        }
        else {
            exparr.push(`arccoth(${exparr.pop()})`);
            input.value = Math.atanh(1/radAngle);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }
    else {}
});

functionOperations.addEventListener('click', (event) => {
    let num = input.value;
    let id, isCleared;

    if(event.target.tagName == "svg") id = event.target.parentElement.id;
    else if(event.target.tagName == "path") id = event.target.parentElement.parentElement.id;
    else if(event.target.tagName == "polygon") id = event.target.parentElement.parentElement.id;
    else if(event.target.tagName == "sup") id = event.target.parentElement.id;
    else if(event.target.tagName == "sub") id = event.target.parentElement.id;
    else id = event.target.id;

    if (exparr.at(-1)=='=') {
        exparr = [];
        evalExparr = [];
        isCleared = true;
    }
    else    isCleared = false;

    let interval = setInterval(() => {
        if(expression.scrollLeft !== expression.scrollWidth) {
            expression.scrollTo(expression.scrollLeft + 1, 0)
        }
        else clearInterval(interval)
    }, 0);

    if(id=='abs') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = Math.abs(+num);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`abs(${num})`);
        }
        else {  
            exparr.push(`abs(${exparr.pop()})`);
            input.value = Math.abs(+num);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='floor') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = Math.floor(+num);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`floor(${num})`);
        }
        else {  
            exparr.push(`floor(${exparr.pop()})`);
            input.value = Math.floor(+num);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='ceil') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = Math.ceil(+num);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`ceil(${num})`);
        }
        else {  
            exparr.push(`ceil(${exparr.pop()})`);
            input.value = Math.ceil(+num);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='rand') {
        input.value = Math.random();
    }

    else if(id=='dms') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = dms(+num);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`dms(${num})`);
        }
        else {  
            exparr.push(`dms(${exparr.pop()})`);
            input.value = dms(+num);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }

    else if(id=='deg') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            input.value = deg(+num);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+input.value})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+input.value})`);
            else evalExparr.push(input.value);
            exparr.push(`deg(${num})`);
        }
        else {  
            exparr.push(`deg(${exparr.pop()})`);
            input.value = deg(+num);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        expression.value = exparr.join(' ');
    }
});

memory.addEventListener('click', (event) => {
    let num = input.value;
    let id = event.target.id;
    let memoryLength = memoryArray.length;
    // if(event.target.tagName == "svg") id = event.target.parentElement.id;
    // else if(event.target.tagName == "path") id = event.target.parentElement.parentElement.id;
    // else if(event.target.tagName == "polygon") id = event.target.parentElement.parentElement.id;
    // else if(event.target.tagName == "sup") id = event.target.parentElement.id;
    // else if(event.target.tagName == "sub") id = event.target.parentElement.id;
    // else id = event.target.id;

    // let interval = setInterval(() => {
    //     if(expression.scrollLeft !== expression.scrollWidth) {
    //         expression.scrollTo(expression.scrollLeft + 1, 0)
    //     }
    //     else clearInterval(interval)
    // }, 0);

    if(id=='MC' && memoryFlag==1) {
        memoryArray = [];
        memoryFlag = 0;
        document.getElementById('MC').style.color = 'rgba(128, 128, 128, 0.6)';
        document.getElementById('MR').style.color = 'rgba(128, 128, 128, 0.6)';
    }
    else if(id=='MR' && memoryFlag==1) input.value = memoryArray[memoryLength-1];
    else if(id=='M+') {
        if(memoryLength==0) memoryArray.push(+num);
        else memoryArray[memoryLength-1] += +num;
        memoryFlag = 1;
        document.getElementById('MC').style.color = 'black';
        document.getElementById('MR').style.color = 'black';
    }
    else if(id=='M-') {
        if(memoryLength==0) memoryArray.push(0 - +num);
        else memoryArray[memoryLength-1] -= +num;
        memoryFlag = 1;
        document.getElementById('MC').style.color = 'black';
        document.getElementById('MR').style.color = 'black';
    }
    else if(id=='MS') {
        memoryArray.push(+num);
        memoryFlag = 1;
        document.getElementById('MC').style.color = 'black';
        document.getElementById('MR').style.color = 'black';
    }
    else {}
})

function mouseDownAction(event) {
    let id;
    if(event.target.tagName == "svg") id = event.target.parentElement.id;
    else if(event.target.tagName == "path") id = event.target.parentElement.parentElement.id;
    else if(event.target.tagName == "polygon") id = event.target.parentElement.parentElement.id;
    else if(event.target.tagName == "sup") id = event.target.parentElement.id;
    else if(event.target.tagName == "sub") id = event.target.parentElement.id;
    else id = event.target.id;

    document.getElementById(id).style.backgroundColor = '#91C1E7';
}

function mouseUpAction(event) {
    let id;
    if(event.target.tagName == "svg") id = event.target.parentElement.id;
    else if(event.target.tagName == "path") id = event.target.parentElement.parentElement.id;
    else if(event.target.tagName == "polygon") id = event.target.parentElement.parentElement.id;
    else if(event.target.tagName == "sup") id = event.target.parentElement.id;
    else if(event.target.tagName == "sub") id = event.target.parentElement.id;
    else id = event.target.id;

    let elem = document.getElementById(id);
    if(['operations-item-number', 'trigFunc', 'normalFunc', 'memory'].includes(elem.className)) elem.style.backgroundColor = '#FDFDFD';
    else elem.style.backgroundColor = '#F8F8F8';
}

function factorial(num) {
    return (num==1 ? 1 : num*factorial(num-1));
}

function logarithm(n, base) {
    return (Math.log(n) / Math.log(base));
}

function dms(num) {
    if(Number.isInteger(num)) return num;
    let options = {
        minimumIntegerDigits: 2, 
        useGrouping: false,
    };

    let sign;
    if(num<0) sign = '-';
    else sign = '';

    let n = Math.abs(num);
    let deg = Math.floor(n);
    let temp = (n-deg)*60;
    let min = Math.floor(temp).toLocaleString('en-US', options);

    if(Number.isInteger(+temp.toFixed(4)))  return ( sign + deg + '.' + min);
    temp = (temp - +min)*60;
    let sec = Math.floor(temp).toLocaleString('en-US',options);
    if(Number.isInteger(+temp.toFixed(4)))  return (sign + deg + '.' + min + sec);
    
    temp = temp - +sec;
    let numStr = num.toString().split('.')[1];
    let index = temp.toString().indexOf('000', 2);
    if(index<=numStr.length && index>0) return (sign + deg + '.' + min + sec + temp.toFixed(index-2).toString().split('.')[1]);
    else if(temp.toString().length <= numStr.length) return (sign + deg + '.' + min + sec + temp);
    else return (sign + deg + '.' + min + sec + temp.toFixed(numStr.length-2).toString().split('.')[1]);
}

function deg(num) {
    let degree = Math.floor(num);
    let temp = (num - degree)*100;
    let min = Math.floor(temp);
    degree += min/60;
    temp = (temp - min)*100;
    sec = temp;
    degree += sec/3600;
    return degree;
}

function degToRadian(num) {
    return num * Math.PI/180;
}

function gradToRadian(num) {
    return num * Math.PI/200;
}

function historyObject(expression, result) {
    this.expression = expression;
    this.result = result;
}

