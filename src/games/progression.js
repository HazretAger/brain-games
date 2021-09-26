import startGame from '../index.js';
import randomNumber from '../units/randomNumber.js';

const descriptionOfGame = 'What number is missing in the progression?';
const makeProgression = (start, step, lengthOfProgression) => {
    const iter = (progression, counter) => {
        if (counter === lengthOfProgression) {
            return progression;
        }
        return iter([...progression, (start + counter * step)], counter + 1);
    }

    return iter([], 0);
}

const generateGame = () => {
  const length = 10;
  const step = randomNumber(1, 10);
  const start = randomNumber(5, 20);
  const progression = makeProgression(start, step, length);
  const hiddenElementIndex = randomNumber(0, length - 1);
  const correctAnswer = progression[hiddenElementIndex];
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => startGame(descriptionOfGame, generateGame);