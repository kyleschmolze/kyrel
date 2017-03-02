// initial_state = [ 'b', '.', 'g', '.', '.' ];
// end_state =     [ 'b', 'b', 'g', 'g', 'g' ];

// initial_state = [ 'g', 'b', '.', 'g', '.' ];
// end_state =     [ 'g', 'b', 'b', 'g', 'g' ];

//////////
// main //
/////////
for (var i = 0; i < 5; i++) {
  if(onBlue()){
    useBlue();
    moveRight();
    draw();
  }
  else if(onGreen()){
    useGreen();
    moveRight();
    draw();
  }
  else{
    moveRight();
  }
}
