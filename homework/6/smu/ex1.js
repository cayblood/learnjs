var nrmlz = function(str) {
    return !str || str.replace(/\_/g, ' ').toLowerCase();
}

console.log(nrmlz('OHAI_I_Can_Haz Cheezburger?'));