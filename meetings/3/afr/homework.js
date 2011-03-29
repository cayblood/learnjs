(function(){
    var head = document.getElementsByTagName("head")[0];
    if (!window.jQuery) {
        head.appendChild(document.createElement('script')).src = 'http://jquery.com/src/jquery-latest.js';
    }
})();

function test(x){
    var y = "Y";
    var z = "Z";
    try {
        throw x;
        throw y;
        throw z;
    } 
    catch (x) {
        alert(x); // added to clearify
        alert(y);
        alert(z);
    }
    alert(x);
}

test();

if (jQuery) {
    alert("jquery");
	if(window.console) {
		console.log("KOKO");
	}
}
