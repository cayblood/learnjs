
Array.prototype.d2 = function(rows,columns,fn) {
	var result = new Array(rows);
	for(var r=0;r<rows;r++) {
		result[r] = new Array(columns);
		for(c=0;c<columns;c++) {
			result[r][c] = fn(r,c);
		}
	}
	return result;
};

function createMatrix(rows,columns){
	var matrix = new Array(rows);
	var m = 0;
	for(var r=0;r<rows;r++) {
		matrix[r] = new Array(columns);
		for(var c=0;c<columns;c++) {
			matrix[r][c] = m%2;
			m++;
		}
	}
	return matrix;
}

createMatrix(10,10).forEach(function(v){aptana.log(v);});
aptana.log("  ");
[].d2(10,10,function(r,c){return c%2;}).forEach(function(v){aptana.log(v);});
