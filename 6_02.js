function triangle(p1, p2,) {
    let p = p1 * p2 / 2;        
    return p;               
}

console.log(triangle(10, 20));

// 名前のない関数の定義（変数に関数を代入）
var triangle2 = function(p1, p2) {
    let p = p1 * p2 / 2;        
    return p;               
}

console.log(triangle2(10, 20));