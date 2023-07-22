import test from './question_test';

const questions = [
  {
    name: 'rotation',
    question: 'What replaces the question mark?',
    explanation: 'From left to right the arrow rotates 90 degrees.',
    dificulty: 1,
    format: 'svg',
  },
  {
    name: 'translation',
    question: 'What follows in the sequence?',
    explanation: 'From left to right, the first square moves 2 spaces up, the second 1, the third 3, and the fourth 1.',
    difficulty: 3,
  },
  {
    name: 'block_rotation',
    question: 'what follows in the sequence?',
    explanation: 'All squares move one space clockwise on each frame',
    difficulty: 2,
  },
  {
    name: 'addition',
    question: 'What follows the sequence?',
    explanation: 'On each frame, 2 black squares are added and the amount of red outlined increases by 1.',
    difficulty: 3,
  },
  {
    name: 'reflection',
    question: '1 is to 2 as 3 is to...',
    explanation: '1 is the reflection of 2.',
    difficulty: 1,
  },
  {
    name: 'alternate_dot_circle',
    question: 'What follows the sequence?',
    explanation: `- On each frame, the black side alternates from left to right and from right to left
    - On each frame, the amount of circles increases by 1
    - The horisontal line alternates between being visible or not.`,
    difficulty: 4,
  },
  {
    name: 'alternating_basic',
    question: 'what follows the sequence?',
    explanation: 'On each frame, the blue circle dissapears or reapears, this is called alternating.',
    difficulty: 2,
  },
  {
    name: 'basic_block_orbit',
    question: 'what follows the sequence?',
    explanation: 'On each frame the square moves 1 space clockwise.',
    difficulty: 2,
  },
  {
    name: 'clock',
    question: 'What follows the sequence',
    explanation: `-The red line dissapears and reappears on each frame, moving 180°, or half an hour.
    -The line that starts at the right goes 90 degrees or a quarter of an hour  anti-clockwise
    -The remaining line moves 45° clockwise`,
    difficulty: 3,
  },
  {
    name: 'movement_basic',
    question: 'What follows the sequence?',
    explanation: 'the column moves 1 space right on each frame',
    difficulty: 1,
  },
  {
    name: 'orbit',
    question: 'what follows the sequence?',
    explanation: 'the ball moves 45° clockwise and 1 ring out on each frame.',
  },
  {
    name: 'orbit_color',
    question: 'what follows the sequence?',
    explanation: `-The inner circle rotates 180° on each frame
    -The circle on the second ring rotates 45° anti-clockwise each frame.
    -The colors move 1 ring in on each frame`,
    difficulty: 4,
    format: 'svg',
  },
  {
    name: 'rotation_compare',
    question: 'what completes the question mark?',
    explanation: `-The figure from the right ends in the left, and the one on the left ends on the right.
    -Blue figures become red and red figures become blue.`,
    difficulty: 3,
  },
  {
    name: 'shape_change',
    question: 'What follows the sequence?',
    explanation: `-The figure filled with black alternates between being the inner one and the outer one.
    -The inner figure becomes the outer figure in the next frame`,
    difficulty: 3,
  },
  {
    name: 'shape_roller',
    question: 'What follows the sequence?',
    explanation: `From top to bottom:
    -Row 1 and 3 move 1 space left
    -Row 2 moves 1 space right
    -The center figure alternates between being visible or not.`,
    difficulty: 4,
  },
  {
    name: 'stars',
    question: 'What replaces the question mark?',
    explanation: '1 side is always added.',
    difficulty: 2,
    format: 'svg',
  },
  {
    name: '3d_basic',
    question: 'what figure represents the cube formed from folding the next figure? The cube can be rotated.',
    explanation: [
      'The die and the rounded figure will never be next to each other.',
      'The triangle and the 6 spike star will never be next to each other.',
      'The 5 corner shape and the square will never be next to each other.',
      'This is the correct way to look at the cube with the 5 figure shape on the front.',
    ],
    difficulty: 2,
    format: 'svg',
  },
  {
    name: 'block_color',
    question: 'Which option represents a posible result from folding the following figure into a cube? Take into account possible rotations',
    explanation: [
      'pink and dark blue will never be next to each other',
      'yellow and bright blue will never be next to each other',
      'green and red will never be next to each other',
      'this is the correct result.',
    ],
    difficulty: 1,
    format: 'svg',
  },
  {
    name: 'dice',
    question: 'What logically follows this sequence?',
    explanation: '1 dot moves counterclockwise from corner to corner, while the other moves diagonally.',
    difficulty: 3,
    format: 'svg',
  },
  {
    name: 'counter_star',
    question: 'What logically follows the sequence?',
    explanation: 'The dot moves counter clockwise from corner to corner.',
    difficulty: 1,
    format: 'svg',
    answerShape: 'single_file',
  },
  {
    name: 'clock_twelve',
    question: 'Which of the following options does NOT fit in the pattern?',
    explanation: 'On the example, the hour is always 12.',
    difficulty: 1,
    format: 'svg',
    answerShape: 'single_file',
  },
  {
    name: 'multidirection',
    question: 'Which option logically follows the sequence?',
    difficulty: 2,
    explanation: 'One square moves 1 to the right, the other 1 to the bottom, and the last one 1 space both to the left and to the right',
    answerShape: 'single_file',
    format: 'svg',
  },
];
export default test.length > 0 ? test : questions;
