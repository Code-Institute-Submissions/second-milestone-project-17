//--Sound Variables / Button Variables / Variables
const greenBtnSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
const yellowBtnSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
const redBtnSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
const blueBtnSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
const wrongSound = new Audio("http://res.cloudinary.com/thisiswhale/video/upload/v1518937949/142608__autistic-lucario__error_vcwlt0.wav");
const winSound = new Audio("http://res.cloudinary.com/thisiswhale/video/upload/v1518166335/Regular_Show__OOOOOOOOOOOOOOOOOOOOHHHHHHHHH_qlwzvh.mp3");

const volBtn = document.querySelector('volume-btn');
const btn = document.getElementsByClassName('btn');
const strictBtn = document.querySelector('.strict-btn');
const startBtn = document.querySelector('.start-btn');
const statusBox = document.querySelector('.status-bar')
const panels = document.getElementsByClassName('panel');
const gameboard = ['green', 'yellow', 'blue', 'red'];
const roundStatus = document.querySelector('.round-status');


