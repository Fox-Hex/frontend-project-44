#!/usr/bin/env node

import {
  welcomeUser,
  questionPrime,
  randomInt,
} from '../src/index.js';

const userName = welcomeUser();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const primeGame = (steps) => {
  for (let i = 0; i < steps; i += 1) {
    const number = randomInt(100);
    const answer = questionPrime(number, userName);
    if (answer === false) {
      return;
    }
  }
};

primeGame(3);
