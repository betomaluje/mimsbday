// Constants
var normalLabels = ['clue 1', 'clue 2', 'clue 3', 'clue 4', 'clue 5'];

var checkedLabels = [
  '<b>F</b>lamingo bottle opener', 
  '<b>L</b>ovika mittens', 
  '<b>I</b>on shampoo & balsam', 
  '<b>F</b>ruits', 
  '<b>O</b>rganic soap & shampoo'
];

function compareDates() {
  var today = new Date();

  var mimsBirthdate = new Date('2018-11-24 0:00:00');

  loadCheckboxes();

  toggleInitButton(today >= mimsBirthdate);
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
  document.getElementById('begin').style.display = 'none';

  var step2 = document.getElementById('step2');
  step2.style.display = 'block';
}

function validateCode() {
  document.getElementById('hiddenMessage').style.display = 'block';

  var code = document.getElementById('secretCodeText').value.toLocaleUpperCase();
  var resultText = document.getElementById('resultText');

  var realCode = 'FLIFO26';

  if (code !== '' && code === realCode) {
    resultText.style.color = '#4CAF50';
    resultText.style.fontWeight = 'normal';
    resultText.innerHTML = 'Nice!';
  } else {
    resultText.style.color = 'red';
    resultText.style.fontWeight = 'bold';
    resultText.innerHTML = 'The code you enter is incorrect';
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
    goToStep2();
  } else {
    document.getElementById('step2').style.display = 'none';
  }
}

function handleChange(checkbox, label) {
  localStorage.setItem(checkbox.id, checkbox.checked);
  loadCheckboxes();
}
