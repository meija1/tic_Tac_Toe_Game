## Tic Tac Toe Game

This is a simple game of two players placing "x"'s and "o"'s in a three-by-three game grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner. This website is for people who like a simple, fun game to play with friends. It's also a simple strategy game which is good for children.

![responsive](https://user-images.githubusercontent.com/109754892/211574350-fa6f2b18-801f-4525-9487-5be4ddc08ca9.png)

# Features
The website displays a game of placing an "x" or an "o" on a provided grid, coloured red and blue respectively. It tells the player which turn it is by showing the "x" or "o" text below. The game keeps score of the number of wins for the "x" and "o" players.
## Existing Features
* The Landing Animation
    * Greeting of Tic Tac Toe text drops down and play button apears.
    * ![mainScreen](https://user-images.githubusercontent.com/109754892/211579542-ef05c964-a0c1-4d60-8723-541001f61610.png)
* Game Board
    * Game board of three-by-three grid sits in the middle. 
    * Space highlights grey when the mouse pointer goes over it.
    * ![gameplay](https://user-images.githubusercontent.com/109754892/211583605-059a3615-cf09-489d-b155-c099e9dc6950.png)
* "x"'s and "o"'s
    * "x"'s are coloured red and "o"'s are coloured blue to make a clear distinction between both players. 
    * ![xando](https://user-images.githubusercontent.com/109754892/211583920-0a9c978e-fa37-4aa5-a159-7e4f6bed3f8a.png)
* Turns
    * Below the game board, text depicts if it is player "x"'s turn or player "o"'s turn..
    *  ![gameplay - turn](https://user-images.githubusercontent.com/109754892/211584917-ac83a50b-d7d1-45d3-8085-aa8a0a3e5549.png)
* Scores
    * On each side of the game board, a total score for "x" and "o" wins are displayed.
    * ![xwin](https://user-images.githubusercontent.com/109754892/211596439-0ddc55ec-0c94-4186-8ad3-ba0208f4d194.png)
    * ![owin](https://user-images.githubusercontent.com/109754892/211596538-8033b417-2280-4245-aca4-1518b58d178b.png)
* Play Again screen
    * This screen apears when the games has ended - either due to a win or a draw. The text relays which outcome has been reached.
    * ![winningscreen](https://user-images.githubusercontent.com/109754892/211597859-0fded5b6-b950-448d-be7b-67fd7b567b73.png)
## Features Left to Implement
* The website could benefit from a game against the computer as a selectable game mode.
## Testing
I have tested the game's website on different browsers and devices. The main logic for the game works well and the score updates as intended.
When the top three spaces are clicked, small white lines appear on the upper edge of the cell. However, these are not apparent on smaller screen sizes.

On some smaller devices, the animation display is not as smooth when compared with larger devices.

A lot of tests were run in order to establish the correct game logic and determine how to manipulate the node list.
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
White lines appearing on top of the upper three cells once they have been clicked.
## Deployment
* The site was deployed to GitHub pages. The steps to deploy are as follows:
    * In the GitHub repository, navigate to the Settings tab
    * From the source section drop-down menu, select the Master Branch
    * Once the Master Branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
The live link can be found here - https://meija1.github.io/tic_Tac_Toe_Game/
## Credits
### Contents
* The fonts for text in the website were taken from [Google Fonts](https://fonts.google.com/)
* Most of the game issues and bug fixes were found on [Stack Overflow](https://stackoverflow.com/)
* Element class list methods were found on [W3Schools](https://www.w3schools.com/jsref/prop_element_classlist.asp)
* Methods for Node list were taken from [Mozilla.Developer](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)
* Some problems with the code were asked on my profile here [Stack Overflow](https://stackoverflow.com/questions/75042284/js-tic-tac-toe-disable-click-after-the-cell-is-taken)
* Some of the game logic was taken from my old Java project on IntelliJ IDEA
