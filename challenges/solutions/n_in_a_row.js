// initial_state = [ '.', '.', '.', '.', '.' ];
// end_state =     [ 'g', 'g', 'g', '.', '.' ];

// initial_state = [ '.', '.', '.', '.', '.' ];
// end_state =     [ '.', '.', '.', '.', '.' ];

//////////
// main //
//////////

var n = 3; // make sure this can change!

useGreen();
for(var i=0; i<n; i++) {
  draw();
  moveRight();
}
