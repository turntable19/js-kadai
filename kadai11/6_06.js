//console.log(document.body);
//console.log(document.body.childElementCount);

//for (let i = 0; i < document.body.childElementCount; i++) {
    //console.log(i + ':' + document.body.children[i]);
//}
//console.log(document.body.children);

//id属性で要素を取得する書き方
//document.getElementById('id名');
//タグ名で要素を取得する書き方
//document.getElementsByTagName('タグ名');
//クラス名で要素を取得する書き方
//document.getElementsByClassName('id');
//CSSセレクタで要素を取得する書き方
//document.querySelector('CSSセレクタ');
//document.querySelectorAll('CSSセレクタ');

let e1 = document.getElementById('p1');
let e2 = document.getElementById('p2');
let e3 = document.getElementById('p3');

console.log(e1.tagName);
e1.innerHTML = '<input id=""></input>';
e2.innerText = 'テキストの部分の文字列';;
e3.id = 'p5';

