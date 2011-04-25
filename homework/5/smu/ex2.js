var oldFolks = [
   {name: 'Anders Froyloff', age: 102},
   {name: 'Helge LangBalle', age: 103},
   {name: 'Tore Jon Den Yngre', age: -1}
];

var sum = function(arr, fn, idx, res) {
  idx || (idx = 0)  ;
  res || (res = 0);
  if (fn && arr && arr.length > idx) {
    var num = fn(arr[idx]);
    res += sum(arr, fn, ++idx, num);
  }
  return res;
}

var age = sum(oldFolks, function(p) {
  return p.age;
});

// The folks has a total age of: 204
console.log("The folks has a total age of: " + age);


// reduce ey?

var age2 = oldFolks.reduce(function(total_age, person) {
  return total_age + person.age;
}, 0);

console.log("The folks has a total age of: " + age2);