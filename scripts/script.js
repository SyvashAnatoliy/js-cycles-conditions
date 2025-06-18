const startButton = document.getElementById('start');
startButton.onclick = main;

function calculateAge () {

  let age = prompt('Enter your age:');

  if (age >= 1 && age <= 11) {
    alert('You are a child.');
  }

  else if (age >= 12 && age <= 17) {
    alert('You are an teenager.');
  }

  else if (age >= 18 && age <= 59) {
    alert('You are an adult.');
  }
  else if (age >= 60) {
    alert('You are a old person.');
  }

  else {
    alert('Invalid age entered.');
  }
}

function main () {
  calculateAge();
}