// initial_state =  ['b', 'b', 'b', 'b', 'b'];
// end_state = ['b', 'b', 'b', '.', 'b'];

//////////
// main //
//////////

var n = 4; // this can change

for(var i=0; i<5; i++){
    if ( (i+1)%n === 0 ){
        erase();
    }
    moveRight();
}
