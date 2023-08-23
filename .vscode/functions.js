function keyPlay(event) {
  event.target.style.backgroundColor = 'red';
}

function keyReturn(event) {
  event.target.style.backgroundColor = '';
}
module.exports = { keyPlay, keyReturn };
