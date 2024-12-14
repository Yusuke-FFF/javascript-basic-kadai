// ボタンの要素を取得
const button = document.getElementById("btn");
const message = document.getElementById("text");

// クリックイベントを追加
button.addEventListener("click", function() {
    // テキストを変更
    message.textContent = "ボタンをクリックしました";
});