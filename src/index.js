import readlineSync from 'readline-sync';

const responsesCount = 3;
const startCount = 0;

const startGame = (descriptionOfGame, generateGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(descriptionOfGame);

  const iter = (counter) => {
    if (counter === responsesCount) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const [question, answer] = generateGame();
    const correctAnswer = answer;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === Number(userAnswer)) {
      iter(counter + 1);
      return;
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
  };

  return iter(startCount);
};

export default startGame;
