const questions = [

  {
    name: 'rotation',
    questionType: 'replace',
    explanation: 'From left to right the arrow rotates 90 degrees.',
    explanation_ES: 'De izquierda a derecha, la flecha rota 90 grados.',
    difficulty: 1,
    format: 'svg',
    answerShape: 'multiple_files',
  },
  {
    name: 'translation',
    explanation: 'From left to right, the first square moves 2 spaces up, the second 1, the third 3, and the fourth 1.',
    explanation_ES: 'De izquierda a derecha, el primer cuadrado se mueve 2 espacios para arriba, el segundo 1, el tercero 3 y el cuarto 1.',
    difficulty: 3,
    answerShape: 'multiple_files',
  },
  {
    name: 'block_rotation',
    explanation: 'All squares move one space clockwise on each frame',
    explanation_ES: 'Todos los cuadrados se mueven 1 espacio en el sentido de las agujas del reloj en cada cuadro.',
    difficulty: 2,
    answerShape: 'multiple_files',
  },
  {
    name: 'addition',
    explanation: 'On each frame, 2 black squares are added and the amount of red outlined increases by 1.',
    explanation_ES: 'En cada cuadro, 2 cuadrados negros se añaden y la cantidad de ellos con el borde rojo aumenta en 1',
    difficulty: 3,
    answerShape: 'multiple_files',
  },
  {
    name: 'reflection',
    question: '1 is to 2 as 3 is to...',
    question_ES: '1 es a 2 como 3 es a...',
    explanation: '1 is the reflection of 2.',
    explanation_ES: '1 es el reflejo de 2',
    difficulty: 1,
    answerShape: 'multiple_files',
  },
  {
    name: 'alternate_dot_circle',
    explanation: `- On each frame, the black side alternates from left to right and from right to left
    - On each frame, the amount of circles increases by 1
    - The horisontal line alternates between being visible or not.`,
    explanation_ES: `-El lado negro alterna entre estar a la izquierda o a la derecha.
    - En cada cuadro, se agrega un circulo.
    - La linea horizontal aparece y desaparece.`,
    difficulty: 4,
    answerShape: 'multiple_files',
  },
  {
    name: 'alternating_basic',
    explanation: 'On each frame, the blue circle dissapears or reapears, this is called alternating.',
    explanation_ES: 'En cada cuadro, el circulo azul desaparece y aparece, a esto se le llama alternar.',
    difficulty: 2,
    answerShape: 'multiple_files',
  },
  {
    name: 'basic_block_orbit',
    explanation: 'On each frame the square moves 1 space clockwise.',
    explanation_ES: 'En cuada cuadro el cuadrado se mueve 1 espacio en el sentido de las agujas del reloj.',
    difficulty: 2,
    answerShape: 'multiple_files',
  },
  {
    name: 'clock',
    explanation: `-The red line dissapears and reappears on each frame, moving 180°, or half an hour.
    -The line that starts at the right goes 90 degrees or a quarter of an hour  anti-clockwise
    -The remaining line moves 45° clockwise`,
    explanation_ES: `-La linea roja desaparece y reaparece en cada cuadro, moviendose 180.
    -La linea que inicia a la derecha se mueve 90º contra las agujas del reloj.
    -La linea restante se mueve 45º se mueve con las agujas del reloj.`,
    answerShape: 'multiple_files',
    difficulty: 3,
  },
  {
    name: 'movement_basic',
    explanation: 'the column moves 1 space right on each frame',
    explanation_ES: 'La columna se mueve 1 espacio a la derecha cada cuadro.',
    difficulty: 1,
    answerShape: 'multiple_files',
  },
  {
    name: 'orbit',
    difficulty: 3,
    explanation: 'the ball moves 45° clockwise and 1 ring out on each frame.',
    explanation_ES: 'La bola se mueve 45º con las agujas del reloj y 1 anillo hacia afuera cada cuadro.',
    answerShape: 'multiple_files',
  },
  {
    name: 'orbit_color',
    explanation: `-The inner circle rotates 180° on each frame
    -The circle on the second ring rotates 45° anti-clockwise each frame.
    -The colors move 1 ring in on each frame`,
    explanation_ES: `-El circulo de adentro rota 180º cada cuadro.
    -El circulo en el segundo aaillo rota 45º contra las agujas del reloj cada cuadro.
    -Los colores se mueven 1 anillo hacia adentro cada cuadro.`,
    difficulty: 4,
    format: 'svg',
    answerShape: 'multiple_files',
  },
  {
    name: 'rotation_compare',
    questionType: 'replace',
    explanation: `-The figure from the right ends in the left, and the one on the left ends on the right.
    -Blue figures become red and red figures become blue.`,
    explanation_ES: `-La figura de la derecha termina en la izquierda, y la de la izquierda termina en la derecha.
    -Las figuras azules se vuelven rojas y las rojas azules.`,
    difficulty: 3,
    answerShape: 'multiple_files',
  },
  {
    name: 'shape_change',
    explanation: `-The figure filled with black alternates between being the inner one and the outer one.
    -The inner figure becomes the outer figure in the next frame`,
    explanation_ES: `-La figura con el relleno negro alterna entre ser la de adentro y la de afuera.
    -La figura de adentro se vuelve la figura de afuera en el siguiente cuadro.`,
    difficulty: 3,
    answerShape: 'multiple_files',
  },
  {
    name: 'shape_roller',
    explanation: `From top to bottom:
    -Row 1 and 3 move 1 space left
    -Row 2 moves 1 space right
    -The center figure alternates between being visible or not.`,
    explanation_ES: `De arriba hacia abajo:
    -La fila 1 y 3 se mueven 1 espacio a la izquierda
    -La fila 2 se mueve 1 espacio a la derecha
    -La figura de el centro aparece y desaparece`,
    difficulty: 4,
    answerShape: 'multiple_files',
  },
  {
    name: 'stars',
    questionType: 'replace',
    explanation: '1 side is always added.',
    explanation_ES: 'Siempre se añade 1 lado',
    difficulty: 2,
    format: 'svg',
    answerShape: 'multiple_files',
  },
  {
    name: '3d_basic',
    questionType: 'cube',
    explanation: [
      'The die and the rounded figure will never be next to each other.',
      'The triangle and the 6 spike star will never be next to each other.',
      'The 5 corner shape and the square will never be next to each other.',
      'This is the correct way to look at the cube with the 5 figure shape on the front.',
    ],
    explanation_ES: [
      'El dado y la figura redondeada nunca estarán juntos',
      'El triangulo y la estrella de 6 puntas nunca estarán juntos',
      'La figura de 5 lados y el cuadrado nunca se tocarán',
      'Esta es la figura resultante de doblar el cubo',
    ],
    difficulty: 2,
    format: 'svg',
    answerShape: 'multiple_files',
  },
  {
    name: 'block_color',
    questionType: 'cube',
    explanation: [
      'pink and dark blue will never be next to each other',
      'yellow and bright blue will never be next to each other',
      'green and red will never be next to each other',
      'this is the correct result.',
    ],
    explanation_ES: [
      'Rosa y azul oscuro nunca van a tocarse',
      'amarillo y azul cielo nunca se tocarán.',
      'Verde y rojo nunca se van a tocar.',
      'Este resultado es posible',
    ],
    difficulty: 1,
    format: 'svg',
    answerShape: 'multiple_files',
  },
  {
    name: 'dice',
    explanation: '1 dot moves counterclockwise from corner to corner, while the other moves diagonally.',
    explanation_ES: '1 punto se mueve contra las agujas del reloj de esquina a esquina, mientras el otro se mueve diagonalmente',
    difficulty: 3,
    format: 'svg',
    answerShape: 'multiple_files',
  },
  {
    name: 'counter_star',
    explanation: 'The dot moves counter clockwise from corner to corner.',
    explanation_ES: 'El punto se mueve con las agujas del reloj de esquina a esquina.',
    difficulty: 1,
    format: 'svg',
    answerShape: 'single_file',
  },
  {
    name: 'clock_twelve',
    questionType: 'follow_logic',
    explanation: 'On the example, the hour is always 12.',
    explanation_ES: 'En el ejemplo, la hora siempre es 12.',
    difficulty: 1,
    format: 'svg',
    answerShape: 'single_file',
  },
  {
    name: 'multidirection',
    difficulty: 2,
    explanation: 'One square moves 1 to the right, the other 1 to the bottom, and the last one 1 space both to the left and to the right',
    explanation_ES: 'Un cuadrado se mueve 1 a la derecha, el otro 1 abajo, y el ultimo un espacio a la derecha y abajo.',
    answerShape: 'single_file',
    format: 'svg',
  },
  {
    name: 'basic_double_translation',
    difficulty: 2,
    explanation: 'The column moves 1 space to the right, the row moves 1 space to the bottom.',
    explanation_ES: 'La columna se mueve 1 espacio a la derecha, la fila se mueve 1 espacio hacia abajo.',
    answerShape: 'single_file',
    format: 'svg',
  },
  {
    name: 'rotation_addition_arrows',
    questionType: 'replace',
    difficulty: 3,
    explanation: 'Each time a new arrow is added and they rotate 90º counter clockwise.',
    explanation_ES: 'Cada cuadro se añade una flecha, y rotan 90º con las agujas del reloj.',
    format: 'svg',
  },
  {
    name: 'diagonal_basic',
    difficulty: 1,
    question: 'Which of the following steps do NOT fit the sequence?',
    question_ES: 'Cual de los siguientes pasos NO encajan en la secuencia?',
    explanation: 'On each frame, both squares move always diagonally.',
    explanation_ES: 'En cada cuadro, ambos cuadros se mueven diagonalmente.',
    answerShape: 'single_file',
    format: 'svg',
  },
  {
    name: 'star_inside_star',
    difficulty: 2,
    explanation: 'On each frame, the outer star gets 1 more spike and the inner 1 loses a spike.',
    explanation_ES: 'En cada cuadro, la estrella de afuera obtiene 1 nuevo lado, y la de adentro pierde 1 lado.',
    answerShape: 'single_file',
    format: 'svg',
  },
  {
    name: 'gray_scale',
    difficulty: 3,
    explanation: 'on each frame, the outer shape gets lighter while the inner one gets darker.',
    explanation_ES: 'En cada cuadro, la figura de afuera se vuelve mas clara, y la de adentro mas oscura.',
    answerShape: 'single_file',
    format: 'svg',
  },
  {
    name: 'acceleration',
    difficulty: 2,
    explanation: 'on each frame, the square is filled from the bottom left corner to the upper right, each time the amount of squares that gets added inscreases by 1',
    explanation_ES: `En cada cuadro, el cuadrado se llena desde abajo a la izquierda hasta arriba a la derecha, cada vez la cantidad de cuadros que se añaden sube por 1.
    Es decir, en el primero se añade 1 en el segundo 2, etc...`,
    answerShape: 'single_file',
    format: 'svg',
  },
  {
    name: 'time_acceleration',
    difficulty: 4,
    explanation: 'Each frame, the time that passes gets duplicated',
    explanation_ES: 'Cada cuadro, el tiempo que pasa se duplica.',
    answerShape: 'single_file',
    format: 'svg',
  },
  {
    name: 'cube_rotation',
    difficulty: 3,
    questionType: 'replace',
    explanation: 'On each frame, the cube rotates 90º',
    explanation_ES: 'En cada cuadro, el cubo rota 90º',
  },
  {
    name: 'rotation_delay',
    difficulty: 3,
    explanation: 'The line rotates 45º each frame, and the ball moves 1 space each 2 frames',
    explanation_ES: 'La linea rota 45º por cuadro, y la bola se mueve 1 espacio cada 2 cuadros.',
  },
  {
    name: 'negative_acceleration',
    difficulty: 3,
    explanation: 'The line moves 1 forward, then 2 back, then 3 forward, and so on.',
    explanation_ES: 'La linea se mueve 1 al frente, luego 2 atras, luego 3 adelante, y asi sucesivamente.',
  },
  {
    name: 'rotation_middlestep',
    questionType: 'replace',
    difficulty: 2,
    explanation: 'Each figure moves corner to corner clockwise, and they interchange between black and white colors.',
    explanation_ES: 'Cada figura se mueve de esquina a esquina con las agujas del reloj, y cambian de blanco a negro y vicceversa.',
  },
  {
    name: 'star_pattern',
    difficulty: 4,
    questionType: 'logic',
    explanation: 'In each square, the figure rotates 90º and turns of the same color of the arrow.',
    explanation_ES: 'Èn cada cuadro, la figura rota 90º y se vuelve del mismo color que la flecha.',
  },
  {
    name: 'pattern_in_pattern',
    difficulty: 2,
    questionType: 'replace',
    explanation: 'In each square, its own position in the picture is highlighted.',
    explanation_ES: 'En cada cuadrado, su propia posición en la imagen se resalta.',
  },
  {
    name: 'invisible_rotation',
    difficulty: 1,
    questionType: 'replace',
    explanation: 'On each frame, one square dissapears, in clockwise order.',
    explanation_ES: 'En cada cuadro, un cuadrado desaparece, en el sentido de las agujas del reloj.',
  },
  {
    name: 'brightness',
    difficulty: 3,
    questionType: 'replace',
    explanation: 'From top to bottom, the border gets lighter, and from left to right the fill color gets darker.',
    explanation_ES: 'De arriba a abajo, el borde se vuelve mas claro, y de izquierda a derecha el relleno se vuelve mas oscuro.',
  },
  {
    name: 'coordinates',
    difficulty: 4,
    questionType: 'replace',
    explanation: 'From top to bottom, one blue dot is added, and from left to right, one red dot is added.',
    explanation_ES: 'De arriba a abajo, un punto azul de añade, y de izquierda a derecha, se añade un punto rojo.',
  },
  {
    name: 'star_grid',
    difficulty: 3,
    questionType: 'replace',
    explanation: 'From top to bottom the outer shape gets a new side, and from left to right the inner star gets another side.',
    explanation_ES: 'De arriba a abajo la figura de afuera recibe un nuevo lado, y de izquierda a derecha la estrella de adentro obtiene otro lado.',
  },
  {
    name: 'triangular_translation',
    difficulty: 2,
    explanation: 'The star and polygon make a movement with the shape of a triangle, in the case of the star, the tip is at the top.',
    explanation_ES: 'La estrella y el poligona hacen un movimiento en forma de triangulo, en el caso de la estrella, la punta esta en la parte de arriba.',
  },
  {
    name: 'follow',
    difficulty: 3,
    explanation: 'The star always takes the place the diagonal line leaves.',
    explanation_ES: 'La estrella siempre toma el espacio dejado por la linea diagonal.',
  },
  {
    name: 'color_rotation',
    difficulty: 2,
    explanation: 'The colors change corners counter clockwise',
    explanation_ES: 'Los colores cambian esquinas contra las agujas del reloj.',
    attributes: ['color', 'rotation'],
  },
  {
    name: 'follow_trail',
    difficulty: 2,
    explanation: 'the shapes follow each other, so the orange one takes the space the pink one left, and the blue takes the space of the green, and so on.',
    explanation_ES: 'Las formas siguien la una a la otra, la naranja toma el espacio de la rosa, la azul toma el espacio de la verde y así sucesivamente.',
  },
  {
    name: 'triangular_rotation',
    difficulty: 1,
    explanation: 'the colors change places counter clockwise.',
    explanation_ES: 'Los colores cambian de lugar contra el sentido de las agujas del reloj.',
    attributes: ['color', 'rotation'],
  },
  {
    name: 'transformation',
    difficulty: 3,
    explanation: 'The shape is scaled down horizontally and then rotated 45º',
    explanation_ES: 'La forma se achica horizontalmente y se rota 45º',
  },
  {
    name: 'boolean_operations',
    difficulty: 3,
    explanation: 'The intersection between the 2 figures is removed',
    explanation_ES: 'Se quita la intersección de las 2 figuras.',
  },
  {
    name: 'intersection',
    difficulty: 4,
    explanation: 'Only the intersection between the 2 figures is preserved.',
    explanation_ES: 'Solo se queda la intersección entre las 2 figuras.',
  },
  {
    name: 'color_filter',
    questionType: 'follow_logic',
    difficulty: 2,
    explanation: 'Only the squares that are the same color as the arrow are kept.',
    explanation_ES: 'Solo los cuadrados que son de el mismo color de la flecha se quedan.',
  },
  {
    name: 'double_flip',
    difficulty: 1,
    explanation: 'The figure is flipped both horizontally and vertically',
    explanation_ES: 'La figura se refleja horizontal y verticalmente.',
  },
  {
    name: 'direction',
    difficulty: 1,
    explanation: 'The white side indicates where the block is going to move.',
    explanation_ES: 'El lado blanco indica hacia donde va el cuadrado.',
  },
  {
    name: 'follow_direction',
    difficulty: 2,
    explanation: 'The cube moves on the direction marked by the white corner, and the star uses the place it leaves behind.',
    explanation_ES: 'El cubo se mueve en la dirección marcada por la esquina blanca, y la estrella usa el lugar que deja atrás.',
  },
  {
    name: 'star_direction',
    difficulty: 2,
    explanation: 'The polygon moves on the direction marked by the green side of the star',
    explanation_ES: 'El poligono se mueve en la dirección marcada por el lado verde de la estrella',
    explanation_colorblind: 'The polygon moves on the direction marked by the side of the star with the waves',
    explanation_colorblind_ES: 'El poligono se mueve en la direccion marcada por el lado de la estrella con las olas.',
  },
  {
    name: 'corner_indicator',
    difficulty: 2,
    questionType: 'follow_logic',
    explanation: 'The black side of the square indicates the corner in which the star is',
    explanation_ES: 'El lado negro del cuadrado indica la esquina en la que esta la estrella.',
  },
  {
    name: 'addition_alternation',
    difficulty: 3,
    explanation: 'The stars alternate between black and white, and each frame a new star gets added',
    explanation_ES: 'Las estrellas alternan entre negro y blanco, y cada cuadro se agrega una estrella.',
  },
  {
    name: 'addition_alternation_total',
    difficulty: 4,
    explanation: 'The polygons alternate between being black and white, and each frame a new one is added.',
    explanation_ES: 'Los poligonos alternan entre ser blancos y negros, y cada cuadro se añade uno.',
  },
  {
    name: 'side_indicator',
    difficulty: 2,
    explanation: 'The amount of sides of the outer shape is indicated by the amount of shapes on the left, and the shape inside is the shape on the left.',
    explanation_ES: 'La cantidad de lados de la figura de afuera se indica por la cantidad de formas a la izquierda, y la forma dentro es la forma de la izquierda.',
  },
  {
    name: 'total_sum',
    difficulty: 2,
    explanation: 'The total amount of points increases by 1 every frame',
    explanation_ES: 'La cantidad total de puntos aumenta 1 cada cuadro.',
  },
  {
    question: 'Which of the options is NOT suitable to continue the sequence?',
    name: 'dice_replace',
    difficulty: 2,
    explanation: 'On each frame, a face is replaces by a star, of which the amount of sides is the amount of dots it replaces.',
    explanation_ES: 'En cada cuadro, una cara es reemplazada por una estrella, en la que la cantidad de puntas es la cantidad de puntos que reemplaza.',
  },
  {
    name: 'pattern_variety',
    difficulty: 3,
    explanation: 'On each frame, the following happens: \n The circle moves diagonally \n The star moves clockwise \n The hexagon moves counter clockwise \n the spiral goes to the left',
    explanation_ES: `En cada cuadro, lo siguiente pasa:
    -El circulo se mueve diagonalmente
    -La estrella se mueve en el sentido de las agujas del reloj.
    -El hexagono se mueve contra las agujas del reloj.
    -La espiral se mueve a la izquierda`,
  },
  {
    name: 'general_direction',
    difficulty: 2,
    explanation: "On each frame, the past figure's direction is inverted",
    explanation_ES: 'En cada cuadro, la dirección de la figura pasada se invierte.',
  },
  {
    name: 'chaos_orbit',
    difficulty: 4,
    explanation: 'On each frame, a dot moves to the right, a dot moves down, a dot moves 45º counter-clockwise, and another one 90º clockwise',
    explanation_ES: 'En cada cuadro, un punto se mueve al a derecha, otro abajo, otro punto se mueve 45º contra las agujas del reloj, y otro 90º con las agujas del reloj.',
  },
  {
    name: 'image_replace',
    questionType: 'image_piece',
    difficulty: 3,
  },
  {
    name: 'image_round_replace',
    questionType: 'image_piece',
    difficulty: 2,
  },
  {
    name: 'movement_rotation',
    difficulty: 2,
    explanation: 'The 6 pointed star moves one space down and one space left and rotates 90º counter-clockwise, while the 5 pointed star moves one space up and one space right and then getting mirrored',
    explanation_ES: `La estrella de 6 puntas se mueve un espacio abajo y una a la izquierda, y rota 90º contra las agujas del reloj.
    Mientras que la estrella de 5 puntas se mueve un espacio arriba y otro a la derecha, y se refleja.`,
  },
  {
    name: 'asimetrical_substraction',
    difficulty: 2,
    explanation: 'In each frame, 2 green squares and 1 black square is erased.',
    explanation_ES: 'En cada cuadro, 2 cuadrados verdes y 1 negro se borran.',

  },
  {
    name: 'substraction_rotation',
    difficulty: 3,
    explanation: 'In each frame, green and black squares take turns to be deleted, and the X changes corners clockwise.',
    explanation_ES: 'En cada cuadro, los cuadros verdes y negros toman turnos para ser eliminados, y la x cambia de esquina contra las agujas del reloj.',
  },
  {
    name: 'uneven_sides',
    difficulty: 3,
    explanation: 'On each frame, the length of the figure increases.',
    explanation_ES: 'En cada cuadro, el largo de la figura aumenta.',
  },
  {
    name: 'number_grid',
    questionType: 'replace',
    difficulty: 3,
    answers: [
      '1',
      '0',
      '3',
      '2',
    ],
    explanation: 'In all columns, B+C+D=A',
    explanation_ES: 'En todas las columnas, B+C+D=A',
    answerShape: 'multiple_files',
    format: 'svg',
  },
  {
    name: 'symbol_grid',
    questionType: 'replace',
    difficulty: 3,
    answers: [
      6,
      12,
      7,
      15,
    ],
    explanation: 'Ω=5 ψ=5 Z=3, and the fish is worth 2.',
    explanation_ES: 'Ω=5 ψ=5 Z=3, y el pez vale 2.',
    answerShape: 'multiple_files',
    format: 'svg',
  },
  {
    name: 'number_pyramid',
    difficulty: 3,
    explanation: 'On each frame, the sum of the numbers inside the triangle increases',
    explanation_ES: 'En cada cuadro, la suma de los numeros dentro del triangulo aumenta.',
  },
  {
    questionType: 'text',
    difficulty: 4,
    statement: `There is a company which gives all of their computers a unique code. This code is built according to these parameters:
    -Starts with a single number, the number of the office it's in, there are 5 offices, numbered 1-5 respectively.
    -Followed by 2 letters, which cannot be the same. Remember the alphabet has 26 letters.
    -Followed by a 2 digit number, in which the digits can repeat.
    How many possible and valid codes are there?`,
    statement_ES: `Hay una compañia que quiere asignar a todos sus computadores un codigo unico. Este codigo lo componen estos parametros:
    -Inicia con un solo numero, que es el numero de la oficina en la que esta, numeradas de 1 a 5 respectivamente.
    -Le siguen 2 letras, que no pueden ser las mismas, recuerda que el alfabeto tiene 26 letras.
    -Le sigue un codigo de 2 cifras, los digitos se pueden repetir.
    cuantos codigos validos hay?`,
    answers: [
      '250.000',
      '50.000',
      '100.000',
      '325.000',
    ],
    explanation: `The operation to do on this case is 5*26*25*10*10, since we have 26 possibilities on the first letter, but on the second one
    we cant choose the same`,
    explanation_ES: `La operacion para hacer en este caso es 5*26*25*10*10, pues tenemos 5 posibilidades para el numero,
    26 para la primera letra, 25 para la segunda pues no podemos repetir, y 10 para cada digito.`,
  },
  {
    questionType: 'text',
    difficulty: 2,
    statement: `Replace the @ with the right operations to solve the equation
    11 @  3  @  7=21'`,
    statement_ES: `Reeplaza el @ con las operaciones correctas para que la ecuación sea correcta:
    11 @ 3 @ 7 = 21`,
    answers: [
      '-/+',
      '+/-',
      'x/+',
      '+/+',
    ],
    explanation: '11+3+7=21',
  },
  {
    name: 'alphabet_number',
    difficulty: 2,
    questionType: 'replace',
    answers: [
      '14',
      '9',
      '26',
      '23',
    ],
    explanation: 'The number represents the position of the letter on the alphabet',
    explanation_ES: 'El numero representa la posición de la letra en el alfabeto.',
    answerShape: 'multiple_files',
    format: 'svg',
  },
  {
    name: 'horizontal_sum',
    difficulty: 3,
    answers: [
      '2',
      '4',
      '5',
      '1',
    ],
    explanation: 'Each row adds up to 10',
    explanation_ES: 'Cada fila suma 10',
    answerShape: 'multiple_files',
    format: 'svg',
  },
  {
    question: `Move from one circle to one next to it, starting on the bottom left, and ending on the top right,collect 9 circles and add the values
    What is the largest sum you can get?`,
    question_ES: `Muevete de un circulo a otro, empezando por abajo a la izquierda y terminando arriba a la derecha, pasa por 9 circulos y suma los valores.
    Cual es la mayor suma que puedes obtener?`,
    name: 'number_path',
    difficulty: 3,
    answers: [
      '36',
      '16',
      '29',
      '32',
    ],
    explanation: 'On the path right,up 3 times, right 3 times and up, we get 2+4+4+4+4+4+4+2+4, which is equals to 32.',
    explanation_ES: `En el camino:
    derecha, arriba 3 veces, derecha 3 veces y arriba
    obtenemos 2+4+4+4+4+4+4+2+4 que es igual a 32.`,
    answerShape: 'multiple_files',
    format: 'svg',
  },
];
export default questions;
