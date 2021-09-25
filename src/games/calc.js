import startGame from '../index.js';
import randomNumber from '../units/randomNumber.js';

const descriptionOfGame = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const resultOfExpression = (index, firstNum, secondNum) => {
  if (operators[index] === '+') {
    return firstNum + secondNum;
  } if (operators[index] === '-') {
    return firstNum - secondNum;
  }
  return firstNum * secondNum;
};

const generateGame = () => {
  const index = randomNumber(0, 2);
  const firstOpearand = randomNumber(1, 10);
  const secondOperand = randomNumber(1, 10);
  const question = `${firstOpearand} ${operators[index]} ${secondOperand}`;
  const correctAnswer = resultOfExpression(index, firstOpearand, secondOperand);

  return [question, correctAnswer];
};

export default () => startGame(descriptionOfGame, generateGame);
