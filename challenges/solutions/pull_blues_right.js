// initial_state = [ 'b', 'b', '.', '.', '.' ];
// end_state =     [ '.', '.', '.', 'b', 'b' ];

//////////
// main //
//////////

var blues = 0;
for(var i=0; i<4; i++){
  if ( onBlue() ) {
    blues++
  }
  erase();
  moveRight();
}

useBlue();
while(blues--){
  draw();
  moveLeft();
}
