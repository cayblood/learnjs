(function(){
    var head = document.getElementsByTagName("head")[0];
    if (!window.jQuery) {
        head.appendChild(document.createElement('script')).src = 'http://jquery.com/src/jquery-latest.js';
    }
})();

// Ex 1
function log(txt){
    if (window.console) {
        console.log(txt);
    }
    else 
        if (window.aptana) {
            aptana.log(txt);
        }
        else {
            alert(txt);
        }
}

function ex1(){
    var x = 3;
    try {
        throw 5;
    } 
    catch (x) {
    }
    log("x = " + x);
}

ex1();


function ex1_1(x){
    var y = "Y";
    var z = "Z";
    try {
        throw x;
        throw y;
        throw z;
    } 
    catch (x) {
        log("x = " + x); // added to clearify
        log("y = " + y);
        log("z = " + z);
    }
    log("x = " + x);
}

ex1_1();

//Ex 2
var hello = "Hello World";
function ex2(){
    setTimeout(alert, 1000, hello); // Wrong usage, last param should be :lang 	Optional. JScript | VBScript | JavaScript 
}

ex2();

function ex2_1(){
    setTimeout(function(){
        alert(hello);
    }, 1000);
}

ex2_1();

// Ex 4
window['anders'] = function(){return "Always younger than Helge";};
function getAgeInYears(){
    return {
        helge: 28,
        anders: 56
    };
}

log(getAgeInYears().anders);

log(window['56']());




