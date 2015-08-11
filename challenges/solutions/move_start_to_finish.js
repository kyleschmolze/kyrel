// initial_state =  ['b', '.', '.', '.', '.'];
// end_state = ['.', '.', '.', '.', 'b'];

// initial_state =  ['g', '.', '.', '.', '.'];
// end_state = ['.', '.', '.', '.', 'g'];

//////////
// main //
//////////

if( onBlue() ) {
    useBlue();
} else if ( onGreen() ){
    useGreen();
}

moveRight();
moveRight();
moveRight();
moveRight();
draw();
