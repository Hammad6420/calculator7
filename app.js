
var i = 0; ii = 0;
var num = []; number = 0; lastResult = 0; clearForNew = 0; delNew = 0;  dot=0;yy=0;


// Numbers
function getNo(no) {
    // dont show result
    document.getElementById('resultHead').innerText = '';
    // clear output
    if (clearForNew == 0) {
        document.getElementById('inpOut').innerText = '';
        dot=0;
    }
    // delete no
    if (delNew == 1) {
        number = y;
        document.getElementById('inpOut').innerText = '';
        document.getElementById('inpOut').innerText = y;
        delNew = 0;
    }
    // use old not delete
    if (delNew == 0) {
        if (no=='.') {
            ++dot;
            if (dot==1) {
                clearForNew = clearForNew + 1;
                document.getElementById('inpOut').innerText += no;
                x = document.getElementById('inpOut').innerText;
            }
        }else{
        clearForNew = clearForNew + 1;
        document.getElementById('inpOut').innerText += no;
        x = document.getElementById('inpOut').innerText;
        }
}        
    // combine word
    if ((x[x.length - 1]) != '+' && (x[x.length - 1]) != '-' && (x[x.length - 1]) != '/' && (x[x.length - 1]) != '=' && (x[x.length - 1]) != 'X') {
        num = x;
        i = i + 1;
        number=num;
    }
    stp=0;
    numOper='';
    numOper=number;
}



// symbols
function getsym(sym) {
    // check for double symbol
    xx=document.getElementById('preceding').innerText.split('');
    if (number!='undefined') {
    if ((xx[xx.length - 1]) != '+' && (xx[xx.length - 1]) != '-' && (xx[xx.length - 1]) != '/' && (xx[xx.length - 1]) != '=' && (xx[xx.length - 1]) != 'X' ) {
        if (delNew == 0) {
            document.getElementById('inpOut').innerText = '';
            document.getElementById('preceding').innerText +=number+sym;
        }
        }else{
            document.getElementById('preceding').innerText += document.getElementById('inpOut').innerText;
        }
        // new no
        num = [];
        i = 0;
        dot=0;
        clearForNew = 0;

        // delete no
        if (delNew == 1) {
            number = y;
            document.getElementById('preceding').innerText += sym;
            delNew = 0;
        }
    }
number='';
numOper='';
}



// work
function percentage() {
    number = document.getElementById('inpOut').innerText = lastResult * (100 / numOper) + '%';
    lastResult=number;
}
function squareRoot() {
    number = document.getElementById('inpOut').innerText = numOper ** (1 / 2);
    numOper=number;
    lastResult=number;
}
function square() {
    number = document.getElementById('inpOut').innerText = numOper ** 2;
    numOper=number;    lastResult=number;
}
function perNo() {
    number = document.getElementById('inpOut').innerText = 1 / numOper;
    numOper=number;    lastResult=number;
}
var neg = 0;
function multipleMinus() {
    if (neg == 1) {
        number = document.getElementById('inpOut').innerText = number * 1;
        neg = 0;
        numOper=number;    lastResult=number;
    }
    if (neg == 0) {
        number = document.getElementById('inpOut').innerText = numOper * -1;
        neg = neg + 1;
        numOper=number;    lastResult=number;
    }
}
// solve
var eq = 0;
var stp=0;
function equalTo() {
    clearForNew=0;
    stp=stp+1;
    xx=document.getElementById('preceding').innerText.split('');
    if (stp==1 || (xx.endsWith('+') && xx.endsWith('-') && xx.endsWith('X') && xx.endsWith('/') )) {
     
    eq = document.getElementById('preceding').innerText;
    eqNo = document.getElementById('inpOut').innerText;
            eq = document.getElementById('preceding').innerText += eqNo;
            eqOld = eq;
            eq = eq.split('')
            for (let index = 0; index < eq.length; index++) {
                if (eq[index] == 'X') {
                    eq[index] = '*';
                }
            }
            eq = eq.join('')
            console.log(eq)
            lastResult = document.getElementById('inpOut').innerText = eval(eq);
            document.getElementById('preceding').innerText = eqOld;
            document.getElementById('resultHead').innerText = 'RESULT';  
            number='';
    }
    numOper=lastResult;
    }

// DELETE
function del() {
    var x = document.getElementById('inpOut').innerText.split('');
    console.log(x)
    x.pop();
    y = x.join('');
    console.log(y)
    document.getElementById('inpOut').innerText = y;
    delNew = 1;
}


// CLEAR ALL
function clearCE() {
    document.getElementById('preceding').innerText = "";
    document.getElementById('inpOut').innerText = '0';
    num1 = 0; num2 = 0; lastResult = 0; number = 0; clearForNew = 0;numOper=0;
}
// correction preceding
function clearC() {
    var c = document.getElementById('preceding').innerText.split('');
    console.log(x)
    c.pop();
    yy = c.join('');
    console.log(yy)
    document.getElementById('preceding').innerText = yy;
}



