let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let turnO = false;
const winPatterns = [
    [0, 1, 2],
    [0 , 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        }else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
});

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                document.querySelector("h1").innerHTML = `The winner is ${pos1Val}`;
                boxes.forEach(box => {
                    box.disabled = true;
                });
                [pattern[0], pattern[1], pattern[2]].forEach(index => {
                    boxes[index].classList.add("winner"); // light green highlight
                });
            }
            
        }
    }
    // Check for draw (if no winner and all boxes are filled)
        if ([...boxes].every(box => box.innerText !== "")) {
        document.querySelector("h1").innerText = "It's a Draw!\n Press 'Reset Button' to start again";
        }
};

resetBtn.addEventListener("click", () => {
    window.location.reload();
});