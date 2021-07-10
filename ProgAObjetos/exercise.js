// Segundo exercício
// reverse string

let newStr = '';
let resultado2 = reverseAString('Hello Gama Academy');

function reverseAString(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
    console.log(newStr);
  }
}

// Exemplo 3:

let sum = (a, b) => {
  return a + b;
};
console.log(sum(3, 2));

let average = (a, b) => {
  return sum(a, b) / 2;
};
console.log(average(3, 2));
console.log('---------------------------------');

// Exemplo 4:

function wantProfit(
  currentPricePercentage,
  currentValuePrice,
  profitPercentage
) {
  return (
    ((currentValuePrice * 100) / currentPricePercentage) *
    (1 + profitPercentage / 100)
  );
}

console.log(wantProfit(60, 300, 25));
console.log('---------------------------------');

// Exemplo 5:
// Already done on example 3
console.log('---------------------------------');

// Example 6:
function wantDiscount(currentValuePrice, discountPercentage) {
  return currentValuePrice * (1 - discountPercentage / 100);
}

console.log(wantDiscount(3000, 25));
console.log('---------------------------------');

// Example 7:
function meterToMm(a) {
  return a * 1000;
}
console.log(meterToMm(1));
console.log('---------------------------------');

// Example 8:
// Written in another file ./trafficLight.js

// Example 9:
//FizzBuzz
// Divisivel por 3 -> "Fizz"
// Divisivel por 5 -> "Buzz"
// Divisivel por 3 e 5 -> "FizzBuzz"
// Se não for número -> "não é um número"
// Se não for divisivel por 3 e 5 ->  entrada

let resultado = fizzBuzz();
console.log(resultado);

function fizzBuzz(entrada) {
  if (typeof entrada !== 'number') {
    return 'não é um número';
  }

  if (entrada % 3 === 0 && entrada % 5 === 0) {
    return 'FizzBuzz';
  } else if (entrada % 5 === 0) {
    return 'Buzz';
  } else if (entrada % 3 === 0) {
    return 'Fizz';
  } else {
    return entrada;
  }
}

console.log('---------------------------------');

// Example 11:
function doIMC(kg, height) {
  let squaredHeight = height * height;
  let result = kg / squaredHeight;

  result = result.toFixed(2);

  if ((result < 18, 5)) {
    return `Seu resultado é ${result}. Você está na categoria Magreza`;
  } else if ((18, 5 < result < 24, 9)) {
    return `Seu resultado é ${result}. Você está na categoria Normal`;
  } else if ((24, 9 <= result < 30)) {
    return `Seu resultado é ${result}. Você está na categoria Sobrepeso`;
  } else {
    return `Seu resultado é ${result}. Você está na categoria Obesidade`;
  }
}

console.log(doIMC(74, 1.8));

console.log('---------------------------------------');

// Example 12:
// odd or even

