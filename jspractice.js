
// have numbers show up in the box field (accept for c)
function addtoscreen(x) {
    box.value+= x;
    if ( x == 'C') {
        box.value='';
} 
}

//if there is a +, x or / then do not allow another symbol to be added.


//run equation and produce result
function answer() {
    x=box.value;
    x=eval(x);
    box.value=x;
}

function backSpace() {
    var number = box.value;
    var len = number.length-1;
    var newnumber = number.substring(0,len);
    box.value= newnumber;
}

var box = document.getElementById('display');


document.getElementById('C').addEventListener('click', function() {
    addtoscreen('C');
}, false);
document.getElementById('1').addEventListener('click', function() {
    addtoscreen('1');
}, false);
document.getElementById('2').addEventListener('click', function() {
    addtoscreen('2');
}, false);


document.getElementById('3').addEventListener('click', function() {
    addtoscreen('3');
}, false);
document.getElementById('4').addEventListener('click', function() {
    addtoscreen('4');
}, false);
document.getElementById('5').addEventListener('click', function() {
    addtoscreen('5');
}, false);
document.getElementById('6').addEventListener('click', function() {
    addtoscreen('6')
}, false);
document.getElementById('7').addEventListener('click', function() {
    addtoscreen('7');
}, false);
document.getElementById('8').addEventListener('click', function() {
    addtoscreen('8');
}, false);
document.getElementById('9').addEventListener('click', function() {
    addtoscreen('9');
}, false);
document.getElementById('0').addEventListener('click', function() {
    addtoscreen('0');
}, false);


document.getElementById('.').addEventListener('click', function() {
    addtoscreen('.');
}, false);
document.getElementById('+').addEventListener('click', function() {
    addtoscreen('+');
}, false);
document.getElementById('-').addEventListener('click', function() {
    addtoscreen('-');
}, false);
document.getElementById('x').addEventListener('click', function() {
    addtoscreen('*');
}, false);
document.getElementById('/').addEventListener('click', function() {
    addtoscreen('/');
}, false);

document.getElementById('equal').addEventListener('click', answer, false);
document.getElementById('<--').addEventListener('click', backSpace, false);


