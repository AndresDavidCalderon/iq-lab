let testQuestions;
if (typeof window === 'undefined') {
  testQuestions = [];
} else {
  testQuestions = (await import('./question_test')).default;
}
const questions = [

  {
    name: 'rotation',
    question: 'What replaces the question mark?',
    explanation: 'From left to right the arrow rotates 90 degrees.',
    difficulty: 1,
    format: 'svg',
    answerShape: 'multiple_files',
  },
  {
    name: 'translation',
    question: 'What follows in the sequence?',
    explanation: 'From left to right, the first square moves 2 spaces up, the second 1, the third 3, and the fourth 1.',
    difficulty: 3,
    answerShape: 'multiple_files',
  },
  {
    name: 'block_rotation',
    question: 'what follows in the sequence?',
    explanation: 'All squares move one space clockwise on each frame',
    difficulty: 2,
    answerShape: 'multiple_files',
  },
  {
    name: 'addition',
    question: 'What follows the sequence?',
    explanation: 'On each frame, 2 black squares are added and the amount of red outlined increases by 1.',
    difficulty: 3,
    answerShape: 'multiple_files',
  },
  {
    name: 'reflection',
    question: '1 is to 2 as 3 is to...',
    explanation: '1 is the reflection of 2.',
    difficulty: 1,
    answerShape: 'multiple_files',
  },
  {
    name: 'alternate_dot_circle',
    question: 'What follows the sequence?',
    explanation: `- On each frame, the black side alternates from left to right and from right to left
    - On each frame, the amount of circles increases by 1
    - The horisontal line alternates between being visible or not.`,
    difficulty: 4,
    answerShape: 'multiple_files',
  },
  {
    name: 'alternating_basic',
    question: 'what follows the sequence?',
    explanation: 'On each frame, the blue circle dissapears or reapears, this is called alternating.',
    difficulty: 2,
    answerShape: 'multiple_files',
  },
  {
    name: 'basic_block_orbit',
    question: 'what follows the sequence?',
    explanation: 'On each frame the square moves 1 space clockwise.',
    difficulty: 2,
    answerShape: 'multiple_files',
  },
  {
    name: 'clock',
    question: 'What follows the sequence',
    explanation: `-The red line dissapears and reappears on each frame, moving 180°, or half an hour.
    -The line that starts at the right goes 90 degrees or a quarter of an hour  anti-clockwise
    -The remaining line moves 45° clockwise`,
    answerShape: 'multiple_files',
    difficulty: 3,
  },
  {
    name: 'movement_basic',
    question: 'What follows the sequence?',
    explanation: 'the column moves 1 space right on each frame',
    difficulty: 1,
    answerShape: 'multiple_files',
  },
  {
    name: 'orbit',
    difficulty: 3,
    question: 'what follows the sequence?',
    explanation: 'the ball moves 45° clockwise and 1 ring out on each frame.',
    answerShape: 'multiple_files',
  },
  {
    name: 'orbit_color',
    question: 'what follows the sequence?',
    explanation: `-The inner circle rotates 180° on each frame
    -The circle on the second ring rotates 45° anti-clockwise each frame.
    -The colors move 1 ring in on each frame`,
    difficulty: 4,
    format: 'svg',
    answerShape: 'multiple_files',
  },
  {
    name: 'rotation_compare',
    question: 'what completes the question mark?',
    explanation: `-The figure from the right ends in the left, and the one on the left ends on the right.
    -Blue figures become red and red figures become blue.`,
    difficulty: 3,
    answerShape: 'multiple_files',
  },
  {
    name: 'shape_change',
    question: 'What follows the sequence?',
    explanation: `-The figure filled with black alternates between being the inner one and the outer one.
    -The inner figure becomes the outer figure in the next frame`,
    difficulty: 3,
    answerShape: 'multiple_files',
  },
  {
    name: 'shape_roller',
    question: 'What follows the sequence?',
    explanation: `From top to bottom:
    -Row 1 and 3 move 1 space left
    -Row 2 moves 1 space right
    -The center figure alternates between being visible or not.`,
    difficulty: 4,
    answerShape: 'multiple_files',
  },
  {
    name: 'stars',
    question: 'What replaces the question mark?',
    explanation: '1 side is always added.',
    difficulty: 2,
    format: 'svg',
    answerShape: 'multiple_files',
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
    answerShape: 'multiple_files',
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
    answerShape: 'multiple_files',
  },
  {
    name: 'dice',
    question: 'What logically follows this sequence?',
    explanation: '1 dot moves counterclockwise from corner to corner, while the other moves diagonally.',
    difficulty: 3,
    format: 'svg',
    answerShape: 'multiple_files',
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
    question: 'Which of the following options fits in the pattern?',
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
  {
    name: 'basic_double_translation',
    difficulty: 2,
    explanation: 'The column moves 1 space to the right, the row moves 1 space to the bottom.',
    answerShape: 'single_file',
    format: 'svg',
  },
  {
    name: 'rotation_addition_arrows',
    difficulty: 3,
    question: 'Fill the empty space in the sequence',
    explanation: 'Each time a new arrow is added and they rotate 90º counter clockwise.',
    answerShape: 'single_file',
    format: 'svg',
  },
  {
    name: 'diagonal_basic',
    difficulty: 1,
    question: 'Which of the following steps do NOT fit the sequence?',
    explanation: 'On each frame, both squares move always diagonally.',
    answerShape: 'single_file',
    format: 'svg',
  },
  {
    name: 'star_inside_star',
    difficulty: 2,
    explanation: 'On each frame, the outer star gets 1 more spike and the inner 1 loses a spike.',
    answerShape: 'single_file',
    format: 'svg',
  },
  {
    name: 'gray_scale',
    difficulty: 3,
    explanation: 'on each frame, the outer shape gets lighter while the inner one gets darker.',
    answerShape: 'single_file',
    format: 'svg',
  },
  {
    name: 'acceleration',
    difficulty: 2,
    explanation: 'on each frame, the square is filled from the bottom left corner to the upper right, each time the amount of squares that gets added inscreases by 1',
    answerShape: 'single_file',
    format: 'svg',
  },
  {
    name: 'time_acceleration',
    difficulty: 4,
    explanation: 'Each frame, the time that passes gets duplicated',
    answerShape: 'single_file',
    format: 'svg',
  },
  {
    name: 'cube_rotation',
    difficulty: 3,
    question: 'Which of the options is a possible replacement for the question mark?',
    explanation: 'On each frame, the cube rotates 90º',
  },
  {
    name: 'rotation_delay',
    difficulty: 3,
    explanation: 'The line rotates 45º each frame, and the ball moves 1 space each 2 frames',
  },
  {
    name: 'negative_acceleration',
    difficulty: 3,
    explanation: 'The line moves 1 forward, then 2 back, then 3 forward, and so on.',
  },
  {
    name: 'rotation_middlestep',
    difficulty: 2,
    question: 'Which option best replaces the question mark?',
    explanation: 'Each figure moves corner to corner clockwise, and they interchange between black and white colors.',
  },
  {
    name: 'star_pattern',
    difficulty: 4,
    question: 'Which of the options follows the same pattern as the next figures?',
    explanation: 'In each square, the figure rotates 90º and turns of the same color of the arrow.',
  },
  {
    name: 'pattern_in_pattern',
    difficulty: 2,
    question: 'Which of the following options best replaces the question mark?',
    explanation: 'In each square, its own position in the picture is highlighted.',
  },
  {
    name: 'invisible_rotation',
    difficulty: 1,
    question: 'Which of the following options best replaces the question mark?',
    explanation: 'On each frame, one square dissapears, in clockwise order.',
  },
  {
    name: 'brightness',
    difficulty: 3,
    question: 'Which of the following options best replaces the question mark?',
    explanation: 'From top to bottom, the border gets lighter, and from left to right the fill color gets darker.',
  },
  {
    name: 'coordinates',
    difficulty: 4,
    question: 'Which of the following options best replaces the question mark?',
    explanation: 'From top to bottom, one blue dot is added, and from left to right, one red dot is added.',
  },
  {
    name: 'star_grid',
    difficulty: 3,
    question: 'which of the following options best replaces the question mark?',
    explanation: 'From top to bottom the outer shape gets a new side, and from left to right the inner star gets another side.',
  },
  {
    name: 'triangular_translation',
    difficulty: 2,
    explanation: 'The star and polygon make a movement with the shape of a triangle, in the case of the star, the tip is at the top.',
  },
  {
    name: 'follow',
    difficulty: 3,
    explanation: 'The star always takes the place the diagonal line leaves.',
  },
  {
    name: 'color_rotation',
    difficulty: 2,
    explanation: 'The colors change corners counter clockwise',
    attributes: ['color', 'rotation'],
  },
  {
    name: 'follow_trail',
    difficulty: 2,
    explanation: 'the shapes follow each other, so the orange one takes the space the pink one left, and the blue takes the space of the green, and so on.',
  },
  {
    name: 'triangular_rotation',
    difficulty: 1,
    explanation: 'the colors change places counter clockwise.',
    attributes: ['color', 'rotation'],
  },
  {
    name: 'transformation',
    difficulty: 3,
    explanation: 'The shape is scaled down horizontally and then rotated 45º',
  },
  {
    name: 'boolean_operations',
    difficulty: 3,
    explanation: 'The intersection between the 2 figures is removed',
  },
  {
    name: 'intersection',
    difficulty: 4,
    explanation: 'Only the intersection between the 2 figures is preserved.',
  },
  {
    name: 'color_filter',
    question: 'Which of the answers follows the same logic?',
    difficulty: 2,
    explanation: 'Only the squares that are the same color as the arrow are kept.',
  },
  {
    name: 'double_flip',
    difficulty: 1,
    explanation: 'The figure is flipped both horizontally and vertically',
  },
  {
    name: 'direction',
    difficulty: 1,
    explanation: 'The white side indicates where the block is going to move.',
  },
  {
    name: 'follow_direction',
    difficulty: 2,
    explanation: 'The cube moves on the direction marked by the white corner, and the star uses the place it leaves behind.',
  },
  {
    name: 'star_direction',
    difficulty: 2,
    explanation: 'The polygon moves on the direction marked by the green side of the star',
    explanation_colorblind: 'The polygon moves on the direction marked by the side of the star with the waves',
  },
  {
    name: 'corner_indicator',
    difficulty: 2,
    questionType: 'follow_logic',
    explanation: 'The black side of the square indicates the corner in which the star is',
  },
  {
    name: 'addition_alternation',
    difficulty: 3,
    explanation: 'The stars alternate between black and white, and each frame a new star gets added',
  },
  {
    name: 'addition_alternation_total',
    difficulty: 4,
    explanation: 'The polygons alternate between being black and white, and each frame a new one is added.',
  },
  {
    name: 'side_indicator',
    difficulty: 2,
    explanation: 'The amount of sides of the outer shape is indicated by the amount of shapes on the left, and the shape inside is the shape on the left.',
  },
  {
    name: 'total_sum',
    difficulty: 2,
    explanation: 'The total amount of points increases by 1 every frame',
  },
  {
    question: 'Which of the options is NOT suitable to continue the sequence?',
    name: 'dice_replace',
    difficulty: 2,
    explanation: 'On each frame, a face is replaces by a star, of which the amount of sides is the amount of dots it replaces.',

  },
  {
    name: 'pattern_variety',
    difficulty: 3,
    explanation: 'On each frame, the following happens: \n The circle moves diagonally \n The star moves clockwise \n The hexagon moves counter clockwise \n the spiral goes to the left',
  },
];

export default testQuestions.length > 0 ? testQuestions : questions;
