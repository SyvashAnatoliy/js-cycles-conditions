const startButton = document.getElementById('start');
startButton.onclick = main;

// Function to calculate age based on user input

function calculateAge () {

  let age = prompt('Enter your age:');

  let message = (age <= 12) ? 'You are a child.' :
                (age <= 18) ? 'You are a teenager.' :
                (age <= 60) ? 'You are an adult.' :
                (age <= 100) ? 'You are a senior citizen.' :
                'Invalid age entered.';

  alert(message);
}

// Function to calculate the symbol based on user input

function calculateSymbol () {

  let symbol = prompt('Enter a number between 1 and 10:');

  if (symbol < 1 || symbol > 10) {
    alert('Invalid number entered.');
    return;
  }
  else if (symbol = 1) {
    alert('You entered the symbol: !');
  }
  else if (symbol = 2) {
    alert('You entered the symbol: @');
  }
  else if (symbol = 3) {
    alert('You entered the symbol: #');
  }
  else if (symbol = 4) {
    alert('You entered the symbol: $');
  }
  else if (symbol = 5) {
    alert('You entered the symbol: %');
  }
  else if (symbol = 6) {
    alert('You entered the symbol: ^');
  }
  else if (symbol = 7) {
    alert('You entered the symbol: &');
  }
  else if (symbol = 8) {
    alert('You entered the symbol: *');
  }
  else if (symbol = 9) {
    alert('You entered the symbol: (');
  }
  else if (symbol = 10) {
    alert('You entered the symbol: )');
  }
}

// Function to calculate the sum of numbers between two user inputs

function calculateSumBetween () {
  let firstNumber = parseInt(prompt('Enter the first number:'));
  let secondNumber = parseInt(prompt('Enter the second number:'));

  let sum = 0;

  for (let i = firstNumber; i <= secondNumber; i++) {
    sum += i;
  }

  alert('The sum between ' + firstNumber + ' and ' + secondNumber + ' is: ' + sum);
}

// Function to calculate the GCD (Greatest Common Divisor) of two numbers

function calculateGCD () {
  let firstNumber = parseInt(prompt(`Enter the first number`));
  let secondNumber = parseInt(prompt(`Enter the second number`));
  
    while (secondNumber !== 0) {
        let temp = secondNumber;      // Зберігаємо num2
        secondNumber = firstNumber % secondNumber;   // Знаходимо залишок
        firstNumber = temp;          // Присвоюємо temp як новий num1
    }

  alert(`The GCD is: ${firstNumber}`);
}

function calculateAllDivisors () {
  let number = parseInt(prompt('Enter a number:'));

  for (let i=1;i <= number; i++) {
    if (number % i === 0) {
      alert(`The divisor of ${number} is: ${i}`);
    }
  }
}

// Main function to execute the age and symbol calculations

function main () {
  calculateAge();
  calculateSymbol();
  calculateSumBetween();
  calculateGCD();
  calculateAllDivisors();
}