#!/usr/bin/env node

import {
  welcomeUser,
  questionGCD,
  randomInt,
} from '../src/index.js';

const userName = welcomeUser();

console.log('Find the greatest common divisor of given numbers.');

const gcdGame = (steps) => {
  for (let i = 0; i < steps; i += 1) {
    const a = randomInt(100);
    const b = randomInt(100);

    const answer = questionGCD(a, b, userName);
    if (answer === false) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

gcdGame(3);
