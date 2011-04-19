var X = function(z){this.z = z;};
X.prototype.y = function(){aptana.log(this.z);};
X.prototype = {
	y:function(){aptana.log(this.z);}
};
var x = new X("Y");
x.y();