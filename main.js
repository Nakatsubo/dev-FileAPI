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
}, false);
