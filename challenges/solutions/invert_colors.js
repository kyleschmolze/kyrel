// initial_state = [ 'b', 'b', '.', 'g', 'b' ];
// end_state =     [ 'g', 'g', '.', 'b', 'g' ];

//////////
// main //
//////////

for(var j=0; j<5; j++) {
  if( onBlue() ) {
    useGreen();
    draw(); // overwrite
  } else if( onGreen() ) {
    useBlue();
    draw(); // overwrite
  }

  moveRight();
}
