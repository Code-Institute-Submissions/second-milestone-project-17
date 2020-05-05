# Second Milestone Project

## [Simon Game](https://kompeet.github.io/second-milestone-project/)

### Interactive Front-End Development


## Table of Contents
- [**About**](#About)
  - [Why This Project?](#Why-This-Project)
- [**UX**](#UX)
  - [User Stories](#User-Stories)
  - [Research](#Research)
  - [Style Rationale](#Style-Rationale)
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
  - [Responsive Testing](#Responsive-Testing)
  - [Additional Testing](#Additional-Testing)
  - [HTML And CSS Validation](#HTML-And-CSS-Validation)
  - [Bugs Or Problems](#Interesting-Bugs-Or-Problems)
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

### User Stories

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
Most of the renditions I saw seemed to us a circular user interface (UI) which contained all the game's controls within it. 

### Style Rationale

I wanted to use animations as much as I can and clear/modern colorful design. This is my reasoning why I chose that particular UI design.
I've also chosen to leave "air" between layout to make it easier for the user to interact with the game controls.

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
- A user can play in Default Mode and Difficulty increases at every 5 rounds. 'Strict Mode' enabled will start the game over to Round 1 when player pressed the incorrect sequence. No second chances. Enable Strict Mode at anytime of any round.
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

### Automated Testing

### Run Jasmine Tests

### Create Jasmine Tests

### Responsive Testing

### Additional Testing

### HTML And CSS Validation

### Bugs Or Problems

## Deployment

### Repository Link

### Running Code Locally

## Credits

### Content

### Media

### Sounds

### Acknowledgements

### Disclaimer



