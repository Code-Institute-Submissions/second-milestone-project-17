//--Sound Variables / Button Variables / Variables
const greenBtnSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
const yellowBtnSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
const redBtnSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
const blueBtnSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
const winSound = new Audio("assets/sounds/win.mp3");
const wrongSound = new Audio("assets/sounds/wrong.mp3");


const volBtn = $("#volume-btn");
const btn = $(".btn");
const strictBtn = $(".strict-btn");
const startBtn = $(".start-btn");
const statusBox = $(".status-bar");
const panels = $(".panel");
const gameboard = ['green', 'yellow', 'blue', 'red'];
const roundStatus = $(".round-status");
const totalRound = 20;
const animationDuration = 500;

let simonMemory = [];
let counterRound = 1;
let thisSequence = 0;
let strict = false;
let sound = true;
const levels = {
  round1: {roundSpeed: 950, soundSpeed: 0.75, animateSpeed: '0.75s'},
  round5: {roundSpeed: 750, soundSpeed: 1.0, animateSpeed: '0.65s'},
  round10: {roundSpeed: 550,soundSpeed: 1.25, animateSpeed: '0.55s'},
  round15: {roundSpeed: 450,soundSpeed: 1.30, animateSpeed: '0.50s'},
};
//--Mouseover and mouseout function on buttons which are pulsing
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('mouseover', function() {
    btn[i].classList.add('animated', 'infinite', 'pulse')
    //--console.log("mouseover");
  });

    btn[i].addEventListener('mouseout', function() {
    btn[i].classList.remove('animated', 'infinite', 'pulse')
    //--console.log("mouseout");
  });
}
   

//--Volume ON/OFF
$(volBtn).click(function() {
    if (sound) {
        sound = false;
        $(this).toggleClass("fa-volume-mute");
        $(this).toggleClass("fa-volume-up");
        //--console.log("sound", sound);
        
    }
    else {
        sound = true;
        $(this).toggleClass("fa-volume-mute");
        $(this).toggleClass("fa-volume-up");
        //--console.log("sound", sound);
    }
});

 
//--Start game 
function startGame() {
    $(".start-btn").addClass('animated', 'heartBeat');
    window.setTimeout(function() {
    $(".start-btn").removeClass('animated', 'heartBeat');
  }, animationDuration);



//--Strict mode
  function strictMode() {
    if (strict) {
    strict = false;
     $(".strict-btn").addClass('animated', 'rubberBand'); 
     $(".strict-btn").removeClass('on');
    window.setTimeout(function() {
     $(".strict-btn").removeClass('animated', 'rubberBand');
    }, 1000);

  } else {
    strict = true;
    $(".strict-btn").addClass('on', 'animated', 'rubberBand');
    window.setTimeout(function() {
      $(".strict-btn").removeClass('animated', 'rubberBand');
    }, 1000);
  }
};
//--Colour panels green, yellow, blue, green by id
function getPanel() {
    const color = this.getAttribute('id');
    playSound(color);
    lightUp(color);
    checkPattern(color);
}
//--Allow and Block Click
function allowClickEvent() {
    for (let i = 0; i < panels.length; i++) {
    panels[i].addEventListener('click', getPanel);
  }
};

function blockClickEvent() {
    for (let i = 0; i < panels.length; i++) {
    panels[i].removeEventListener('click', getPanel);
  }
};
//--New Round 
function newRound() {
    const randomNum = Math.floor(Math.random() * 3);
    simonMemory.push(gameboard[randomNum]);
    animate(simonMemory);
};


 

