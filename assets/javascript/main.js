//--Sound Variables / Button Variables / Variables
const greenBtnSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
const yellowBtnSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
const redBtnSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
const blueBtnSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
const winSound = new Audio("assets/sounds/win.mp3");
const wrongSound = new Audio("assets/sounds/wrong.mp3");


const volBtn = $("#volume-btn");
const btn = $(".btn");
const strictBtn = document.querySelector('.strict-btn');
const startBtn = document.querySelector('.start-btn');
const statusBox = document.querySelector('.status-bar');
const panels = document.getElementsByClassName('panel');
const gameboard = ['green', 'yellow', 'blue', 'red'];
const roundStatus = document.querySelector('.round-status');
const totalRound = 20;
const animationDuration = 500;

let simonMemory, counterRound, thisSequence;
let strict = false;
let sound = true;

const levels = {
  round1: {roundSpeed: 1000, soundSpeed: 0.75, animateSpeed: '0.75s'},
  round5: {roundSpeed: 800, soundSpeed: 1.0, animateSpeed: '0.65s'},
  round10: {roundSpeed: 600,soundSpeed: 1.25, animateSpeed: '0.55s'},
  round15: {roundSpeed: 500,soundSpeed: 1.30, animateSpeed: '0.50s'},
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

function setDifficulty(setLevel) {
    for (let i = 0; i < panels.length; i++) {
    panels[i].style.webkitAnimationDuration = setLevel.animateSpeed;
    panels[i].style.animationDuration = setLevel.animateSpeed;
    }
    roundSpeedDuration = setLevel.roundSpeed;
    playbackSpeed = setLevel.soundSpeed;
};

//--Volume ON/OFF
$(volBtn).click(function() {
    if (sound) {
        sound = false;
        Array.prototype.slice.call(document.querySelectorAll('audio')).forEach(function(audio) {
        audio.muted = true;
        });
        $(this).toggleClass("fa-volume-mute");
        $(this).toggleClass("fa-volume-up");
        //--console.log("sound", sound);
        
    }
    else {
        sound = true;
        Array.prototype.slice.call(document.querySelectorAll('audio')).forEach(function(audio) {
        audio.muted = false;
        });
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

    setDifficulty(levels.round1)
    simonMemory = [];
    counterRound = 1;
    thisSequence = 0;
    roundStatus.innerHTML = 'ROUND ' + counterRound;
    newRound();
    allowClickEvent()
};

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
    lightUp(color);
    playSound(color);
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

//--Animate array sequence
function animate(sequence) { 
    sendStatus('SIMON SAYS...');
    var i = 0;
    var interval = setInterval(function() {
    lightUp(sequence[i]);
    playSound(sequence[i]);
    i++;
    if (i >= sequence.length) {
      clearInterval(interval);
      setTimeout(sendStatus.bind(null, 'YOUR TURN!'), 1000)
    }
  }, roundSpeedDuration);

}
//--Status Bar Switch Statement
function sendStatus(str) {
    statusBox.innerHTML = str
    switch (str) {
    case 'SIMON SAYS...':
      statusBox.classList.add('animated', 'zoomIn');
      window.setTimeout(function() {
        statusBox.classList.remove('animated', 'zoomIn');
      }, 1000);
      break;
    case 'YOUR TURN!':
      statusBox.classList.add('animated', 'flash');
      window.setTimeout(function() {
        statusBox.classList.remove('animated', 'flash');
         }, 1000);
      break;
    case 'YOU WON!':
      playWinSound();
      statusBox.classList.add('animated', 'zoomInRight');
      window.setTimeout(function() {
        statusBox.classList.remove('animated', 'zoomInRight');
        }, 1000);
      break;
  }
};
//--Light Up 
function lightUp(panel) { 
  var thisPanel = document.getElementById(panel);
  thisPanel.classList.add('lit');
  thisPanel.classList.add('animated', 'jello');
  window.setTimeout(function() {
    thisPanel.classList.remove('lit');
    thisPanel.classList.remove('animated', 'jello');
  }, animationDuration);

};


//-- Play Sound
function playSound(word) { 
    const audio = document.querySelector(`audio[data-key="${word}"]`);
    audio.currentTime = 0;
    if (gameboard.includes(word)) {
    audio.playbackRate = playbackSpeed;
  }
  audio.play();
};
//--When Error
function playWrongSound() { 
    const audio = wrongSound;
    audio.currentTime = 0;
    audio.play();
};
//--When Win Sound
function playWinSound() {
    const audio = winSound;
    audio.currentTime = 0;
    audio.play();
};


 

