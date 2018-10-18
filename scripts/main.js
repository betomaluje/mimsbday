// Image switcher code

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox2.png');
	} else {
	  myImage.setAttribute ('src','images/firefox-icon.png');
	}
}

function validateCode() {
  document.getElementById("hiddenMessage").style.display = 'block';

  var code = document.getElementById("secretCodeText").value;

  document.getElementById("demo").innerHTML = "The code you enter is: " + code;

}
