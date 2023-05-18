Funny Dogs Memory Game

Welcome,

The Funny Dogs Memory Game is a simple matching cards game in which all the cards are flipped backside on a surface. 
There are 8 cards that have the same images, but each card is placed randomly, and the user's mission is to find them. It is possible to flip up with only two cards over each turn. 
The game doesn't have a time limit to find the pairs of cards.

Due to the low level of difficulty, the game is intended for younger users,to entertain and at the same time improve memory; however adults can also play it. 

Throughout the creation of this game, I was using three HTML ( index.html, welcome.html, instruction.html) two CSS files (game.css, style.css), and one java.js file.

## Welcome Page

The first-page purpose is welcome a user and as well to give two options: 

- to start the game,
- to get to know the instructions of the game.

 There are two buttons that will lead to next pages.

After clicking a _Start Game_ button the user will be transferred to a memory game page. 

After clicking the _Instructions_ button the user will be transferred to an instructions page. 

![Alt text](images/screenshoots/welcome%20page.png)

## Instruction Page

This page will give a user an explanation of the rules of the game and will give a two option:

-  to go back to the first page by clicking a _Welcome Page_,
-  to the Memory card page by clicking _Start Game_ where you can start the game.

![Alt text](images/screenshoots/screenshot%20instruction%20site.png)
## Memory Card Game Page

This page contains 16 randomly arranged cards.
The cards are turned over. Only two cards can be flipped at a time.

`Screenshot with all the cards turned backwards`


![Alt text](images/screenshoots/Memory%20Game%20page.png)

`Screenshot with reversed cards showing the front`


![Alt text](images/screenshoots/Memory%20Game%20Page%20cards.png)

`style.css, game.css`

Those files contain the stylesheet language to control the presentation of the elements that will appear on the website.
Style.css is responsible for styling Welcome Page and Instruction Page.
Game.css is responsible for a Memory Card Game Page.

`script.js`
This file contains the programming language that will decide what to do when the user  clicks the card buttons
on the web page. 
If two cards are matching they will stay flipped out. If the cards don't match they will turn(return to the starting position).
Thanks to the function shuffle,  after matching all the cards, they will be mixed up and placed randomly.

`index.html`
In this file there are placed details on the main game page with all the images and as well two buttons: New game, 

# Images

The images are added in the index html file Memory Card section.
In total, we have sixteen cards, eight matching pairs as we need two of each picture.  

All images have a `class` assigned to them reference to the CSS file for displaying an element, in this instance it is the ‘.deck .card’ part entry
in the CSS file, see corresponding highlighted entries above.
• type = > description of card to be used by JavaScript to identify a matching set.



# Validation W3C CSS Validator 

Results for https://kamilaazul.github.io/FunnyDogsMemoryGame/index.html (CSS level 3 + SVG)

- No Error Found.

Results for https://kamilaazul.github.io/FunnyDogsMemoryGame/info.html (CSS level 3 + SVG)

- No Error Found.

Results for https://kamilaazul.github.io/FunnyDogsMemoryGame/welcome.html (CSS level 3 + SVG)

- No Error Found.

# Validation W3C CSS Validator 