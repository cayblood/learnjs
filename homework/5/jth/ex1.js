var mixArr = [
  'zero', true, {arne: 23, test: 33}, new Array(1, 2, 3, 100)
];

function typeOf(value) {
    var s = typeof value;
    if (s === 'object') {
        if (value) {
            if (value instanceof Array) {
                s = 'array';
            }
        } else {
            s = 'null';
        }
    }
    return s;
};

var traverseArr = function(arr, fun) {
    for(var i = 0; i < arr.length; i++) {
        console.log(i);
        var obj = arr[i];:
        if(typeOf(obj) === 'array') {
            traverseArr(obj, fun);
        } else {
            fun(obj);
        }
     }
};

console.log(traverseArr(mixArr, console.log));
