var vldt = function(str) {
    return /^[\w\+]*@\w*\.\w*$/.test(str);
}

console.log(vldt('crap@crap'));

console.log(vldt('testur+garbage@testur.is'));
