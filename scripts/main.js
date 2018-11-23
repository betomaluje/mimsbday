// Constants
var normalLabels = ['The first one is free', 'Is kept by the 4 guardians', 'This is a party girl', 'I\'m sometimes blue, others white', 'You\'ve stared at me every day'];

var checkedLabels = [
  '<b>L</b>ovika mittens', 
  '<b>I</b>on shampoo', 
  '<b>F</b>lamingo bottle opener',
  '<b>O</b>rganic soap & shampoo',
  '<b>B</b>eatles notebook'
];

var successMessage = '<font size="3">You are AWESOME BABE! You did super good! But there\'s one more for you.<p><font size="6">Go an check your small suitcase...';

function compareDates() {
  var today = new Date();

  var mimsBirthdate = new Date('2018-11-24 0:00:00');

  toggleInitButton(today >= mimsBirthdate);

  loadCheckboxes();
}

function toggleInitButton(visible) {
  if(visible) {
    document.getElementById('begin').style.display = 'inline-block';
  } else {
    document.getElementById('begin').style.display = 'none';
  }
}

function reset() {
  localStorage.clear();
  document.getElementById('begin').disabled = false;
  document.getElementById('step1').style.display = 'none';
  document.getElementById('step2').style.display = 'none';
  document.getElementById('begin').style.display = 'inline-block';
  compareDates();
}

function beginAdventures(button) {
  var step1 = document.getElementById('step1');
  step1.style.display = 'block';

  button.style.display = 'none';
}

function goToStep2() {
  var step2 = document.getElementById('step2');
  step2.style.display = 'block';

  // just in case
  document.getElementById('step1').style.display = 'block';
}

function validateCode() {
  document.getElementById('hiddenMessage').style.display = 'block';

  var code = document.getElementById('secretCodeText').value.toLocaleUpperCase();
  var resultText = document.getElementById('resultText');

  var realCode = 'LIFOB26';

  if (code !== '' && code === realCode) {
    var step1 = document.getElementById('step1');
    step1.style.display = 'none';

    var step2 = document.getElementById('step2');
    step2.style.display = 'none';

    resultText.style.color = '#4CAF50';
    resultText.style.fontWeight = 'normal';
    resultText.innerHTML = successMessage;
  } else {
    var step1 = document.getElementById('step1');
    step1.style.display = 'block';

    resultText.style.color = 'red';
    resultText.style.fontWeight = 'bold';
    resultText.innerHTML = '<font size="3">The code you enter is incorrect';
  }
}

var checkboxesCount = 0;

function loadCheckboxes() {

  checkboxesCount = 0;

  for (var i = 1; i < 6; i++) {
    var  id = 'cb' + i;

    var localCheck = localStorage.getItem(id);
    
    var checkbox = document.getElementById(id);
    
    if (localCheck !== null) {

      if(localCheck === 'true') {
        checkboxesCount++;

        if (checkbox != null) {
          checkbox.checked = true;
        }
      } else {
        if (checkbox != null) {
          checkbox.checked = false;
        }
      }
    } else {
      if (checkbox != null) {
        checkbox.checked = false;
      }
    }

    var labelView = document.getElementById('lb' + i);

    if(checkbox.checked) {
      labelView.innerHTML = checkedLabels[i - 1];
    } else {
      labelView.innerHTML = normalLabels[i - 1];
    }
  }

  if (checkboxesCount == 5) {
    toggleInitButton(false);
    goToStep2();
  } else {
    document.getElementById('step2').style.display = 'none';
  }
}

function handleChange(checkbox, label) {
  localStorage.setItem(checkbox.id, checkbox.checked);
  loadCheckboxes();
}
