
var i = 0; ii = 0;
var num = []; number = 0; lastResult = 0; clearForNew = 0; delNew = 0; yy = 0; syms = [];num3=0;multiplyPre=0;


// Numbers

function getNo(no) {
    // dont show result
    document.getElementById('resultHead').innerText = '';
    // clear output
    if (clearForNew == 0) {
        document.getElementById('inpOut').innerText = '';
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
        clearForNew = clearForNew + 1;
        document.getElementById('inpOut').innerText += no;
        x = document.getElementById('inpOut').innerText;
    }
    // combine word
    if ((x[x.length - 1]) != '+' && (x[x.length - 1]) != '-' && (x[x.length - 1]) != '/' && (x[x.length - 1]) != '=' && (x[x.length - 1]) != 'X') {
        num[i] = no;
        i = i + 1;
        return number = parseInt(num.join(''));
    }
}



// symbols
function getsym(sym) {
    // check for double symbol
    if ((x[x.length - 1]) != '+' && (x[x.length - 1]) != '-' && (x[x.length - 1]) != '/' && (x[x.length - 1]) != '=' && (x[x.length - 1]) != 'X') {
        if (delNew == 0) {
            document.getElementById('inpOut').innerText = '';
            document.getElementById('preceding').innerText += number + sym;
        }
        // new no
        num = [];
        i = 0;
        clearForNew = 0;
        // delete no
        if (delNew == 1) {
            number = y;
            document.getElementById('preceding').innerText += number + sym;
            delNew = 0;
        }

        // symbole get for calculation
        syms[yy] = sym;

        // multiple set
                if (syms[0]==syms[1]) {
               multiplyPre=1;
                }

        if (yy == 1) {
            sym = syms[0];
            syms[0] = syms[1]
            yy = 0;
        }
        yy = 1;
        // set num1 and num2 for operations
        if (ii == 0 || ii > 1) {
            if (syms[1] != 'X' && syms[1] != '/') { 
                num1 = number;
            }else{
                num1=number;
        }
    }
        if (ii == 1) {
            if (syms[1] != 'X' && syms[1] != '/') {
                ii = ii + 1;
                num2 = number;
            } else {
                num2 = number;
            }
        } else {
            ii = ii + 1;
            if (syms[1] != 'X' && syms[1] != '/') {
                num2 = lastResult;
            } else {
                num2=number;
            }
            console.log(num1, num2,num3,lastResult)
        }

        if (ii >= 0) {
            if (sym == 'X') {
                multiply()
            }
            if (sym == '+') { add() }
            if (sym == '-') { substract() }
            if (sym == '/') { divide() }
        }
    }
    if (multiplyPre==1) {
        console.log(num1,num2)
        if (syms[1]=='X') {
            multiply()
        }
        if (syms[1]=='/') {
            divide()
        }
    }
}

// work

function add() {
    lastResult = parseInt(num1) + parseInt(num2);
    document.getElementById('inpOut').innerText = '';
    document.getElementById('inpOut').innerText = lastResult;
    document.getElementById('resultHead').innerText = 'RESULT'
}
function substract() {
    lastResult = parseInt(num1) - parseInt(num2);
    document.getElementById('inpOut').innerText = '';
    document.getElementById('inpOut').innerText = lastResult;
    document.getElementById('resultHead').innerText = 'RESULT'
}
function multiply() {
    console.log(lastResult)
    lastResult = (parseInt(num2) * parseInt(num1));
    console.log(lastResult)
    document.getElementById('inpOut').innerText = '';
    document.getElementById('inpOut').innerText = lastResult;
    document.getElementById('resultHead').innerText = 'RESULT'
}
function divide() {
    lastResult =  (parseInt(num1) / parseInt(num2));
    document.getElementById('inpOut').innerText = '';
    document.getElementById('inpOut').innerText = lastResult;
    document.getElementById('resultHead').innerText = 'RESULT'
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
    num1 = 0; num2 = 0; lastResult = 0; number = 0; clearForNew = 0;
}
function clearC() {
    document.getElementById('preceding').innerText = "";
    document.getElementById('inpOut').innerText = '0';
    num1 = 0; num2 = 0; lastResult = 0; number = 0; clearForNew = 0;
}











