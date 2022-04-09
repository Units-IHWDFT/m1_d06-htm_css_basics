console.log("Script loaded.")
const element = document.querySelector('.red');
const sizeP = document.getElementById('size')
const positionInfo = element.getBoundingClientRect();
const height = positionInfo.height;
const width = positionInfo.width;

sizeP.textContent = `${width}px ${height}px`;