function oddOrEven(number) {
  if (number % 2 == 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

console.log(oddOrEven(11));

console.log('---------------------------------------');

// Example 13:
// Times Tables

function timesTables(number) {
  for (let i = 0; i <= 10; i++) {
    const variant = i;
    let result = number * variant;
    console.log(result);
  }
}
timesTables(1);
console.log('---------------------------------------');

// Example 14:
let result = [];

function evens(number) {
  for (let i = 0; i <= 100; i++) {
    const element = i;
    if (element % 2 == 0) {
      result.push(element);
    }
  }
}

evens();

console.log(result);
console.log('---------------------------------------');

// Example 15:
// temperature converter
// Celcius to Fahrenheit

let result1 = convertToFarenheit('oi');
console.log(result1);

function convertToFarenheit(temperature) {
  if (typeof temperature == 'number') {
    return temperature * (9 / 5) + 32;
  }
  return 'Favor colocar um número';
}

console.log('---------------------------------');

// Example 16
// Factorial

function factorial(number) {
  let answer = 1;
  if (number == 0 || number == 1) {
    return answer;
  } else {
    for (let i = number; i >= 1; i--) {
      answer = answer * i;
    }
    console.log(answer);
  }
}

factorial(2);

console.log('---------------------------------');

// Example 17
// times

let times = (a, b) => {
  return a * b;
};
console.log(times(2, 3));

console.log('---------------------------------');

// Example 18
// discount
// Already done on example 16

let fixedDiscount = 5;
wantDiscount(300, fixedDiscount);
console.log(
  'wantDiscount(300,fixedDiscount)',
  wantDiscount(300, fixedDiscount)
);

console.log('---------------------------------');

// Example 19:
//  currency conversor

console.log('---------------------------------');

// Example 20:
//  break

function count() {
  let variant = 0;
  for (let i = 0; i < 50; i++) {
    variant = i;
    if (i == 25) {
      break;
    }
  }
  return variant;
}

console.log(count());

function count10() {
  let variant = 0;
  for (let i = 0; i <= 50; i++) {
    variant = i;
    if (i == 10) {
      continue;
    }
    console.log(variant);
  }
}
count10();

// Example 21:
//  10 in 10

console.log('---------------------------------');

function tenInTen() {
  for (let i = 0; i <= 100; i += 10) {
    const variant = i;
    if (variant == 60 || variant == 90) {
      console.log('CONTINUE');
    }
    console.log(variant);
  }
}

tenInTen();

console.log('---------------------------------');

// Example 22:
//  Bank Account
// deposit, withdraw, balance

let saldo = 100;

function bankAccount(number, action) {
  if (action == 'deposit' || action == 'Deposit') {
    saldo += number;
    console.log(saldo);
  } else if (action == 'withdraw' || action == 'Withdraw') {
    saldo -= number;
    console.log(saldo);
  } else if (action == 'balance' || action == 'Balance') {
    saldo;
    console.log(saldo);
  } else {
    console.log(
      'Choose a number and the action of deposit, withdraw or balance'
    );
  }
}
bankAccount(10, 'balance');

console.log('---------------------------------');

// Example 23:

function fiveInFive() {
  for (let i = 10; i <= 60; i += 5) {
    const variant = i;
    if (variant == 35 || variant == 45) {
      console.log('PULOU');
      continue;
    }
    console.log(variant);
  }
}

fiveInFive();

console.log('---------------------------------');

// Example 24:
// Convert days to hours

function daysToHours(days) {
  let result = days * 24;
  console.log(result);
  return result;
}

daysToHours(2);

console.log('---------------------------------');

// Example 26:
function loop() {
  for (let i = 1; i <= 100; i++) {
    const element = i;
    if (element == 50) {
      break;
    }
    console.log(element);
  }
}
loop();

function forget50() {
  for (let i = 1; i <= 100; i++) {
    const element = i;
    if (element == 50) {
      continue;
    }
    console.log(element);
  }
}
forget50();

console.log('---------------------------------');

// Example 27:
// Calculator

function calculator(number1, number2, action) {
  if (action == 'sum' || action == 'Sum') {
    return number1 + number2;
  } else if (action == 'minus' || action == 'Minus') {
    return number1 - number2;
  } else if (action == 'division' || action == 'Division') {
    return number1 / number2;
  } else if (action == 'multiplication' || action == 'Multiplication') {
    return number1 * number2;
  }
}
calculator(10, 2, 'multiplication');
console.log(`calculator(10,2,"multiplication")`, calculator(10, 2, 'sum'));

console.log('---------------------------------');

// Example 28:
// DiscountCalculator

function discountCalculator(price, discount) {
  let discountValue = (price * discount) / 100;
  let discountedPrice = price - (price * discount) / 100;
  console.log(discountValue, discountedPrice);
}

discountCalculator(10, 10);

console.log('---------------------------------');

// Example 29:
// trip duration

function tripCalculator(distance, averageSpeed) {
  let hour = distance / averageSpeed;
  let intPart = Math.trunc(hour);
  let floatPart = Number((hour - intPart).toFixed(2));
  let minutes = floatPart * 60;
  console.log(
    `Your trip's duration is ${hour} hour(s) and ${minutes} minute(s)`
  );
}

tripCalculator(120, 100);

console.log('---------------------------------');

// Example 30:
// waiter's tip

function tip(price) {
  let tip = price * 1.1;
  let totalPrice = price + tip;

  totalPrice = `R$ ${totalPrice.toFixed(2)}`;
  tip = `R$ ${tip.toFixed(2)}`;
  console.log(`The waiter's tip is ${tip} and total price is ${totalPrice}`);
}

tip(100);

console.log('---------------------------------');

// Example 31:
// days of the week

function daysWeek(day) {
  switch (day) {
    case 1:
      console.log('Monday');
      break;
    case 2:
      console.log('Tuesday');
      break;
    case 3:
      console.log('Wednesday');
      break;
    case 4:
      console.log('Thursday');
      break;
    case 5:
      console.log('Friday');
      break;
    case 6:
      console.log('Saturday');
      break;
    case 7:
      console.log('Sunday');
      break;

    default:
      console.log('Please enter a number from 1 to 7');
      break;
  }
}
daysWeek('-');

console.log('---------------------------------');

// Example 32:
// Bigger Numbers

function biggerOrEqual(number1, number2) {
  if (number1 > number2) {
    console.log(number1);
  } else if (number2 > number1) {
    console.log(number2);
  } else {
    console.log('They are the same number');
  }
}

biggerOrEqual(10, 100);

console.log('---------------------------------');

// Example 33:
// odd number or even number

function oddOrEven1(number) {
  if (number % 2 == 0) {
    console.log(`${number} is a even number`);
  } else {
    console.log(`${number} is a odd number`);
  }
}
oddOrEven1(2);

console.log('---------------------------------');

// Example 34:
// School grades

function score(score1, score2, score3) {
  let average = (score1 + score2 + score3) / 3;
  if (average >= 7) {
    console.log('Approved');
  } else if (5 <= average && average < 7) {
    console.log('Summer School');
  } else {
    console.log('Reproved');
  }
}

score(5, 3, 3);

console.log('---------------------------------');

// Example 35:
// Adult

function AdultOrMinor(yearOfBirth) {
  console.log(yearOfBirth);
  currentDate = new Date();
  currentDate = Number(currentDate.getFullYear());

  let age = currentDate - yearOfBirth;
  console.log('AdultOrMinor -> age', age);
}

AdultOrMinor(1994);
