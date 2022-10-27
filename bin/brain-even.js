#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const game = (numbers) => {
  for (const num of numbers) {
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === 'yes') {
      if (num % 2 === 0) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, Bill!`);
        return null;
      }
    } else if (answer === 'no') {
      if (num % 2 !== 0) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, Bill!`);
        return null;
      }
    } else {
      if (num % 2 === 0) {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, Bill!`);
        return null;
      }
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, Bill!`);
      return null;
    }
  }
};

game([15, 6, 7]);
