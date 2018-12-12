let rowFirst;

let piece1 = `<div id="piece1"></div>`,
    piece2 = `<div id="piece2"></div>`,
    piece3 = `<div id="piece3"></div>`,
    piece4 = `<div id="piece4"></div>`,
    piece5 = `<div id="piece5"></div>`,
    piece6 = `<div id="piece6"></div>`,
    piece7 = `<div id="piece7"></div>`,
    piece8 = `<div id="piece8"></div>`,
    piece9 = `<div id="piece9"></div>`;


let listOfPieces = [piece1, piece2, piece3, piece4, piece5, piece6, piece7, piece8, piece9]
console.log('1');
rowFirst = document.querySelector(".puzzle");
shuffle(listOfPieces);

for (let piece of listOfPieces){
    rowFirst.innerHTML += piece;
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
//
//
//
//
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
//
// }

theButton = document.querySelector(".button");
theButton.addEventListener("click",clickHandler);

function clickHandler(event){
    rowFirst = document.querySelector(".puzzle");
    for (let i; i<3; i++){
    event.innerHTML.remove();
    }
}
