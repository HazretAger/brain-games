import startGame from '..';
import randomNumber from '../units/randomNumber.js';

const descriptionOfGame = 'Answer "yes" if number even otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const generateGame = () => {
  const question = randomNumber(1, 10);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => startGame(descriptionOfGame, generateGame);
