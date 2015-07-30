// initial_state = [ 'b', 'b', '.', '.', '.' ];
// end_state =     [ '.', '.', '.', 'b', 'b' ];

// initial_state = [ 'b', 'g', 'g', '.', '.' ];
// end_state =     [ '.', '.', 'g', 'g', 'b' ];

//////////
// main //
//////////

var myRow = [];

for(var i=0; i<5; i++){
  if ( onBlue() ) {
    myRow.push('blue')
  } else if ( onGreen() ) {
    myRow.push('green')
  } else {
    myRow.push('.')
  }
  moveRight();
}

myRow.forEach(function(color){
  if ( color === "blue" ) {
   useBlue();
   draw();
  } else if ( color === "green" ) {
   useGreen();
   draw();
  } else {
   erase();
  }
  moveLeft();
})
