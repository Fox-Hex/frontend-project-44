#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const checkAnswer = (answer, correctAnswer, userName) => {
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
  return false;
};

const operationEven = (number) => {
  if (number % 2 === 0) {
    return 'yes'
  }
  return 'no';
};

const questionEven = (number, userName) => {
  console.log(`Question: ${number1} ${operationMark} ${number2}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = operationEven(number);
  return checkAnswer(answer, correctAnswer, userName);
};

const evenGame = (numbers) => {
  for (let i = 0; i < numbers.length; i += 1) {
    const answer = questionEven(numbers[i], userName);
    if (!answer) {
      return;
    }
};

evenGame([15, 6, 7]);
