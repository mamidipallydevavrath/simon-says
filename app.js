let gameSeq = [];
let playerSeq = [];

let btnColors = ["red", "blue", "green", "yellow"];

let started =  false;
let level = 0;

let h2 = document.querySelector("h2");

// Game Start
document.addEventListener("keypress", () => {
    if(started === false){
        console.log("Game Started");
        started = true;

        levelUp();
    }
});

// Button Falsh
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

//user Falsh
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 250);
}

// Game level Up
function levelUp(){
    playerSeq = [];
    level++;

    h2.innerText = `level ${level}`;

    let randomIdx = Math.floor(Math.random() * 3);
    let randomColor = btnColors[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);


    gameSeq.push(randomColor);
    // console.log(gameSeq);
    btnFlash(randomBtn);
}

// Check User Input
function checkInput(idx){
    if(playerSeq[idx] === gameSeq[idx]){
        if(playerSeq.length === gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your score is <b> ${level} </b> <br> Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "rgb(215, 194, 194)";
        }, 150);

        resetGame();
    }
}

// Button Click
function btnClick(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    playerSeq.push(userColor);

    checkInput(playerSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnClick);
}

// Reset Game
function resetGame(){
    started = false;
    playerSeq = [];
    gameSeq = [];
    level = 0;
} 