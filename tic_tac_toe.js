let boxs = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turn0 =true; //playerX playerO

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }else{
            box.innerText = "X"
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const resetgame = () => {
    turn0 = true ;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disabledBtn = () => {
    for(let box of boxs){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxs){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBtn();
}

const checkWinner = () => {
    for (patten of winPatterns){
        let pos1Val = boxs[patten[0]].innerText;
        let pos2Val = boxs[patten[1]].innerText;
        let pos3Val = boxs[patten[2]].innerText;
        
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }

    }
}

newGameBtn.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame)



