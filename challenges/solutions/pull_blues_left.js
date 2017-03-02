// initial_state = [ '.', 'b', 'b', '.', 'b' ];
// end_state =     [ 'b', 'b', 'b', '.', '.' ];

//////////
// main //
//////////

var numBlues = 0;
useBlue();

for(var j = 0; j < 5; j++) {
  if(onBlue()) {
    numBlues = numBlues + 1;
  }
  draw(); // Let's fill in every box on our first sweep
  moveRight();
}
// Ok, now numBlues should contain the number of blue dots total
console.log(numBlues);

// Let's go back (5 - numBlues) times, and erase!
for(var i = 0; i < (5 - numBlues); i++) {
  erase();
  moveLeft();
}
