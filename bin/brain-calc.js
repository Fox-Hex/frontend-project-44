#!/usr/bin/env node

import {
  welcomeUser,
  questionCalc,
  randomInt,
  randomOperand,
} from '../src/index.js';

const userName = welcomeUser();

console.log('What is the result of the expression?');

const calcGame = (steps) => {
  for (let i = 0; i < steps; i += 1) {
    const a = randomInt(10);
    const b = randomInt(10);
    const operands = randomOperand(['+', '-', '*']);

    const answer = questionCalc(a, b, operands, userName);
    if (answer === false) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

calcGame(3);
