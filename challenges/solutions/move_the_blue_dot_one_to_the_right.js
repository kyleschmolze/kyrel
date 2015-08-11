// initial_state = [ '.', '.', 'b', '.', '.' ];
// end_state =     [ '.', '.', '.', 'b', '.' ];

//////////
// main //
//////////

for(var j=0; j<5; j++) {
  if( onBlue() ) {
    erase();
    moveRight();
    useBlue();
    draw();
  }

  moveRight();
}
