let rowFirst;

let piece1 = `<div class="puzzlepiece" id="piece1"></div>`,
    piece2 = `<div class="puzzlepiece" id="piece2"></div>`,
    piece3 = `<div class="puzzlepiece" id="piece3"></div>`,
    piece4 = `<div class="puzzlepiece" id="piece4"></div>`,
    piece5 = `<div class="puzzlepiece" id="piece5"></div>`,
    piece6 = `<div class="puzzlepiece" id="piece6"></div>`,
    piece7 = `<div class="puzzlepiece" id="piece7"></div>`,
    piece8 = `<div class="puzzlepiece" id="piece8"></div>`,
    piece9 = `<div class="puzzlepiece" id="piece9"></div>`;


let listOfPieces = [piece1, piece2, piece3, piece4, piece5, piece6, piece7, piece8, piece9]
rowFirst = document.querySelector(".puzzle");
shuffle(listOfPieces);


for (let piece of listOfPieces){
    rowFirst.innerHTML += piece;
}


function rowOneLeft() {
    rowFirst = document.getElementsByClassName('puzzlepiece')
    let v0 = rowFirst[0].id,
        v1 = rowFirst[1].id,
        v2 = rowFirst[2].id;
    rowFirst[0].id = v1;
    rowFirst[1].id = v2;
    rowFirst[2].id = v0;
}


function rowOneRight() {
    rowFirst = document.getElementsByClassName('puzzlepiece')
    let v0 = rowFirst[0].id,
        v1 = rowFirst[1].id,
        v2 = rowFirst[2].id;
    rowFirst[0].id = v2;
    rowFirst[1].id = v0;
    rowFirst[2].id = v1;
}


function multiDirections() {


}

function rowSecondRight() {
    rowFirst = document.getElementsByClassName('puzzlepiece')
    let v0 = rowFirst[3].id,
        v1 = rowFirst[4].id,
        v2 = rowFirst[5].id;
    rowFirst[3].id = v2;
    rowFirst[4].id = v0;
    rowFirst[5].id = v1;
}




function shuffle(arr) {
    var i,
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



// function gen_pieces(number) {
//     let rowFirst = document.querySelector(".puzzle");
//     let tmp = []
//     for (let i = 0; i < number; ++i) {
//         let div = document.createElement("div");
//         div.setAttribute("id",`piece${i+1}`);
//         tmp.push(div);
//     }
//     tmp = shuffle(tmp);
//     for(let element of tmp){
//         rowFirst.appendChild(element);
//     }
// }

theButton = document.querySelector(".button");
theButton.addEventListener("click",clickHandler);

function clickHandler(event){
    rowFirst = document.querySelector(".puzzle");
    for (let i; i<3; i++){
    event.innerHTML.remove();
    }
}
