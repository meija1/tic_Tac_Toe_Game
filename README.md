## Tic Tac Toe Game

This is a simple game of two players placing x's and o's in a three by three game grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner. This website is for people who likes a simple, fun game to play with friends or just to pass time. It's also a simple 
strategy game good for kids.

![responsive](https://user-images.githubusercontent.com/109754892/211574350-fa6f2b18-801f-4525-9487-5be4ddc08ca9.png)

# Features
The website gives a game of placing x or an o at provided grid colored red and blue respectively. It tells the player which turn it is by giving it the X or O text below. Game keeps score of each player of x or o.
## Existing Features
* The Landing Animation
    * Greeting of Tic Tac Toe text drops down and play button apears.
    * ![mainScreen](https://user-images.githubusercontent.com/109754892/211579542-ef05c964-a0c1-4d60-8723-541001f61610.png)
* Game Board
    * Game board of three by trhee grid of nine spaces sits in the middle. 
    * Space highlights gray when mouse pointer goes over it.
    * ![gameplay](https://user-images.githubusercontent.com/109754892/211583605-059a3615-cf09-489d-b155-c099e9dc6950.png)
* X's and O's
    * Crosses are colored red and Circles are colored blue to make it appear more different. 
    * ![xando](https://user-images.githubusercontent.com/109754892/211583920-0a9c978e-fa37-4aa5-a159-7e4f6bed3f8a.png)
* Turns
    * Below game board text shows whos turn it is giving X or O depending on who goes next.
    *  ![gameplay - turn](https://user-images.githubusercontent.com/109754892/211584917-ac83a50b-d7d1-45d3-8085-aa8a0a3e5549.png)
* Scores
    * On each sides X win and O win keeps scores of each game played.
    * ![xwin](https://user-images.githubusercontent.com/109754892/211596439-0ddc55ec-0c94-4186-8ad3-ba0208f4d194.png)
    * ![owin](https://user-images.githubusercontent.com/109754892/211596538-8033b417-2280-4245-aca4-1518b58d178b.png)
* Play Again screen
    * Screen apears when there's been a winner or if it's a draw giving the necessary text.
    * ![winningscreen](https://user-images.githubusercontent.com/109754892/211597859-0fded5b6-b950-448d-be7b-67fd7b567b73.png)
## Features Left to Implement
* The website could benefit from a game against the computer as a selectable game mode.
## Testing
I have tested the website, tried it in different browsers and devices. The main logic for the game works well and the score updates like it should.
The top cells when clicked have small white edges on top

On smaller devices the animation twitches a bit and button edges seem to appear earlier

A lot of tests was run for seeing how the game logic works and how to manipulate node list.
## Validator Testing
* HTML
    * No errors were returned when passing through the official W3C validator
    https://validator.w3.org/nu/?doc=https%3A%2F%2Fmeija1.github.io%2Ftic_Tac_Toe_Game%2F
* CSS
    * No errors were found when passing through the official (Jigsaw) validator
    https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmeija1.github.io%2Ftic_Tac_Toe_Game%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en
* Javascript
    * No errors were returned when passing through the official JSHint validator
    * ![javascript](https://user-images.githubusercontent.com/109754892/211618278-ee067f4e-8e05-4ade-8296-73dca6a14d21.png)
* Accessability
    * I confirm that the colours and fonts chosen are easy to read and accessible by running it through lighthouse in devtools.
    * ![performance](https://user-images.githubusercontent.com/109754892/211614229-b4e04f67-3f93-4071-b113-079b464f1f8f.png)
## Unfixed Bugs
White lines on top of the three cells appear once they have been clicked.
## Deployment
* The site was deployed to GitHub pages. The steps to deploy are as follows:
    * In the GitHub repository, navigate to the Settings tab
    * From the source section drop-down menu, select the Master Branch
    * Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
The live link can be found here - 
## Credits
### Contents
* The fonts for text in the website were taken from [Google Fonts](https://fonts.google.com/)
* Most of the game issues and bug fixes were found on [Stack Overflow](https://stackoverflow.com/)
* Some problems with the Node list were asked on my profile here [Stack Overflow] (https://stackoverflow.com/questions/75042284/js-tic-tac-toe-disable-click-after-the-cell-is-taken)

