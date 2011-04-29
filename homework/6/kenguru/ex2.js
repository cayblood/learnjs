//var echo = console.log;

var Validator = function() {
    return {
        isValidEmailAddress : function(emailAddr) {
            var regExp = new RegExp(/^[\+\-\.0-9a-zA-Z_]+@(?![a-zA-Z0-9\-]{1,253}\-$)/);
            return regExp.test(emailAddr);
        }
    }
}();

echo(Validator.isValidEmailAddress("what+ever@bla"));
