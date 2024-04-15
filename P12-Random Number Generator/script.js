const randomNumber = Math.floor(Math.random() * 10) + 1;
const result = document.getElementById('result');

const wonTheGame = function () {
    result.innerText = `You Wan The Game :) \n Number of guesses : ${noOfGuesses} \n Total Scrore : ${totalScore}`;
}

const lostTheGame = function () {
    result.innerText = `You Loss The Game :( \n Your total score is ${totalScore} `;
}



let submitBtn = document.getElementById('submitBtn');

let noOfGuesses = 0
let score = 10
let totalScore = '';

submitBtn.addEventListener('click', function () {
    const guess = parseInt(document.getElementById('guessInput').value);
    noOfGuesses++
    totalScore = score - noOfGuesses;
    if (totalScore < 0) {
        lostTheGame()
    }
    for (let index = 1; index <= 10; index++) {

        
         if (randomNumber === guess) {
            wonTheGame()

        }
        else if (randomNumber > guess ) {
            result.textContent = `Enter Larger Number`
        }
        
        else if (randomNumber < guess) {
            result.textContent = `Enter smaller Number`
        }
        else if(index === 10){
            lostTheGame()
        }
        else {
            result.textContent = `Game Over`
        }

    }
})