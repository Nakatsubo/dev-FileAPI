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
