//---------------------------Sound Variables / Button Variables / Variables
const winSound = new Audio("assets/sounds/win.mp3");
const wrongSound = new Audio("assets/sounds/wrong.mp3");

const volBtn = $('#volume-btn');
const btn = $('.btn');
const strictBtn = document.querySelector('.strict-btn');
const startBtn = document.querySelector('.start-btn');
const statusBox = document.querySelector('.status-bar');
const panels = document.getElementsByClassName('panel');
const gameboard = ['green', 'yellow', 'blue', 'red'];
const roundStatus = document.querySelector('.round-status');
const totalRound = 20;
const animationDuration = 500;
//----------------------------simonMemory is [], counterRound is 1, thisSequence is 0/ Strict is false on default / Sound is on
let simonMemory, counterRound, thisSequence;
let strict = false;
let sound = true;
//----------------------------level difficulty round, sound and animation speed
const levels = {
  round1: {roundSpeed: 1000, soundSpeed: 0.75},
  round5: {roundSpeed: 800, soundSpeed: 1.0},
  round10: {roundSpeed: 600, soundSpeed: 1.25},
  round15: {roundSpeed: 565, soundSpeed: 1.30},
};
//----------------------------Mouseover and mouseout function on buttons which are pulsing
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('mouseover', function() {
    btn[i].classList.add('animated', 'infinite', 'pulse')
  });

    btn[i].addEventListener('mouseout', function() {
    btn[i].classList.remove('animated', 'infinite', 'pulse')
  });
}
//-----------------------------levels adjusted 
function setDifficulty(setLevel) {
    for (let i = 0; i < panels.length; i++) {
    panels[i].style.webkitAnimationDuration = setLevel.animateSpeed;
    panels[i].style.animationDuration = setLevel.animateSpeed;
    }
    roundSpeedDuration = setLevel.roundSpeed;
    playbackSpeed = setLevel.soundSpeed;
};

//------------------------------Volume ON/OFF button icon and colour changes
$(volBtn).click(function() {
    if (sound) {
        sound = false;
        Array.prototype.slice.call(document.querySelectorAll('audio')).forEach(function(audio) {
        audio.muted = true;
        });
        wrongSound.muted = true;
        winSound.muted = true;
        $(this).toggleClass("fa-volume-mute");
        $(this).toggleClass("fa-volume-up");
        $(this).css("color", "red")
        console.log("sound", sound);
        
    }
    else {
        sound = true;
        Array.prototype.slice.call(document.querySelectorAll('audio')).forEach(function(audio) {
        audio.muted = false;
        });
        wrongSound.muted = false;
        winSound.muted = false;
        $(this).toggleClass("fa-volume-mute");
        $(this).toggleClass("fa-volume-up");
        $(this).css("color", "#63e38a")
        console.log("sound", sound);
    }
});



//------------------------------Start game / button animated
function startGame() {
        startBtn.classList.add('animated', 'rubberBand');
        startBtn.classList.add('on');
        window.setTimeout(function() {
        startBtn.classList.remove('animated', 'rubberBandt');
        startBtn.classList.remove('on');
  },    animationDuration);
        console.log("Game started")

        setDifficulty(levels.round1)
        simonMemory = [];
        counterRound = 1;
        thisSequence = 0;
        roundStatus.innerHTML = 'ROUND ' + counterRound;
        newRound();
        allowClickEvent()
};

//-------------------------------Strict mode / button animated
  function strictMode() {
    if (strict) {
        strict = false;
        strictBtn.classList.add('animated', 'rubberBand'); 
        strictBtn.classList.remove('on');
        window.setTimeout(function() {
        strictBtn.classList.remove('animated', 'rubberBand');
    },  1000);
        console.log("Strict", strict)
  }     else {
        strict = true;
        strictBtn.classList.add('on', 'animated', 'rubberBand');
        window.setTimeout(function() {
        strictBtn.classList.remove('animated', 'rubberBand');
        }, 1000);
        console.log("Strict", strict)
  }
};
//--------------------------------Colour panels green, yellow, blue, green by id
function getPanel() {
        const color = this.getAttribute('id');
        lightUp(color);
        playSound(color);
        checkPattern(color);
}
//---------------------------------Allow and Block Click
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

//---------------------------------New Round / picks a colour from 4
function newRound() {
        const randomNum = Math.floor(Math.random() * 4);
        simonMemory.push(gameboard[randomNum]);
        animate(simonMemory);
};

//-------------------------------Animate array sequence
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
//-------------------------------Status Bar Switch Statement
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
//------------------------------Light Up and animate colour panels
function lightUp(panel) { 
        var thisPanel = document.getElementById(panel);
        thisPanel.classList.add('lit');
        thisPanel.classList.add('animated', 'jello');
        window.setTimeout(function() {
        thisPanel.classList.remove('lit');
        thisPanel.classList.remove('animated', 'jello');
  }, animationDuration);

};


//-------------------------------- Colour Panel sound
function playSound(word) { 
        const audio = document.querySelector(`audio[data-key="${word}"]`);
        audio.currentTime = 0;
        if (gameboard.includes(word)) {
        audio.playbackRate = playbackSpeed;
  }
    audio.play();
};
//----------------------------When Error Sound
function playWrongSound() { 
        const audio = wrongSound;
        audio.currentTime = 0;
        audio.play();
};
//-------------------------------------When Win Sound
function playWinSound() {
        const audio = winSound;
        audio.currentTime = 0;
        audio.play();
};
//------------------------------Levels breakpoints 5/10/15
function checkRound(thisRound) {
        if (thisRound == 5) {
        setDifficulty(levels.round5)

    }   else if (thisRound == 10) {
    setDifficulty(levels.round10)

    }   else if (thisRound == 15) {
        setDifficulty(levels.round15)
    }
        roundStatus.innerHTML = 'ROUND ' + counterRound; //----------Round status 1-20
};
//--------------------------Animate Round Status
function animateRound(correct) {
        if (correct) { 
        roundStatus.classList.add('correct', 'animated', 'wobble');
        window.setTimeout(function() {
        roundStatus.classList.remove('correct', 'animated', 'wobble');
    },  animationDuration);
    }   else if (!correct) { 
        playWrongSound();
        roundStatus.classList.add('wrong', 'animated', 'shake');
        window.setTimeout(function() {
        roundStatus.classList.remove('wrong', 'animated', 'shake');
    },  animationDuration);  
    }   blockClickEvent();
}; 
//------------------------------------ Check Pattern if statement
function checkPattern(thisPanel) {
        let correct = true;
        if (simonMemory[thisSequence] == thisPanel) {
        if ((thisSequence + 1) == simonMemory.length) {
        if (counterRound == 20) {
        setTimeout(sendStatus.bind(null, 'YOU WON!'), 1000);
    }   else {
        thisSequence = 0;
        counterRound++;
        checkRound(counterRound);
        animateRound(correct);
        setTimeout(newRound, 1000);
    }
    }   else {
        thisSequence++;
    }
    }   else if (strict == true) { 
        correct = false;
        animateRound(correct);
        setTimeout(startGame, 1000);
    }   else {
        correct = false;
        animateRound(correct);
        thisSequence = 0;
        setTimeout(animate.bind(null, simonMemory), 1000);
  }
    allowClickEvent();
};



    







