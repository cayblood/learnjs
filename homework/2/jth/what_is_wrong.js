function createList(list) {
    var result = [];
    for (var i = 0; i < list.length; i++) { 
        var item = 'item' + list[i];
        result.push( (function(item, elem) {
                        return function() {console.log(item + ' ' + elem)};
                     }(item, list[i]))
                );
    }
    return result;
}

function runList() {
    var dList = createList([1,2,3]);
    for (var i = 0; i < dList.length; i++) {
         dList[i]();
    }
}

runList();
