I used surge to deploy my game which you can access [here](http://western-tic-tac-toe.surge.sh/)

# Western Tic-Tac-Toe

<img src="/images/ttt-print.png" alt="print" border="0">

This is my first project using HTML CSS and JavaScript

PSEUDOCODE

1) Define the required constants:
  i.i Define a colors object with keys of 'null' (when the square is empty) and players 1 & -1. The value assigned to each key represents the color to display for an empty square (null), player 1, and player -1.
  i.ii Define the 8 possible winning combinations, each containing three indexes of the board that make a winner if they hold the same player value.

2) Define the required variables used to track the state of the game:
  ii.i Use a board array to represent the squares.    
  ii.ii Use a turn variable to remember whose turn it is.
  ii.iii Use a winner variable to represent three different possibilities - a player that won, a tie, or a game in play.


3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable, and performant:
  iii.i Store the 9 elements that represent the squares on the page.

4) Upon loading, the app should:
  iv.i Initialize the state variables:
    iv.i.i Initialize the board array to 9 nulls to represent empty squares. The 9 elements will "map" to each square, where index 0 maps to the top-left square and index 8 maps to the bottom-right square.
    iv.i.ii Initialize whose turn it is to 1 (player 'X'). Player 'O' will be represented by -1.
    iv.i.iii Initialize winner to null to represent that there is no winner or tie yet. Winner will hold the player value (1 or -1) if there's a winner. Winner will hold a 'T' if there's a tie. 
  iv.ii Render those state variables to the page:
    iv.ii.i Render the board:
      iv.ii.i.i Loop over each of the 9 elements that represent the squares on the page, and for each iteration:
      iv.ii.i.ii Use the index of the iteration to access the mapped value from the board array.
      iv.iii.i.iii Set the background color of the current element by using the value as a key on the colors lookup object (constant.
    iv.ii.ii Render a message:
      iv.ii.ii.i If winner has a value other than null (game still in progress), render whose turn it is - use the color name for the player, converting it to upper case.
      iv.ii.ii.ii If winner is equal to 'T' (tie), render a tie message.
      iv.ii.ii.iii Otherwise, render a congratulatory message to which player has won - use the color name for the player, converting it to uppercase.
  iv.iii Wait for the user to click a square

5) Handle a player clicking a square:
  v.i Obtain the index of the square that was clicked by either:
    v.i.i "Extracting" the index from an id assigned to the element in the HTML, or
    v.i.ii Looping through the cached square elements using a for loop and breaking out when the current square element equals the event object's target.
  v.ii If the board has a value at the index, immediately return because that square is already taken.
  v.iii If winner is not null, immediately return because the game is over.
  v.iv Update the board array at the index with the value of turn.
  v.v Flip turns by multiplying turn by -1 (flips a 1 to -1, and vice-versa).
  v.vi Set the winner variable if there's a winner:
    v.vi.i Loop through the each of the winning combination arrays defined.
    v.vi.ii Total up the three board positions using the three indexes in the current combo.
    v.vi.iii Convert the total to an absolute value (convert any negative total to positive).
    v.vi.iv If the total equals 3, we have a winner! Set winner to the board's value at the index specified by the first index in the combo array. Exit the loop.
  v.vii If there's no winner, check if there's a tie:
    v.vii.i Set winner to 'T' if there are no more nulls in the board array.
  v.viii All state has been updated, so render the state to the page (step 4.2).
        

6) Handle a player clicking the replay button:
  vi.i Do steps 4.1 (initialize the state variables) and 4.2 (render).
