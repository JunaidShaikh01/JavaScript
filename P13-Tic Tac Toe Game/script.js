console.log("Welcome to Tic Tac Toe");
let audioTurn = new Audio("sound.mp3")
let turn = "X"
let gameover = false

//function to change the turn
const chnageTurn = () => {

    return turn === "X" ? "0" : "X"
}

//function to check for a win
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won"
            gameover = true
            document.querySelector('.line').style.width ="20vw" 
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}

//Game Logic 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = chnageTurn();
            audioTurn.play();
            checkWin();
            if (!gameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

//Add onclick llistener to reset button
reset.addEventListener('click', function () {
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = "";
    })
    turn = "X";
    gameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.line').style.width ="0vw" 
})



