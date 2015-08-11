// initial_state =  ['b', 'b', 'b', 'b', 'b'];
// end_state = ['.', 'b', '.', 'b', '.'];

//////////
// main //
//////////

for(var i=0; i<5; i++){
    if ( i%2 === 0 ){
        erase();
    }
    moveRight();
}
