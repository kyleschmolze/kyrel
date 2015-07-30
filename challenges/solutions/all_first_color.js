// initial_state = [ 'b', '.', '.', '.', '.' ];
// end_state =     [ 'b', 'b', 'b', 'b', 'b' ];

// initial_state = [ 'g', '.', '.', '.', '.' ];
// end_state =     [ 'g', 'g', 'g', 'g', 'g' ];

//////////
// main //
//////////

if ( onBlue() ) {
  useBlue()
} else if ( onGreen() ) {
  useGreen();
}

for(var j=0; j<5; j++) {
  draw();
  moveRight();
}
