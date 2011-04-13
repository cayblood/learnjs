var oldFolks = [
    {name: 'Anders Froyloff', age: 102},
    {name: 'Helge LangBalle', age: 103},
    {name: 'Tore Jon Den Yngre', age: -1}
];

var addAge = function(oldy1, oldy2) {
    if (typeof oldy1 === 'object') {
        return oldy1.age + oldy2.age;
    } else if(typeof oldy1 === 'number' && typeof oldy2 === 'object') {
        return oldy1 + oldy2.age;
    }

}

var divideAge = function(oldy1, oldy2) {
    if (typeof oldy1 === 'object') {
        return oldy1.age/oldy2.age;
    } else if(typeof oldy1 === 'number' && typeof oldy2 === 'object') {
        return oldy1/oldy2.age;
    }

}

var totalAge = oldFolks.reduce(addAge);
console.log("The folks has a total age of: " + totalAge);

var divAge = oldFolks.reduce(divideAge);
console.log("The divided age of the folks is: " + divAge);

