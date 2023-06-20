const questions = [
  {
    name: 'rotation',
    question: 'What replaces the question mark?',
    explanation: 'From left to right the arrow rotates 90 degrees.',
    dificulty: 1,
    format: 'svg',
  },
  {
    name: 'sidecount',
    question: 'What replaces the question mark?',
    explanation: `From left to right, the line alternates between vertical and horisontal,
     and on each square the sides on the figures add up to 9.`,
    difficulty: 2,
  },
  {
    name: 'translation',
    question: 'What follows in the sequence?',
    explanation: 'From left to right, the first square moves 2 spaces up, the second 1, the third 3, and the fourth 1.',
    difficulty: 2,
  },
  {
    name: 'block_rotation',
    question: 'what follows in the sequence?',
    explanation: 'all square move one space clockwise on each frame',
    difficulty: 1,
  },
  {
    name: 'addition',
    question: 'What follows the sequence?',
    explanation: 'On each frame, 2 black squares are added and the amount of red outlined increases by 1.',
    difficulty: 1,
  },
  {
    name: 'reflection',
    question: '1 is to 2 as 3 is to...',
    explanation: '1 is the reflection of 2.',
    difficulty: 1,
  },
];
export default questions;
