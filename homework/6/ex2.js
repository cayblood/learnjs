var testur = "testur+garbage@testur.is"
var wrongur = "atnoehu9838383oah&*#(*&^%^&*(*%%%@83838MDIKDIKII.t..t.t.t.t.t.tu433--"

var validateEmail = function(email) {
    var pattern = /([A-Za-z0-9.\+\-)]+)@([a-zA-Z0-9.])(.[a-z])+/;
    var a, i, newText = '';
    return pattern.test(email)
}
console.log(testur + " valid email " + validateEmail(testur));
console.log(wrongur + " valid email " + validateEmail(wrongur));
