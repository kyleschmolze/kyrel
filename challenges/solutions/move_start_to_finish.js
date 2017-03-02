// initial_state =  ['b', '.', '.', '.', '.'];
// end_state = ['.', '.', '.', '.', 'b'];

// initial_state =  ['g', '.', '.', '.', '.'];
// end_state = ['.', '.', '.', '.', 'g'];

// initial_state = ['.', '.', '.', '.', '.'];
// end_state = ['.', '.', '.', '.', '.'];

//////////
// main //
//////////

if( onBlue() ) {
    useBlue();
} else if ( onGreen() ) {
    useGreen();
}
if( onBlue() || onGreen() ) {
    erase();
    moveRight();
    moveRight();
    moveRight();
    moveRight();
    draw();
}
