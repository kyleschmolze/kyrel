// initial_state = [ 'g', 'b', '.', '.', '.' ];
// end_state =     [ '.', 'b', '.', '.', '.' ];

// initial_state = [ 'g', 'b', 'b', '.', '.' ];
// end_state =     [ '.', '.', 'b', '.', '.' ];

//////////
// main //
//////////


for(var j=0; j<5; j++) {
  if ( onBlue() ) {
    moveLeft();
    erase();
    moveRight();
  }
  moveRight();
}
