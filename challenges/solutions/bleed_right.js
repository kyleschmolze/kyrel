// initial_state = [ 'b', '.', 'g', '.', '.' ];
// end_state =     [ 'b', 'b', 'g', 'g', 'g' ];

// initial_state = [ 'g', 'b', '.', 'g', '.' ];
// end_state =     [ 'g', 'b', 'b', 'g', 'g' ];

//////////
// main //
//////////

for(var j=0; j<5; j++) {
  if ( onBlue() ) {
    useBlue()
  } else if ( onGreen() ) {
    useGreen();
  } else {
    draw();
  }
  moveRight();
}
