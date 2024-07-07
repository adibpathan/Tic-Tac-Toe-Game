let btns = document.querySelectorAll('.btn')
let resetBtn = document.querySelector('#reset-btn')
let newGameBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let player1 = new Audio("player1.wav")
let player2 = new Audio("player2.wav")
let winner = new Audio("winner.mp3")


let turn0 = true;

const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7], 
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const resetGame = ()=>{
    turn0 = true;
    enableBtns()
    msgContainer.classList.add("hide")
}

btns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        if(turn0){
            btn.innerText = "X";
            turn0 = false;
            player1.play()
        }else{
            btn.innerText = "0"
            turn0 = true;
            player2.play()
            btn.style.color = "#fcf47c"

        }
        btn.disabled = true
        checkWinner()
    })
})

const disableBtns = ()=>{
    for(let btn of btns){
        btn.disabled = true;
    }
}

const enableBtns = ()=>{
    for(let btn of btns){
        btn.disabled = false;
        btn.innerText = ""
    }
}

const showWinner = (winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide")
    disableBtns()
}

const checkWinner = ()=>{
    for(let win of wins){
        let pos1Val = btns[win[0]].innerText;
        let pos2Val = btns[win[1]].innerText;
        let pos3Val = btns[win[2]].innerText;

        if(pos1Val !== "" && pos2Val !== "" && pos3Val !== ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                showWinner(pos1Val)
                winner.play()
            }
        }
    }
}

newGameBtn.addEventListener('click', resetGame)
resetBtn.addEventListener('click', resetGame)