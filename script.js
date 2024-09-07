const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const decision = document.getElementById('decision-prompt');
const playAgainBtn = document.getElementById('play-again-btn');

function disableChoiceBtns() {
    const btnsArr = [rockBtn, paperBtn, scissorsBtn];
    btnsArr.map(n => {
        n.disabled = true;
        n.style.opacity = 0.3;
    })
}

function selectionGraphic(yourChoice, computerChoice) {
    const btns = {
        rock: rockBtn,
        paper: paperBtn,
        scissors: scissorsBtn,
    };
    
    const yourColor = 'rgb(44, 209, 41)';
    const computerColor = 'rgb(41, 142, 209)';
    if (yourChoice === computerChoice) {
        btns[
            yourChoice
        ].style.background = `linear-gradient(to right, ${yourColor} 50%, ${computerColor} 50%)`;
    } else {
        btns[yourChoice].style.background = yourColor;
        btns[computerChoice].style.background = computerColor;
    }
}

function choiceBtn(choice) {
    const choices = ['rock', 'paper', 'scissors'];
    let computersChoice = choices[Math.floor(Math.random() * choices.length)];
    selectionGraphic(choice, computersChoice);
    decision.style.display = 'block';
    if (
        (choice === 'rock' && computersChoice === 'scissors') ||
        (choice === 'paper' && computersChoice === 'rock') ||
        (choice === 'scissors' && computersChoice === 'paper')
    ) {
        decision.style.color = '#1b9612';
        decision.textContent = 'You Won!';
    } else if (choice === computersChoice) {
        decision.style.color = 'rgba(0, 0, 0, 0.5)';
        decision.textContent = "It's a Draw!";
    } else {
        decision.style.color = '#961212';
        decision.textContent = 'You Lost!';
    }
    playAgainBtn.style.display = 'block';
    disableChoiceBtns();
}

function playAgainBtnFunc() {
    const btnsArr = [rockBtn, paperBtn, scissorsBtn];
    btnsArr.map(n => {
        n.style.background = 'none';
        n.disabled = false;
        n.style.opacity = 1;
    })
    decision.style.display = 'none';
    playAgainBtn.style.display = 'none';
}