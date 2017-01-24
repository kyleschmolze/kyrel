# Kyrel
Kyrel is a simple browser-based game for learning about control flow and loops in javascript. It is reminiscent of a turing machine that manipulates a strip of tape, transforming it from an initial state to a final state.

### Methods
The following special methods are available for traversing/transforming the row:
* `moveRight();`
* `moveLeft();`
* `useGreen();`
* `useBlue();`
* `draw();`
* `erase();`
* `onGreen();`
* `onBlue();`

### Example Problem
Write a program which draws a green circle at the end of the row.

``` javascript
  function main() {
    moveRight();
    moveRight();
    moveRight();
    moveRight();
    useGreen();
    draw();
  }
```

This would result in the following transformation:
```
 ['.', '.', '.', '.', '.'] // start row (initial state)
 ['.', '.', '.', '.', 'g'] // end row (end state)
```

####Start:
![](/screenshots/initial_state.png)

####End:
![](/screenshots/end_state.png)

## Instructions

Clone this repo! (Or click "Download ZIP" on the right).

There are three problem sets, organized by difficulty: [day_1](/challenges/day1.md), [day_2](/challenges/day2.md), [day_3](/challenges/day3.js).

Solutions may be found in the [/solutions](/challenges/solutions) folder. NO PEEKING! Try your darndest before you give up. The name of the solution file will match the title of the problem. For example, the solution to **turn_3rd_cell_blue** can be found at [challenges/solutions/turn_3rd_cell_blue.js](challenges/solutions/turn_3rd_cell_blue.js).

### Using kyrel.js

If you look in `play.js` you'll see this:

``` js
var initial_state = [ '.', '.', '.', '.', '.' ];

function main(n) {

  //////////////////////////////////
  ////                          ////
  //// v YOUR CODE BELOW HERE v ////
  ////                          ////
  //////////////////////////////////



  //////////////////////////////////
  ////                          ////
  //// ^ YOUR CODE ABOVE HERE ^ ////
  ////                          ////
  //////////////////////////////////

}
```

* First, you need to manually configure your "starting row" (see `play.js#L22`) to match the initial state of the problem you're solving.
    - `var initial_state = ['.', 'b', '.', 'g', '.'] // play.js#L22`
        + 'b' means blue
        + 'g' mean green
        + '.' (dot) means empty
* Next, write your instructions inside the `main` function in [play.js](/play.js#L24).
    * TIP: If you declare your variables at the very TOP of the play.js file, your values will be in the "global scope". This can make it easier for you to see them in your console / play with them.
* To run the program, open `index.html` in your browser and press "Play". This will execute the code you put in your `main` function in `play.js#L24`.
    * TIP: Make sure to refresh the page whenever you make changes to your javascript!
    * PRO-TIP: Always have your Chrome Developer Console open ([here's how](http://jsforcats.com/#basics)), and make sure to check for error messages!

* When you've completed a problem, save your work! Make a copy of `play.js` and rename it e.g. `solution-all-blue.js`. Then, go back to `play.js` and clear out your `main` function so you can start fresh again.

#### Inspiration
Adapted from [Kyrel](https://github.com/kyletns/kyrel).

More information about turing machines:
* [Play the Turing Machine Google Doodle](https://encrypted.google.com/doodles/alan-turings-100th-birthday)
* [Turing Machine Simulator](http://turing-machine.com/)
* [A Tweetable Turing Machine](https://gist.github.com/mrrrgn/3200044be3fd31f4c3b5)

Possible slides:
[Kyrel.pdf](Kyrel.pdf)
or: [google docs](https://docs.google.com/presentation/d/1j47BMDfows4O5rw4UYaYabHhosmZHQ8iKs8A5b-T3Pw/edit?usp=sharing)
