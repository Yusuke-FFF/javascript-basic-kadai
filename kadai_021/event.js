// ボタンとテキスト要素を取得
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンクリック時のイベントリスナーを設定
btn.addEventListener('click', () => {
    setTimeout(() => {
        text.innerText = "ボタンをクリックしました";
    }, 2000); // 2秒（2000ミリ秒）後に実行
});
