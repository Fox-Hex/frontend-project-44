#!/usr/bin/env node

import {
  welcomeUser,
  questionProgress,
  randomProgression,
} from '../src/index.js';

const userName = welcomeUser();

console.log('What number is missing in the progression?');

const progGame = (steps) => {
  for (let i = 0; i < steps; i += 1) {
    const progression = randomProgression();
    const answer = questionProgress(progression, userName);
    if (answer === false) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

progGame(3);
