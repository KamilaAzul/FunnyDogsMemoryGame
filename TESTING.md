### Code Validation

The Lighthouse, W3C Markup Validator, JSHint and the Lighthouse report were used to determine whether there were any
errors in the code:

* [W3C html Validator](https://validator.w3.org/), 
* [W3C CSS Validator](https://jigsaw.w3.org/css-validator/),
* [jshint validator](https://jshint.com/),
* [Lighthouse report],

#### JSHint validator:

There are 10 functions in this file.

Function with the largest signature take 1 arguments, while the median is 0.

Largest function has 23 statements in it, while the median is 2.

The most complex function has a cyclomatic complexity value of 7 while the median is 1.

17 warnings
1	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
2	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
3	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
4	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
8	'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
9	'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
10	'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
11	'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
48	'template literal syntax' is only available in ES6 (use 'esversion: 6').
60	'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').
61	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
61	'template literal syntax' is only available in ES6 (use 'esversion: 6').
62	'template literal syntax' is only available in ES6 (use 'esversion: 6').
68	'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').
75	'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').
84	'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').
119	'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).

* Script.js

![jshint](images/Testing/jshint.png)

* Congratulations Page

![jshintCongratulations](images/Testing/jshintCongratulations.png)

The HTML validator results for each page are below:

* Welome Page
* Instruction Page
* Memory Game Page
* Congratulation Page


On all pages same error was found. It's not affecting the operation of the site

![Alt text](images/Validation%20html.png)


[Back to top](<#contents>)

The CSS validator didn't detect any errors.

![Alt text](images/validation%20css.png)

## Responsiveness Test

* The responsive design tests were carried out manually with [Responsive Design Checker](https://www.responsivedesignchecker.com/).
The website has adequate responsiveness on all screen sizes.

## Testing the User Stories

- As a user I want to be able to navigate through the whole site smoothly.
* The user can move freely around the website.
All pages are connected and it's easy to go to the next page or go back to the previous page. Using the website is easy and clear for the user.
- As a user I want to understand the purpose of the site upon loading it.
* The purpose of the website is clear and understandable to the user.
The website contains a detailed description of what this website is for.
- As a user I want to understand the rules of the game.
* The user enters the "Instructions" page and will find a description and rules of the game.
- As a user I want to play the game with no technical problems.
* The user does not encounter any technical problems while playing.
All game functions work properly.

# Manual testing

* Welome Page
* Instruction Page
* Memory Game Page
* Congratulation Page

## Known Bugs

https://validator.w3.org/ showed some errors:

Unclosed Elements:
<section class="memory-game">
    <!-- content here -->
</section>

End of HTML
Closing tags for the <section> and <body> elements are missing. Add them at the end of your HTML code:
Correction:
</section>
</body>
</html>

Not solved:
Heading Elements:
Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections, or else use a div element instead for any cases where no heading is needed.
<section id="buttonsBottom">

