function totAgeDiv(lop) {
	if(lop.length == 1)
		return lop[0].age;
	var num = lop[0].age;
	var divAge = num;
	for(var i=1;i<lop.length;i++) {
		divAge /= lop[i].age;
	}
	return divAge;
}

function divAgeRec(lop) {
	lop.idx || (lop.idx = 1);
	lop.divAge || (lop.divAge = lop[0].age);
	if(lop.length > lop.idx) {
		var age = lop[lop.idx].age;
		lop.divAge = lop.divAge/age;
		lop.idx++;
		divAgeRec(lop);
	}
	return lop.divAge;
}

aptana.log(totAgeDiv( [
   {name: 'Anders Froyloff', age: 102},
   {name: 'Helge LangBalle', age: 103},
   {name: 'Tore Jon Den Yngre', age: -1}
]));

aptana.log(divAgeRec( [
   {name: 'Anders Froyloff', age: 102},
   {name: 'Helge LangBalle', age: 103},
   {name: 'Tore Jon Den Yngre', age: -1}
]));
