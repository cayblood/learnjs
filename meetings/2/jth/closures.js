
var mult = function (con) {
    var func = function (inc) {
        return  con * inc; 
    }
    return func;
};

var multTwo = mult(2);
var multThree = mult(3)
console.log(multTwo(3));
console.log(multThree(3));
