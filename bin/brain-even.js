#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const game = (numbers) => {
  for (let i = 0; i < numbers.length; i += 1) {
    console.log(`Question: ${numbers[i]}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === 'yes') {
      if (numbers[i] % 2 === 0) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
        return null;
      }
    } else if (answer === 'no') {
      if (numbers[i] % 2 !== 0) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
        return null;
      }
    } else {
      if (numbers[i] % 2 === 0) {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
        return null;
      }
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
      return null;
    }
  }
  return null;
};

game([15, 6, 7]);
