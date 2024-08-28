let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newbtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turn0 = true;

const winpatterns = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let details=()=>{
    let player1 = prompt("player1 Name");
    let player2 = prompt("player2 Name");
};

const resetgame = () =>{
    turn0 = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
    details();

}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText ="X";
            turn0 = true;
        }
        box.disabled = true;

        checkwinner();
    });

    const disableBoxes = () =>{
        for(let box of boxes){
            box.disabled = true;
        }
    };

    enableBoxes = () =>{
        for(let box of boxes){
            box.disabled = false;
            box.innerText = "";
        }
    };


    const showwinner = (winner) => {
        msg.innerText = `Congratultion, Winner is ${winner}`;
        msgcontainer.classList.remove("hide");
        disableBoxes();

    };



    const checkwinner=()=>{
        for(let pattern of winpatterns){
            let pos1 = boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText;
            let pos3 = boxes[pattern[2]].innerText;

            if(pos1 !="" && pos2 !="" && pos3 !="")
            {
                if(pos1 === pos2 && pos2 === pos3){
                    showwinner(pos1);
                }
                      
            }
        }
    }
});

newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
