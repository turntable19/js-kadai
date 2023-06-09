// ハンドラの登録
//function clickButton() {
//     let span = document.getElementById('msg');
//     span.classList.remove('hidden');
// }

//リスナの登録
// let target = document.getElementById('btn01');
// target.addEventListener('click', function() {
//     let span = document.getElementById('msg');
//     span.classList.remove('hidden');
// });

// カウント
let count = 0;

// カウントの値を加算する巻子
function counter() {
    count++;
    document.getElementById('msg').innerHTML = count;
}

// 1000ミリ秒（１秒）ごとにcounter関数を実行するタイマーを開始
let intervalId = setInterval(counter, 1000);

// ストップボタンのイベントリスナ
let target = document.getElementById('btn01');
target.addEventListener('click', function() {
    // タイマーをキャンセル
    clearTimeout(intervalId);
});