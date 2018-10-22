// Image switcher code

function switchImage() {
  var myImage = document.getElementById('myImg');

  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/firefox2.png');
  } else {
    myImage.setAttribute('src', 'images/firefox-icon.png');
  }
}

function validateCode() {
  document.getElementById('hiddenMessage').style.display = 'block';

  var code = document.getElementById('secretCodeText').value;
  var resultText = document.getElementById('resultText');

  if (code !== '' && code === 'caca') {
    resultText.style.color = '#4CAF50';
    resultText.style.fontWeight = 'normal';
    resultText.innerHTML = 'Nice!';
  } else {
    resultText.style.color = 'red';
    resultText.style.fontWeight = 'bold';
    resultText.innerHTML = 'The code you enter is incorrect';
  }

}
