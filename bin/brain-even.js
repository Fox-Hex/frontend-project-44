#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { questionEven } from '../src/index.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const evenGame = (numbers) => {
  for (let i = 0; i < numbers.length; i += 1) {
    const answer = questionEven(numbers[i], numbers[i], userName);
    if (!answer) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

evenGame([15, 6, 7]);
