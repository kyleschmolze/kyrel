/*
   Please write all of your code inside the "main" function below.

   Use this file to build your programs. When you're done, copy-paste the solutions into
   a separate file, using the format of sample_solution.txt.
*/


/*
   If you need variables, please declare them BEFORE the "main" function.
   That way, you will be able to check them out in the Chrome console.
   Just make sure not to use any of the same variable names that I am using below!
   (grid, colors, kyrel, instructions, play, step, currentSquare, moveLeft, any other instructions)
*/

// eg: var x = 3;

function main() {
  // Your code goes in here!

}








//////////////////////////////
//
// BEWARE, INNER WORKINGS BELOW
// Feel free to read around, but just don't break anything :)
//
//////////////////////////////


var grid = {
  x: 5,
  y: 5
}

var colors = {
  empty: '#fff',
  gray: '#ccc',
  blue: 'blue',
  green: 'green'
};

var kyrel = {
  x: 0,
  y: 0,
  color: colors.blue
};

var instructions = [];

function moveLeft() {
  instructions.push('moveLeft');
}
function moveRight() {
  instructions.push('moveRight');
}
function moveUp() {
  instructions.push('moveUp');
}
function moveDown() {
  instructions.push('moveDown');
}
function draw() {
  instructions.push('draw');
}
function erase() {
  instructions.push('erase');
}
function useGreen() {
  instructions.push('useGreen');
}
function useBlue() {
  instructions.push('useBlue');
}


function step() {
  if(instructions.length == 0) {
    clearInterval(interval);
  } else {
    var instruction = instructions.shift();
    if(instruction == 'moveLeft') {
      actuallyMoveLeft();
    } else if (instruction == 'moveRight') {
      actuallyMoveRight();
    } else if (instruction == 'moveUp') {
      actuallyMoveUp();
    } else if (instruction == 'moveDown') {
      actuallyMoveDown();
    } else if (instruction == 'draw') {
      actuallyDraw();
    } else if (instruction == 'erase') {
      actuallyErase();
    } else if (instruction == 'useBlue') {
      actuallyUseBlue();
    } else if (instruction == 'useGreen') {
      actuallyUseGreen();
    }
  }
}

var interval;
function play() {
  interval = setInterval(step, 500);
}

function updateGrid() {
  $("td").css('border-color', colors.gray);
  currentSquare().css('border-color', kyrel.color);
}

function currentSquare() {
  return $("tr").eq(kyrel.y).find("td").eq(kyrel.x);
}

function actuallyMoveLeft() {
  $(".instructions").append("<div>moveLeft</div>");
  if(kyrel.x > 0) {
    kyrel.x = kyrel.x - 1;
    updateGrid();
  }
}

function actuallyMoveRight() {
  $(".instructions").append("<div>moveRight</div>");
  if(kyrel.x < grid.x - 1) {
    kyrel.x = kyrel.x + 1;
    updateGrid();
  }
}

function actuallyMoveUp() {
  $(".instructions").append("<div>moveUp</div>");
  if(kyrel.y > 0) {
    kyrel.y = kyrel.y - 1;
    updateGrid();
  }
}

function actuallyMoveDown() {
  $(".instructions").append("<div>moveDown</div>");
  if(kyrel.y < grid.y - 1) {
    kyrel.y = kyrel.y + 1;
    updateGrid();
  }
}

function actuallyDraw() {
  $(".instructions").append("<div>draw</div>");
  currentSquare().html('<div class="dot"></div>')
  currentSquare().find('.dot').css('background', kyrel.color);
}

function actuallyErase() {
  $(".instructions").append("<div>erase</div>");
  currentSquare().find(".dot").remove();
}

function actuallyUseBlue() {
  $(".instructions").append("<div>useBlue</div>");
  kyrel.color = colors.blue;
  updateGrid();
}

function actuallyUseGreen() {
  $(".instructions").append("<div>useGreen</div>");
  kyrel.color = colors.green;
  updateGrid();
}

$(document).ready(function() {
  //attach listeners
  $(".step").click(step);
  $(".play").click(play);

  // Start it up!
  main();
  updateGrid();
});

