// initial_state = [ 'b', 'b', '.', 'g', 'b' ];
// end_state =     [ 'g', 'g', '.', 'b', 'g' ];

//////////
// main //
//////////

useBlue();
for(var j=0; j<5; j++) {
  draw();
  moveRight();
}
