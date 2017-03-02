// initial_state = [ '.', 'b', 'g', '.', '.' ];
// end_state =     [ '.', 'b', 'g', 'g', 'g' ];

// initial_state = [ '.', '.', 'b', 'g', '.' ];
// end_state =     [ '.', '.', 'b', 'g', 'g' ];

//////////
// main //
//////////


while( length && !onBlue() && !onGreen() ) {
  moveRight();
  length--;
}

while (length--) {
  if ( onBlue() ) {
    useBlue();
  } else if ( onGreen() ) {
    useGreen();
  }
  draw();
  moveRight();
}
