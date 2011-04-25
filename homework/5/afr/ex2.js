function totAge(lop) {
	var age = 0;
	for(var i=0;i<lop.length;i++) {
		age += lop[i].age;
	}
	return age;
}

function totAgeRec(lop) {
	lop.idx || (lop.idx = 0);
	lop.tot || (lop.tot = 0);
	if(lop.length > lop.idx) {
		var age = lop[lop.idx].age;
		lop.tot += age;
		lop.idx++;
		totAgeRec(lop);
	}
	return lop.tot;
}

aptana.log(totAge( [
   {name: 'Anders Froyloff', age: 102},
   {name: 'Helge LangBalle', age: 103},
   {name: 'Tore Jon Den Yngre', age: -1}
]));

aptana.log(totAgeRec( [
   {name: 'Anders Froyloff', age: 102},
   {name: 'Helge LangBalle', age: 103},
   {name: 'Tore Jon Den Yngre', age: -1}
]));
