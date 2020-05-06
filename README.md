# Second Milestone Project

## [Simon Game](https://kompeet.github.io/second-milestone-project/)

### Interactive Front-End Development


## Table of Contents
- [**About**](#About)
  - [Why This Project?](#Why-This-Project)
- [**UX**](#UX)
  - [User Goals](#User-Goals)
  - [Research](#Research)
  - [Style](#Style)
  - [Wireframes](#Wireframes)
- [**Features**](#Features)
  - [Functionality](#Functionality)
  - [Existing Features](#Existing-Features)
  - [Game Controls](#Game-Controls)
  - [Modes](#Modes)
- [**Technologies Used**](#Technologies-Used)
  - [Version Control](#Version-Control) 
- [**Testing**](#Testing)
  - [Testing User Stories](#Testing-User-Stories)
  - [Automated Testing](#Automated-Testing)
  - [Run Jasmine Tests](#Run-Jasmine-Tests)
  - [Create Jasmine Tests](#Create-Jasmine-Tests)
  - [HTML And CSS Validation](#HTML-And-CSS-Validation)
  - [Bugs Or Problems](#Bugs-Or-Problems)
- [**Deployment**](#Deployment)
  - [Repository Link](#Repository-Link)
  - [Running Code Locally](#Running-Code-Locally)
- [**Credits**](#Credits)
  - [Content](#Content)
  - [Media](#Media)
  - [Sounds](#Sounds)
  - [Acknowledgements](#Acknowledgements)
  - [Disclaimer](#Disclaimer)

## About

This application is my rendition of the classic simple memory game. The goal of the game is to replicate a sequence of signals which are displayed via a synchronised combination of musical tones and animated buttons.
You can find out more about the original **_Simon_** game and rules by visiting this [Wikipedia](https://en.wikipedia.org/wiki/Simon_(game)) page or watching this [video](https://www.youtube.com/watch?v=1Yqj76Q4jJ4).

### Why This Project?

I created this game for the Interactive Frontend Development project. The project scope was to create the game using HTML, CSS and JavaScript with the core focus being the functional logic created with JavaScript.
There was a choice of three different projects. Choosing this project would enable me to develop in JavaScript much deeper. I learnt a lot during the course of the project.

## UX

### User Goals

- I want to be presented with a random series of button presses.
- When I input the correct series of button presses I want the same series of button presses to be shown in the next round but with an additional button press added to the series.
- If I press the wrong button, I want to be notified of this and be presented with the same series of button presses before the game will allow me to try again.
- I want to be able to see a display which shows me which round I am currently on the round number should correspond to the number of button presses in that round.
- I want to hear a different sound for each game button, both when the sequence plays and also when I press the buttons.
- I want to have a 'strict mode' option which takes me back to the start of the game if I press the wrong button in a sequence.
- I want to be notified of when I win the game after completing a set number of rounds.
- I want to be able to turn the sound on and off.

### Research

To understand the game, I researched existing renditions of the  game which gave me an idea of the layout and functionality that those renditions were using. This gave me some insight into what options I could implement within my rendition of the game and helped me to plan for my project.
Most of the renditions I saw seemed to me a circular user interface (UI) which contained all the game's controls within it. 

### Style

I wanted to use animations as much as I can and clear/modern colorful design. This is my reasoning why I chose that particular UI design.
I've also chosen to leave "air" between layout to make it easier for the user to interact with the game controls.
I do really like the well balanced colorful design. That is why I picked these colours.


### Wireframes

I drew my wireframes using Balsamiq. I have done separate wireframes to show my consideration of how to make my app responsive. The links to the files are below:
- [index.html (desktop)](https://github.com/kompeet/second-milestone-project/blob/master/assets/wireframes/wireframe-1-windows.png)
- [index.html (phones)](https://github.com/kompeet/second-milestone-project/blob/master/assets/wireframes/wireframe-2-mobile.png)
- [index.html (tablet)](https://github.com/kompeet/second-milestone-project/blob/master/assets/wireframes/wireframe-3-tablet.png)

## Features

### Functionality

- The user is required to repeat the displayed sequence correctly by clicking the relevant button sequences with a cursor on laptop/desktop devices or a finge on touch devices. A valid user input initiates the next round where the same sequence is replayed but with an additional step.
- When users press a button they will hear a sound and see a light colour that corresponds to the button that they press. 
- If a user inputs the wrong sequence a notification by a specific sound accompanied with a text message will appear in the round status after which the previous sequence replays and allows the user to try again. Normal mode allows for mistakes. The user can then click 'START' to restart the game. 'Strict mode' allows for no mistakes. The user can then restart the game by pressing 'START'.
- The round number corresponds to the number of button presses so that the user can see how many steps are in the current sequence.
- If a user wants to restart the game they can click the 'START' button or 'SIMON' to reload the page.
- A user can play in Normal Mode and Difficulty increases at every 5 rounds. 'Strict Mode' enabled will start the game over to Round 1 when player pressed the incorrect sequence. No second chances. Enable Strict Mode at anytime of any round.
- Repeating 20 sequences correctly means that the user wins the game. When this happens a message stating 'YOU WON!' appears in the status bar and a specific sound plays. 
- All the buttons and patterns are animated.

### Existing Features

#### Game Controls

- **Header Logo** - Users are able to click the **_Simon_** logo in the header which reloads the webpage.
- **"i" Icon** - Users are able to click the **"i"** icon in the header which loads a modal.
- **Modal** - The modal is triggered by the "i" icon and it allows users to read the instructions for how to operate the game.
- **Volume icon** - Users are able to click the volume icon in the header which toggles the sound on and off. The icon also changes depending on the toggle state.
- **Start Button** - Users can Start the game and Status Bar appears. 
- **Strict Button** - Users can toggle the Strict button to turn 'Strict mode' on or off. When 'Strict mode' is on css is used to highlight this button. When 'Strict mode' is off, this button returns to its default state. If 'Strict mode' is on, this is automatically turned off when the game is powered off. This gives the user a clear visual indication of when 'Strict mode' is on or off.
- **Round Status** - The area between the START and STRICT buttons is a text display area. Before gameplay the text in this area displays 'ROUND 1'. During gameplay round number increases. If user makes a mistake the color changes to red.
- **Game Buttons** - There are four game buttons, all different colors. Users press these buttons on their turn to repeat the sequence that the CPU displayed. The lights flash when they are active either during the CPU's turn or when clicked by the user.
- **Status Bar** - Users can see when "Simon says..." "YOUR TURN!".
- **Footer Link** - Users can click the link which is my name. Upon clicking the link users are directed to my GitHub profile which loads in a new browser tab.

#### Modes

- **Default Mode** - The lights flash in a specific sequence, every 1000 milliseconds. A new step is added each round which makes the game progressively difficult. Difficulty increases at every 5 rounds. In rounds 1 to 4 the lights flash every 1000 milliseconds with 0.75 soundspeed. In rounds 5 to 9 the lights flash every 800 milliseconds with 1.0 soundspeed. In rounds 10 to 14 the lights flash every 600 milliseconds with 1.25 soundspeed. In rounds 15 to 20 the lights flash every 565 milliseconds with 1.30 soundspeed. Animationspeed also adjusted
- **Strict Mode** - This mode allows no mistakes from users. Regardless of which round the game had progressed to if users make a mistake they are presented with an error sound and the round status flashes red with an animation.

## Technologies Used

- [**Balsamiq**](https://balsamiq.com/)
    - I've used **Balsamiq** to create wireframes of my website/app before building it.
- [**HTML**](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
    - The project uses **HTML** to create the basic elements and content of my game.
- [**CSS**](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3)
    - The project uses **CSS** to apply the custom styles created to my game. The index.html file is linked directly to the main.css stylesheet.
- [**Bootstrap**](https://getbootstrap.com/)
    - The project uses the **Bootstrap** framework to add a responsive grid system, prebuilt components, plugins built on jQuery, and Bootstrap styles to my game, before adding my custom styles.
- [**JavaScript**](https://www.javascript.com/)
    - The project uses **JavaScript** from my custom script.js file to add functionality and interactivity to my game. This is the core focus of this project. The project also uses **JavaScript** from Bootstrap which is required to add functionality to the Bootstrap modal.
- [**jQuery**](https://jquery.com)
    - The project uses **jQuery** to simplify DOM manipulation. This is both the standard jQuery that is built with Bootstrap components, and my custom jQuery used in my script.js file.
- [**Google Fonts**](https://fonts.google.com/)
    - The project uses **Google Fonts** to style the text and suit my chosen theme.
- [**Font Awesome**](https://fontawesome.com/)
    - The project uses **Font Awesome** for the instructions and sound icons in the header of my game website/app.
- [**GitPod**](https://gitpod.io)
    - I've used **GitPod** as the development environment to write the code for my website.
- [**Jasmine**](https://jasmine.github.io/)
    - The project uses Test Driven Development (TDD) using the **Jasmine** framework to automate some testing of my **JavaScript** code.
- [**Animate.css**](https://daneden.github.io/animate.css/)
    - The project uses animations to animate the text, buttons, patterns.

### Version Control

- [**GitHub**](https://github.com/)
    - I've used **GitHub** as a remote repository to push and store the committed changes to my project from Git. I've also used GitHub pages to deploy my website in a live environment.

## Testing

### Testing User Stories

I asked friends and family to play the game as much as they can and tell me their opinion to help me how I can improve it. 
I tested all of the functions manually and used console.logs. I also used validators to check potential errors.

- *Tester 1* - "I wasn't sure when my turn to go actually was as I've never seen this game before."
- *Tester 2* - "I like the layout. Simple but works well."
- *Tester 3* - "What is this?" :) - "Click on the "i" button then you will see."  then he really liked it. He said "It's cool."
- *Tester 4* - "There is a sound delay and it is a bit fast for me". She used Safari.
- *Tester 5* - "I really like the colours."

### Automated Testing

I tested some of my functions with Jasmine after completing my JavaScript code. 
I didn't want to spend too much time on Jasmine by using it to test all my functions as I was completely new to JavaScript and Jasmine at the beginning of this project.

The links to my Jasmine testing suite files are below:
- HTML test page to run tests from - [indexTest.html](https://github.com/kompeet/second-milestone-project/blob/master/assets/testing/indexTest.html)
- Jasmine JavaScript testing suite - [spec.js](https://github.com/kompeet/second-milestone-project/blob/master/assets/testing/spec/spec.js)
- JavaScript file to be tested - [main.js](https://github.com/kompeet/second-milestone-project/blob/master/assets/javascript/main.js)

### Run Jasmine Tests

Once you've cloned my project by following the instructions in the **_Deployment - Running Code Locally_** section below, you can run the Jasmine tests by completing the following steps:
1. Open the [indexTest.html](https://github.com/kompeet/second-milestone-project/blob/master/assets/testing/indexTest.html) file.
2. Run the file to view the results in your browser.

### Responsive Testing

I used Google Chrome's Development tools to constantly test each change that I made to my project and to ensure that it appeared in the desired way on different screen sizes.
I was testing across different platforms and web browsers in order to make sure the website looked great also asked friends and family to test across their own devices and to give me honest opinions and feedback.

* ~~Windows 10~~
- *Google Chrome*
- *Mozilla Firefox*
- *Microsoft Edge*
- *Internet Explorer* / Very poor - Volume button does not work - Game does not start

* ~~Sony Xperia Z1 Compact~~
- *Google Chrome*
- *Mozilla Firefox*

* ~~Xiaomi Mi Note 10~~
- *Google Chrome*
- *Mozilla Firefox*

### HTML And CSS Validation

- I used the [W3C HTML Validator tool](https://validator.w3.org/#validate_by_input) to validate my HTML code.
- I used the [W3C CSS Validator tool](https://jigsaw.w3.org/css-validator/#validate_by_input) to validate my CSS.
- I used the [Esprima Syntax Validator tool](http://esprima.org/demo/validate.html) to validate my JavaScript.

### Bugs Or Problems

- There is a sound delay on Safari. I could not sort it out.
- Volume button and startGame do not work on Internet Explorer
- "i" and "volume" buttons while focusing have that blue highlighted border. I tried to find the solution with `:focus {outline: none !important;}` but did not work.
- I was unable to override Bootstrap modal CSS. Needed to debug with this code: `body .modal-backdrop.fade.in {z-index: 0 !important;}`


## Deployment

The hosting platform that I've used for my project is GitHub Pages. To deploy my website to GitHub pages, I used the following steps:

1. Loaded the terminal window in my GitPod workspace.
2. Initialised Git using the `git init` command.
3. Added all files to the Staging area (Git) using the `git add .` command.
4. Committed the files to Git using the `git commit -m "Initial commit"` command.
5. Created a new repository in GitHub called 'second-milestone-project'.
6. Copied the below code from GitHub into the terminal window in my GitPod workspace:

    ```git remote add origin https://github.com/kompeet/second-milestone-project.git```

    ```git push -u origin master```

7. Entered my GitHub username and password to push the files from Git to GitHub.
8. Went into 'Settings' on my repository page in GitHub.
9. Selected the 'master branch' option under the 'GitHub Pages' section.
10. Ran several regular commits throughout my project.

### Repository Link

Click the link below to run my project in the live environment:
[Simon Game](https://kompeet.github.io/second-milestone-project/)

### Running Code Locally

To run my code locally, users can download a local copy of my code to their desktop by completing the following steps:

1. Go to [my GitHub repository](https://github.com/kompeet/second-milestone-project/).
2. Click on 'Clone or download' under the repository name.
3. Copy the clone URL for the repository in the 'Clone with HTTPs section'.
4. Open 'Git Bash' in your local IDE.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, then paste the URL you copied in Step 3:

    ```git clone https://github.com/USERNAME/REPOSITORY```

7. Press `Enter` to complete the process and create a your local clone.

## Credits

### Content

- All text was written by me.
- I learn a lot and received inspiration from these [video](https://www.youtube.com/watch?v=n_ec3eowFLQ), [video](https://www.youtube.com/watch?v=hdI2bqOjy3c&t=3207s).
- [freeCodeCamp](https://www.freecodecamp.org/), [W3Schools](https://www.w3schools.com/), [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/) 
- `body .modal-backdrop.fade.in {z-index: 0 !important;}` copied from [toolset](https://toolset.com/forums/topic/unable-to-override-bootstrap-modal-css-on-initial-page-load/)
- `Array.prototype.slice.call(document.querySelectorAll('audio')).forEach(function(audio) {audio.muted = true;});` copied from [Stack Overflow](https://stackoverflow.com/questions/14044761/how-to-mute-all-sound-in-a-page-with-js/40608925#40608925)

### Media

- To convert the logo to a favicon, I used [Favicon](https://favicon.io/)
- Background-image from [toptal](https://www.toptal.com/designers/subtlepatterns/)

#### Sounds

- **Game Button Sounds** - I got the sounds for the game buttons from [Free Code Camp](https://www.freecodecamp.org/), and assigned the url link to the relevant button in my script.js file.
- **Game Sounds** - I downloaded the sounds for the game sounds and button clicks from [SoundBible](http://soundbible.com/) and imported them into my workspace. I then created variables for these sound files in my script.js file.

### Acknowledgements

- I received inspiration for this project from searching for Simon games in Google and testing several of the renditions that were shown in the search results.
- Slack Community
- My family, friends and everybody who did take time to test this game and gave me feedback.
- My mentor, Aaron Sinnott for his advices.

### Disclaimer

The content of this project is for educational purposes only.

Best Regards, 

kompeet
