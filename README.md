# README

# File API
JavaScriptによって、Webページからユーザーの環境下のファイルを要求し、その内容を読み込む。<br>
ファイルの選択はHTMLのinputタグ、もしくはドラッグ&ドロップで実行する。<br>
<br>
<a href="https://developer.mozilla.org/ja/docs/Web/API/File/Using_files_from_web_applications" target="_blank" rel="noopener">MDN web docs</a>

## Fileオブジェクトの取得
changeイベントによって、ユーザーが選択したファイルからFileオブジェクトを取得する。

```
<input type="file" id="myFile">

const input = document.querySelector('#myFile');
input.addEventListener('change', (e) => {
  const files = e.target.value;
  const file = files[0]:
  // ...
}, false)
```
