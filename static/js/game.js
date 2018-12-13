function shuffle(arr) {
    let i,
        j,
        temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

function gen_pieces(number) {
    let rowFirst = document.querySelector(".puzzle");
    let tmp = [];
    for (let i = 0; i < number; ++i) {
        let div = document.createElement("div");
        div.setAttribute("id",`piece${i+1}`);
        tmp.push(div);
    }
    tmp = shuffle(tmp);
    for(let element of tmp){
        rowFirst.appendChild(element);
    }
}

gen_pieces(9);


let buttons = document.querySelector(".buttons");
let arrows = buttons.querySelectorAll("input");
for(let i = 0; i < arrows.length; i++) {
    let arrow = arrows[i];
    arrow.addEventListener('click', function() {
        let currentBoard = document.querySelector(".puzzle");
        let currentBoardList = currentBoard.querySelectorAll("div");
        if (this.id === "arrow_bottom_right") {
            let abrList = [currentBoardList[8], currentBoardList[5], currentBoardList[2]];
            abrList.shift();
            abrList.push(currentBoardList[8]);
            currentBoardList = [currentBoardList[0], currentBoardList[1], currentBoardList[8], currentBoardList[3], currentBoardList[4], currentBoardList[2], currentBoardList[6], currentBoardList[7], currentBoardList[5]];
        }
        else if (this.id === "arrow_bottom_middle") {
            let abmList = [currentBoardList[7], currentBoardList[4], currentBoardList[1]];
            abmList.shift();
            abmList.push(currentBoardList[7]);
            currentBoardList = [currentBoardList[0], currentBoardList[7], currentBoardList[2], currentBoardList[3], currentBoardList[1], currentBoardList[5], currentBoardList[6], currentBoardList[4], currentBoardList[8]];
        }
        else if (this.id === "arrow_bottom_left") {
            let abmList = [currentBoardList[6], currentBoardList[3], currentBoardList[0]];
            abmList.shift();
            abmList.push(currentBoardList[6]);
            currentBoardList = [currentBoardList[6], currentBoardList[1], currentBoardList[2], currentBoardList[0], currentBoardList[4], currentBoardList[5], currentBoardList[3], currentBoardList[7], currentBoardList[8]];
        }
        else if (this.id === "arrow_right_top") {
            let abmList = [currentBoardList[2], currentBoardList[1], currentBoardList[0]];
            abmList.shift();
            abmList.push(currentBoardList[2]);
            currentBoardList = [currentBoardList[2], currentBoardList[0], currentBoardList[1], currentBoardList[3], currentBoardList[4], currentBoardList[5], currentBoardList[6], currentBoardList[7], currentBoardList[8]];
        }
        else if (this.id === "arrow_right_middle") {
            let abmList = [currentBoardList[5], currentBoardList[4], currentBoardList[3]];
            abmList.shift();
            abmList.push(currentBoardList[5]);
            currentBoardList = [currentBoardList[0], currentBoardList[1], currentBoardList[2], currentBoardList[5], currentBoardList[3], currentBoardList[4], currentBoardList[6], currentBoardList[7], currentBoardList[8]];
        }
        else if (this.id === "arrow_right_bottom") {
            let abmList = [currentBoardList[8], currentBoardList[7], currentBoardList[6]];
            abmList.shift();
            abmList.push(currentBoardList[8]);
            currentBoardList = [currentBoardList[0], currentBoardList[1], currentBoardList[2], currentBoardList[3], currentBoardList[4], currentBoardList[5], currentBoardList[8], currentBoardList[6], currentBoardList[7]];
        }
        else if (this.id === "arrow_left_top") {
            let abmList = [currentBoardList[0], currentBoardList[1], currentBoardList[2]];
            abmList.shift();
            abmList.push(currentBoardList[0]);
            currentBoardList = [currentBoardList[1], currentBoardList[2], currentBoardList[0], currentBoardList[3], currentBoardList[4], currentBoardList[5], currentBoardList[6], currentBoardList[7], currentBoardList[8]];
        }
        else if (this.id === "arrow_left_middle") {
            let abmList = [currentBoardList[3], currentBoardList[4], currentBoardList[5]];
            abmList.shift();
            abmList.push(currentBoardList[3]);
            currentBoardList = [currentBoardList[0], currentBoardList[1], currentBoardList[2], currentBoardList[4], currentBoardList[5], currentBoardList[3], currentBoardList[6], currentBoardList[7], currentBoardList[8]];
        }
        else if (this.id === "arrow_left_bottom") {
            let abmList = [currentBoardList[6], currentBoardList[7], currentBoardList[8]];
            abmList.shift();
            abmList.push(currentBoardList[6]);
            currentBoardList = [currentBoardList[0], currentBoardList[1], currentBoardList[2], currentBoardList[3], currentBoardList[4], currentBoardList[5], currentBoardList[7], currentBoardList[8], currentBoardList[6]];
        }
        else if (this.id === "arrow_top_left") {
            let abmList = [currentBoardList[0], currentBoardList[3], currentBoardList[6]];
            abmList.shift();
            abmList.push(currentBoardList[0]);
            currentBoardList = [currentBoardList[3], currentBoardList[1], currentBoardList[2], currentBoardList[6], currentBoardList[4], currentBoardList[5], currentBoardList[0], currentBoardList[7], currentBoardList[8]];
        }
        else if (this.id === "arrow_top_middle") {
            let abmList = [currentBoardList[1], currentBoardList[4], currentBoardList[7]];
            abmList.shift();
            abmList.push(currentBoardList[1]);
            currentBoardList = [currentBoardList[0], currentBoardList[4], currentBoardList[2], currentBoardList[3], currentBoardList[7], currentBoardList[5], currentBoardList[6], currentBoardList[1], currentBoardList[8]];
        }
        else if (this.id === "arrow_top_right") {
            let abmList = [currentBoardList[2], currentBoardList[5], currentBoardList[8]];
            abmList.shift();
            abmList.push(currentBoardList[2]);
            currentBoardList = [currentBoardList[0], currentBoardList[1], currentBoardList[5], currentBoardList[3], currentBoardList[4], currentBoardList[8], currentBoardList[6], currentBoardList[7], currentBoardList[2]];
        }
        let newBoard = document.querySelector(".puzzle");
        for (let element of currentBoardList){
            newBoard.appendChild(element);
        }
    });
}

