
function checkEmail(inputvalue){	
    var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    if(pattern.test(inputvalue)){         
		alert("true");   
    }else{   
		alert("false"); 
    }
}

var test_email = "test@test.com";
console.log(checkEmail(test_email));
var test_email2 ="&%%&@test.com";
console.log(checkEmail(test_email2));