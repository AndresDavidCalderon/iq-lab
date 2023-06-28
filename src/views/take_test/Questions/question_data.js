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
];
export default questions;
