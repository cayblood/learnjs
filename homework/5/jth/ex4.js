
var altMatrix = function (m, n) {
    var i, mat = [];
    var iterate = function(offset, inc) {
        var i, a = [];
        for(i = 0; i < m; i += inc) {
           a[i] = (i + offset) % 2;
        }
        return a;
    }
    
    for(i = 0; i < n; i += 1) {
        mat[i] = iterate(i % 2, 1);
    }

    return mat;
}

console.log(altMatrix(10, 10));
