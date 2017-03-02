//////////////////////////////
//
// BEWARE, INNER WORKINGS BELOW
// Feel free to read around, but just don't break anything :)
//
//////////////////////////////

// overriden by play.js
var initial_state = [ '.', '.', '.', '.', '.' ];

// overriden by play.js
function main() {}

var row = {
  x: 5
};

var colors = {
  empty: '#fff',
  gray: '#ccc',
  blue: 'blue',
  green: 'green'
};

var kyrel = {
  x: 0,
  color: colors.blue
};

function play(newMain) {
  var main = newMain || main;
  var return_value = main();
  if(typeof return_value !== 'undefined') {
    $(".instructions").append("<div><strong>returned "+return_value+"</strong></div>");
  }
}

function initializeRow() {
    for(var j=0; j<row.x; j++) {
      var cell = $("tr").find("td").eq(j);
      if(initial_state[j] == 'b') {
        cell.html('<div class="dot dot-blue"></div>')
        cell.find('.dot').css('background', colors.blue);
      } else if(initial_state[j] == 'g') {
        cell.html('<div class="dot dot-green"></div>')
        cell.find('.dot').css('background', colors.green);
      } else {
        cell.find(".dot").remove();
      }
    }
}

function updateRow() {
  $("td").css('border-color', colors.gray);
  currentSquare().css('border-color', kyrel.color);
}

function currentSquare() {
  return $("tr").find("td").eq(kyrel.x);
}

function moveLeft() {
  $(".instructions").append("<div>moveLeft</div>");
  if(kyrel.x > 0) {
    kyrel.x = kyrel.x - 1;
    updateRow();
  }
}

function moveRight() {
  $(".instructions").append("<div>moveRight</div>");
  if(kyrel.x < row.x - 1) {
    kyrel.x = kyrel.x + 1;
    updateRow();
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
  updateRow();
}

function useGreen() {
  $(".instructions").append("<div>useGreen</div>");
  kyrel.color = colors.green;
  updateRow();
}

function onBlue() {
  return currentSquare().find(".dot.dot-blue").length > 0;
}

function onGreen() {
  return currentSquare().find(".dot.dot-green").length > 0;
}

function CodeArea($el, store) {
  this.$el = $el;

  var self = this;
  this.$el.on("focus", function(){
    self.removeError();
  });

  this.rawCode = function(){
    return store.getItem("rawCode") || "// code in here!";
  }
  this.save = function(){
    var rawCode = this.$el[0].innerText; // innerText because we want line breaks
    store.setItem("rawCode", rawCode);
  }
  this.render = function(){
    this.$el.text(this.rawCode());
  }
  this.eval = function(cb){
    this.removeError();
    this.save();
    try {
      cb( this.rawCode() );
    } catch (err) {
      this.displayError(err.name);
    }
  }
  this.displayError = function(errorType){
    this.$el.parent().append(`<p class="error-msg">${errorType}</p>`);
  }
  this.removeError = function(){
    this.$el.removeClass("has-error");
  }

}

// optional OO interface;
var k = o = {
  moveRight,
  moveLeft,
  draw,
  erase,
  useGreen,
  useBlue,
  onBlue,
  onGreen
};

$(document).ready(function() {
  var rando = parseInt(Math.random()*10);
  console.log("Our random number for this run is "+rando);

  window.onhashchange = updateInitialState;
  function updateInitialState(){
    window.initial_state = window.location.hash.slice(1).split("");
    initializeRow();
  }
  if (!window.location.hash) {
    window.history.replaceState(null, null, "#.....")
  }

  updateInitialState();
  initializeRow();
  updateRow();

  var codeArea = new CodeArea($("#coding-area"), window.localStorage);
  codeArea.render();

  $(".play").click(function tryPlay() {
    codeArea.eval(function(rawCode){
      var newMain = new Function( rawCode );
      play(newMain);
    });
  });

  $(".reset").click(function(){
    codeArea.save();
    window.location.reload();
  })

  var rotation = {
    ".":"b",
    "b":"g",
    "g":".",
  };
  $("td").click(function(event){
    var index = event.currentTarget.cellIndex;
    initial_state[index] = rotation[ initial_state[index] ];
    window.history.replaceState(null, null, "#"+initial_state.join(""))
    updateInitialState();
  })

});

