//Ex1: The result is a popup with 3 due to closure

//Ex2: Opens a popup with Hello world after 5 seconds

function getAgeInYears() {
        return {
            helge: 28,
            anders: 56
        };
}

function findOldest(persons) {
    var oldestAge = 0;
    var oldestPers;
    for(var pers in persons) {
        if(persons.hasOwnProperty(pers)) {
            if(oldestAge < persons[pers]) {
                oldestAge = persons[pers]
                oldestPers = pers;
            }
        }
    }
    return oldestPers + " is " + oldestAge + " years old";
}

var str = findOldest(getAgeInYears());
console.log(str);



