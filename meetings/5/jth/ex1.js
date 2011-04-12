var mixArr = [
  'zero', true, { arne: 23, test: 33}, [1, 2, 3]
];

var traverseArr = function(arr, fun) {
    for(var i = 0; i < arr.length; i++) {
        var obj = arr[i]
        if(typeof obj === 'object' || typeof obj === 'array'){
            traverseArr(obj, fun);
        } else {
            fun(obj);
        }
     }
};

console.log(traverseArr(mixArr, console.log));
