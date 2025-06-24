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

  let symbol = parseInt(prompt('Enter a number between 1 and 10:'));

  if (symbol < 1 || symbol > 10) {
    alert('Invalid number entered.');
    return;
  }
  else if (symbol === 1) {
    alert('You entered the symbol: !');
  }
  else if (symbol === 2) {
    alert('You entered the symbol: @');
  }
  else if (symbol === 3) {
    alert('You entered the symbol: #');
  }
  else if (symbol === 4) {
    alert('You entered the symbol: $');
  }
  else if (symbol === 5) {
    alert('You entered the symbol: %');
  }
  else if (symbol === 6) {
    alert('You entered the symbol: ^');
  }
  else if (symbol === 7) {
    alert('You entered the symbol: &');
  }
  else if (symbol === 8) {
    alert('You entered the symbol: *');
  }
  else if (symbol === 9) {
    alert('You entered the symbol: (');
  }
  else if (symbol === 10) {
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

// Function to calculate all divisors of a number

function calculateAllDivisors () {
  let allDivisors = [];
  let number = parseInt(prompt('Enter a number:'));

  for (let i=1;i <= number; i++) {
    if (number % i === 0) {
      allDivisors.push(i);
    }
  }
  alert(`All divisors of ${number} are: ${allDivisors.join(', ')}`);
}

// Function to check if a 5-digit string is a palindrome

function calculatePalindrome () {
  let str = prompt('Enter a 5-digit string:');
  let reversedStr = str.split('').reverse().join('');
  
  if (str.length !== 5) {
    alert('Please enter a 5-digit string.');
  }
  else if (str === reversedStr) {
    alert(`${str} is a palindrome.`);
  } else {
    alert(`${str} is not a palindrome.`);
  }
}

// Function to calculate the discount on a purchase based on the sum

function calculateItemDiscount () {
  purchaseSum = parseFloat(prompt('Enter the purchase sum:'));

  let discountPercent = 0;

  if (purchaseSum >= 200 && purchaseSum < 300) {
    discountPercent = 3;
  } else if (purchaseSum >= 300 && purchaseSum < 500) {
    discountPercent = 5;
  } else if (purchaseSum >= 500) {
    discountPercent = 7;
  }

  let discountAmount = (purchaseSum * discountPercent) / 100;
  let finalSum = purchaseSum - discountAmount;

  alert(`Purchase sum with discount of ${discountPercent}% is: ${finalSum.toFixed(2)}`);
}

// Function to calculate the type of numbers based on user input

function calculateNumbersType () {

  let posNumbers = [];
  let negNumbers = [];
  let zeroNumbers = [];
  let oddNumbers = [];
  let evenNumbers = [];
  let numbers = [];

  numbers.push(parseInt(prompt('Enter a first number:')));
  numbers.push(parseInt(prompt('Enter a second number:')));
  numbers.push(parseInt(prompt('Enter a third number:')));
  numbers.push(parseInt(prompt('Enter a fourth number:')));
  numbers.push(parseInt(prompt('Enter a fifth number:')));
  numbers.push(parseInt(prompt('Enter a sixth number:')));
  numbers.push(parseInt(prompt('Enter a seventh number:')));
  numbers.push(parseInt(prompt('Enter an eighth number:')));
  numbers.push(parseInt(prompt('Enter a ninth number:')));
  numbers.push(parseInt(prompt('Enter a tenth number:')));

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      posNumbers.push(numbers[i]);
    } else if (numbers[i] < 0) {
      negNumbers.push(numbers[i]);
    } else {
      zeroNumbers.push(numbers[i]);
    }
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    } else {
      oddNumbers.push(numbers[i]);
    }
  }
  alert(`Positive numbers: ${posNumbers.join(', ')}\n` +
        `Negative numbers: ${negNumbers.join(', ')}\n` +
        `Zero numbers: ${zeroNumbers.join(', ')}\n` +
        `Odd numbers: ${oddNumbers.join(', ')}\n` +
        `Even numbers: ${evenNumbers.join(', ')}`);
}

// Main function to execute the age and symbol calculations

function main () {
  calculateAge();
  calculateSymbol();
  calculateSumBetween();
  calculateGCD();
  calculateAllDivisors();
  calculatePalindrome();
  calculateItemDiscount();
  calculateNumbersType();
}