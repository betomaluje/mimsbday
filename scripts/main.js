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

  if (code !== '' && code === 'caca') {
    document.getElementById('demo').innerHTML = 'Nice!';
  } else {
    document.getElementById('demo').innerHTML = 'The code you enter is incorrect';
  }

}
