var grid, colors, kyrel, return_value, rando;


/*
  Configure the starting position of the grid here.
    '.' => empty
    'b' => blue
    'g' => green
*/
var starting_grid = [
  [ '.', '.', '.', '.', '.' ],
  [ '.', '.', '.', '.', '.' ],
  [ '.', '.', '.', '.', '.' ],
  [ '.', '.', '.', '.', '.' ],
  [ '.', '.', '.', '.', '.' ],
];

function main(n) {
  /* 
     In this exercise, I'm going to draw N green dots, starting on the top-left, 
     going left to right, then down row by row.

     Run it a few times to see different amounts of dots come out!
  */

  console.log(n); // Log n so that I can check my work in the browser

  useGreen();

  // n must be between 0 and 9
  if(n > 5) {
    // If n is over 5, I'll need to draw in two rows.

    // just fill the whole first row
    for(var j = 0; j < 5; j++) {
      draw();
      moveRight();
    }

    // walk back and move down...
    for(var j = 0; j < 4; j++) {
      moveLeft();
    }
    moveDown();
    
    // then draw the remaining (n - 5) dots
    for(var i = 0; i < (n - 5); i++) {
      draw();
      moveRight();
    }

  } else {

    // if n is less than 5, then I only need to draw on the top row
    for(var j = 0; j < n; j++) {
      draw();
      moveRight();
    }

  }

  // All done! I can verify by checking my log for n, and then count!

  // Can you see any cool ways to refactor this code?
  // (hint: you can remove one of the for loops)
}







//////////////////////////////
//
// BEWARE, INNER WORKINGS BELOW
// Feel free to read around, but just don't break anything :)
//
//////////////////////////////


grid = {
  x: 5,
  y: 5
}

colors = {
  empty: '#fff',
  gray: '#ccc',
  blue: 'blue',
  green: 'green'
};

kyrel = {
  x: 0,
  y: 0,
  color: colors.blue
};

function play() {
  return_value = main(rando);
  if(typeof return_value !== 'undefined') {
    $(".instructions").append("<div><strong>returned "+return_value+"</strong></div>");
  }
  $(".play").hide();
  $(".reset").show();
}

function reset() {
  kyrel.x = 0;
  kyrel.y = 0;
  kyrel.color = colors.blue;
  updateGrid();
  initializeGrid();
  $(".instructions").html('');

  $(".reset").hide();
  $(".play").show();
}

function initializeGrid() {
  for(var i = 0; i < grid.x; i++) {
    for(var j = 0; j < grid.x; j++) {
      var cell = $("tr").eq(i).find("td").eq(j);
      if(starting_grid[i][j] == 'b') {
        cell.html('<div class="dot dot-blue"></div>')
        cell.find('.dot').css('background', colors.blue);
      } else if(starting_grid[i][j] == 'g') {
        cell.html('<div class="dot dot-green"></div>')
        cell.find('.dot').css('background', colors.green);
      } else {
        cell.find(".dot").remove();
      }
    }
  }
}

function updateGrid() {
  $("td").css('border-color', colors.gray);
  currentSquare().css('border-color', kyrel.color);
}

function currentSquare() {
  return $("tr").eq(kyrel.y).find("td").eq(kyrel.x);
}

function moveLeft() {
  $(".instructions").append("<div>moveLeft</div>");
  if(kyrel.x > 0) {
    kyrel.x = kyrel.x - 1;
    updateGrid();
  }
}

function moveRight() {
  $(".instructions").append("<div>moveRight</div>");
  if(kyrel.x < grid.x - 1) {
    kyrel.x = kyrel.x + 1;
    updateGrid();
  }
}

function moveUp() {
  $(".instructions").append("<div>moveUp</div>");
  if(kyrel.y > 0) {
    kyrel.y = kyrel.y - 1;
    updateGrid();
  }
}

function moveDown() {
  $(".instructions").append("<div>moveDown</div>");
  if(kyrel.y < grid.y - 1) {
    kyrel.y = kyrel.y + 1;
    updateGrid();
  }
}

function draw() {
  $(".instructions").append("<div>draw</div>");
  currentSquare().html('<div class="dot"></div>')
  currentSquare().find('.dot').css('background', kyrel.color).addClass('dot-'+kyrel.color);
}

function erase() {
  $(".instructions").append("<div>erase</div>");
  currentSquare().find(".dot").remove();
}

function useBlue() {
  $(".instructions").append("<div>useBlue</div>");
  kyrel.color = colors.blue;
  updateGrid();
}

function useGreen() {
  $(".instructions").append("<div>useGreen</div>");
  kyrel.color = colors.green;
  updateGrid();
}

function onBlue() {
  return currentSquare().find(".dot.dot-blue").length > 0;
}

function onGreen() {
  return currentSquare().find(".dot.dot-green").length > 0;
}

$(document).ready(function() {
  rando = parseInt(Math.random()*10)
  console.log("Our random number for this run is "+rando);

  //attach listeners
  $(".play").click(play);
  $(".reset").click(reset);

  // Start it up!
  initializeGrid();
  updateGrid();
});

