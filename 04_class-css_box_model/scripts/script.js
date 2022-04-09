const element = document.querySelector('.box');
const sizeP = document.getElementById('size')
const positionInfo = element.getBoundingClientRect();
const height = positionInfo.height;
const width = positionInfo.width;

sizeP.textContent = `${width}px ${height}px`;