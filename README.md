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

## FileReaderオブジェクト

|メソッド|振る舞い|
|-----|-----|
|FileReader|FileReaderオブジェクトを生成|
|readAsBinaryString()|バイナリデータを取得|
|readAsText()|UTF-8形式のテキストに変換|
|readAsDataURL()|DataURL形式の文字列に変換|
|readAsArrayBuffer()|ArrayBufferオブジェクトに変換|
|abort()|読み取りを中止|
|result|データへアクセス|

- HTML

```
:<snip>
<h1>File API</h1>
<p>
  <input type="file" id="myFile">
</p>
<table>
  <!-- Fileオブジェクトの取得 -->
  <tr>
    <th>File Name</th>
    <td id="fileName"></td>
  </tr>
  <tr>
    <th>File Size</th>
    <td id="fileSize"></td>
  </tr>
  <tr>
    <th>MINE Type</th>
    <td id="mineType"></td>
  </tr>
  <tr>
    <th>Latest Date</th>
    <td id="latestDate"></td>
  </tr>

  <!-- FileReaderオブジェクト -->
  <tr>
    <th>Preview</th>
    <td id="preview"><img /></td>
  </tr>
  </table>
:<snip>
```

- JavaScript

```
const myFile = document.querySelector('#myFile');
// console.log(myFile);

myFile.addEventListener('change', (e) => {
  const files = e.target.files;
  const file = files[0];
  // console.log(file);

  // File Name
  const fileName = document.querySelector('#fileName');
  fileName.innerHTML = file.name;

  // File Size
  const fileSize = document.querySelector('#fileSize');
  fileSize.innerHTML = file.size;

  // Mine Type
  const mineType = document.querySelector('#mineType');
  mineType.innerHTML = file.type;

  // Latest Date
  const latestDate = document.querySelector('#latestDate');
  latestDate.innerHTML = file.lastModifiedDate;

  // FileReader オブジェクト
  const reader = new FileReader();

  // 読み込みが完了したら画像を表示
  reader.addEventListener('load', () => {
    const preview = document.querySelector('#preview img');
    console.log(preview);
    // => <img src="data:image/png;base64,...">

    preview.src = reader.result;
  }, false);

  // DataURL形式の文字列に変換
  reader.readAsDataURL(file);

}, false);
```

## Appendix

### Base64
バイナリーからテキストへの符号化を行う手法のグループであり、64 を基数とする表現に変換することで、バイナリーデータを ASCII 文字列で表す。<br>
<a href="https://developer.mozilla.org/ja/docs/Web/API/WindowBase64/Base64_encoding_and_decoding" target="_blank" rel="noopener">MDN web docs</a>
