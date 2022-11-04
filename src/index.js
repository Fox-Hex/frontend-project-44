import readlineSync from 'readline-sync';

const welcomeUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const randomInt = (max) => Math.floor(Math.random() * max);

const randomBetween = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

const randomOperand = (array) => {
  const i = Math.floor(Math.random() * 3);
  return array[i];
};

const isPrimeNumber = (number) => {
  if (number === 1) return false;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const operationEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const operationCalc = (number1, number2, operationMark) => {
  if (operationMark === '+') {
    return number1 + number2;
  }
  if (operationMark === '-') {
    return number1 - number2;
  }
  if (operationMark === '*') {
    return number1 * number2;
  }
  return null;
};

const operationGCD = (a, b) => {
  if (b > a) return operationGCD(b, a);
  if (!b) return a;
  return operationGCD(b, a % b);
};

const operationPrime = (number) => (isPrimeNumber(number) ? 'yes' : 'no');

const randomProgression = (lengthRandom = 10, startRandom = 10) => {
  const startNumber = randomInt(startRandom);
  const step = randomInt(10) + 1;
  const progression = [startNumber];
  const length = randomBetween(5, lengthRandom);
  const hidePosition = randomInt(length);
  for (let i = 1; i < length; i += 1) {
    progression.push(startNumber + step * i);
  }
  const correctAnswer = progression[hidePosition];
  progression[hidePosition] = '..';
  return [progression, correctAnswer];
};

const checkAnswer = (answer, correctAnswer, userName) => {
  if (Number(answer) === correctAnswer || answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
  return false;
};

const questionEven = (number1, number2, name) => {
  console.log(`Question: ${number1}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = operationEven(number1, number2);
  return checkAnswer(answer, correctAnswer, name);
};

const questionCalc = (number1, number2, operationMark, userName) => {
  console.log(`Question: ${number1} ${operationMark} ${number2}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = operationCalc(number1, number2, operationMark);
  return checkAnswer(answer, correctAnswer, userName);
};

const questionGCD = (number1, number2, userName) => {
  console.log(`Question: ${number1} ${number2}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = operationGCD(number1, number2);
  return checkAnswer(answer, correctAnswer, userName);
};

const questionProgress = (progression, userName) => {
  console.log(`Question: ${progression[0].join(' ')}`);
  const answer = readlineSync.question('Your answer: ');
  return checkAnswer(answer, progression[1], userName);
};

const questionPrime = (number, userName) => {
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = operationPrime(number);
  return checkAnswer(answer, correctAnswer, userName);
};

export {
  questionEven,
  questionPrime,
  questionProgress,
  questionGCD,
  questionCalc,
  welcomeUser,
  randomInt,
  randomOperand,
  randomProgression,
};
