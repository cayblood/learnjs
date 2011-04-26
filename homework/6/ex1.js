var text = "this_Is_a_Snake_CaSed_Text";

var tags = /([A-Za-z]+)(_?)+/g;


var extract = function(text, pattern) {
    var a, i, newText = '';
    while((a = tags.exec(text))) {
        if(a.length > 1) {
            newText += a[1].toLocaleLowerCase() + " "; 
       }
    }
    return newText;
}
console.log(extract(text, tags));
