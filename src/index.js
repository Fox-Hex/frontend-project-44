import readlineSync from 'readline-sync';

const welcomeUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const randomInt = (max) => Math.floor(Math.random() * max);

const randomOperand = (array) => {
  const i = Math.floor(Math.random() * 3);
  return array[i];
};

const operation = (number1, number2, operationMark) => {
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

const question = (number1, number2, operationMark, userName) => {
  console.log(`Question: ${number1} ${operationMark} ${number2}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = operation(number1, number2, operationMark);
  if (Number(answer) === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
  return false;
};

export {
  question,
  welcomeUser,
  randomInt,
  randomOperand,
};
