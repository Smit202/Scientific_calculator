
let clickCount = 0;
let ops2 = document.querySelector('.operations-item:first-child');

const operations = document.getElementsByClassName('operations')[0];
let input = document.getElementById('number');
let expression = document.getElementById('expression');
// let exp = input.value;
// console.log(expression);
input.value = 0;
// expression.value = 258;
let exp = '';
let exparr = [];
let evalExp = '';
let evalExparr = [];
let history = [];
let parenthesisStack = [];

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
        clickCount++;
    }
});

operations.addEventListener('mousedown', (event) => {
    let id;
    if(event.target.tagName == "svg") id = event.target.parentElement.id;
    else if(event.target.tagName == "path") id = event.target.parentElement.parentElement.id;
    else if(event.target.tagName == "polygon") id = event.target.parentElement.parentElement.id;
    else if(event.target.tagName == "sup") id = event.target.parentElement.id;
    else if(event.target.tagName == "sub") id = event.target.parentElement.id;
    else id = event.target.id;

    document.getElementById(id).style.backgroundColor = '#91C1E7';
});

operations.addEventListener('mouseup', (event) => {
    let id;
    if(event.target.tagName == "svg") id = event.target.parentElement.id;
    else if(event.target.tagName == "path") id = event.target.parentElement.parentElement.id;
    else if(event.target.tagName == "polygon") id = event.target.parentElement.parentElement.id;
    else if(event.target.tagName == "sup") id = event.target.parentElement.id;
    else if(event.target.tagName == "sub") id = event.target.parentElement.id;
    else id = event.target.id;

    let elem = document.getElementById(id);
    if(elem.className === 'operations-item-number') elem.style.backgroundColor = '#FDFDFD';
    else elem.style.backgroundColor = '#F8F8F8';
});

operations.addEventListener("click", (event) => {
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
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+num})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+num})`);
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
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+num})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+num})`);
            else evalExparr.push(input.value);
            exparr.push(`abs(${num})`);
        }
        else {  // if(num==evalExparr.at(-1))
            exparr.push(`abs(${exparr.pop()})`);
            input.value = Math.abs(+num);
            evalExparr.pop();
            evalExparr.push(input.value);
        }
        // else {  // if(num!=evalExparr.at(-1))
        //     exparr.push(`abs(${num})`);
        //     input.value = Math.abs(+num);
        //     evalExparr.pop();
        //     evalExparr.push(input.value);
        // }
        expression.value = exparr.join(' ');
    }

    else if(id=='factorial') {
        if(isNaN(num)) {
            alert(`${num} is invalid`);
        }
        else if(evalExparr.length==0 || isNaN(evalExparr.at(-1))) {
            
            input.value = factorial(num);
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+num})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+num})`);
            else evalExparr.push(input.value);
            exparr.push(`fact(${num})`);
        }
        else {
            exparr.push(`fact(${exparr.pop()})`);
            input.value = factorial(num);
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
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+num})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+num})`);
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
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+num})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+num})`);
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
            exparr.push(num)
            exparr.push('^');
            evalExparr.push(num)
            evalExparr.push('**');
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
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+num})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+num})`);
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
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+num})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+num})`);
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
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+num})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+num})`);
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
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+num})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+num})`);
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
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+num})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+num})`);
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
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+num})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+num})`);
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
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+num})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+num})`);
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
            exparr.push(num)
            exparr.push('mod');
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+num})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+num})`);
            else evalExparr.push(num);
            evalExparr.push('%');
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
            exparr.push(num)
            exparr.push('/');
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+num})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+num})`);
            else evalExparr.push(num);
            evalExparr.push('/');
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
            exparr.push(num)
            exparr.push('x');
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+num})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+num})`);
            else evalExparr.push(num);
            evalExparr.push('*');
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
            exparr.push(num)
            exparr.push('-');
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+num})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+num})`);
            else evalExparr.push(num);
            evalExparr.push('-');
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
            exparr.push(num)
            exparr.push('+');
            if(exparr.at(-1)=='yroot') evalExparr.push(`1/${+num})`);
            else if(exparr.at(-1)=='log base') evalExparr.push(`${+num})`);
            else evalExparr.push(num);
            evalExparr.push('+');
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
        else if(isNaN(evalExparr.at(-1)) && evalExparr.at(-2)==num || isCleared) input.value = id;
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

function findNumberIndex(str) {
    let i = str.length-1;
    while((!isNaN(str[i]) || str[i]=='.') && i>=0) {
        i--;
    }
    return i+1;
}

function historyObject(expression, result) {
    this.expression = expression;
    this.result = result;
}

function factorial(num) {
    return (num==1 ? 1 : num*factorial(num-1));
}

function logarithm(n, base) {
    return (Math.log(n) / Math.log(base));
}









// ((()()))








// exp = `1/(${num})`;
            // input.value = 1/+num;
            // evalExp += input.value;
            // expression.innerHTML = exp;