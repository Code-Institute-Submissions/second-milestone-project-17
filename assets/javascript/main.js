//--Sound Variables / Button Variables / Variables
const greenBtnSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
const yellowBtnSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
const redBtnSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
const blueBtnSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
const wrongSound = new Audio("http://res.cloudinary.com/thisiswhale/video/upload/v1518937949/142608__autistic-lucario__error_vcwlt0.wav");
const winSound = new Audio("http://res.cloudinary.com/thisiswhale/video/upload/v1518166335/Regular_Show__OOOOOOOOOOOOOOOOOOOOHHHHHHHHH_qlwzvh.mp3");

const volBtn = $("#volume-btn");
const btn = $(".btn");
const strictBtn = $(".strict-btn");
const startBtn = $(".start-btn");
const statusBox = $(".status-bar");
const panels = $(".panel");
const gameboard = ['green', 'yellow', 'blue', 'red'];
const roundStatus = $(".round-status");



let strict = false;
let sound = true;
//--Volume ON/OFF
$(volBtn).click(function() {
    if (sound) {
        sound = false;
        $(this).toggleClass("fa-volume-mute");
        $(this).toggleClass("fa-volume-up");
        console.log("sound", sound);
        
    }
    else {
        sound = true;
        $(this).toggleClass("fa-volume-mute");
        $(this).toggleClass("fa-volume-up");
        console.log("sound", sound);
    }
});


