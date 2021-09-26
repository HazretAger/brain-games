import startGame from '../index.js';
import randomNumber from '../units/randomNumber.js';

const descriptionOfGame = 'Find the greatest common divisor of given numbers.';
const getGcd = (a, b) => {
    if (b !== 0) {
        const c = a % b;
        return getGcd(b, c);
    }
    return a;
}

const generateGame = () => {
  const firstNum = randomNumber(1, 10);
  const secondNum = randomNumber(1, 10);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = getGcd(firstNum, secondNum);
  return [question, correctAnswer];
};

export default () => startGame(descriptionOfGame, generateGame);