const chessBoard = document.querySelector('.chessboard')


start_chessArray.forEach((element, i) => {
    // console.log(element.id)
    const box = document.createElement('div')
    box.setAttribute('id', element.id)
    box.classList.add('box')
    // box.setAttribute('onClick', selectBox)

    if(element.row % 2 !== 0){
        if(i % 2 === 0){
            box.classList.add('light-blue')
        }else{
            box.classList.add('dark-blue')
        }
    }else{
        if(i % 2 !== 0){
            box.classList.add('light-blue')
        }else{
            box.classList.add('dark-blue')
        }
    }
    box.innerHTML = element.player ? playerIcon[element.player + element.colour] : '';

    chessBoard.append(box)
})


document.querySelectorAll('.box').forEach((item) => {
    item.addEventListener("click", () => {
        const currentPlayer = start_chessArray.find((i) => i.id === item.id)
        if(currentPlayer.player){
            getPossibleMoves(currentPlayer)
        } 
    })
})


let possibleArray = []


function getPossibleMoves(piece){
    possibleArray = [];
    const pieceName = piece.player;
    switch(pieceName){

        case 'pawn' :
            pawnMove(piece)
        break;

        case 'rook' :
            rookMove(piece)
        break;

        case 'knight' :
            knightMove(piece)
        break;

        case 'bishop' :
            bishopMove(piece)
        break;

        case 'queen' :
            queenMove(piece)
        break;
        
        case 'king' :
            kingMove(piece)
        break;
    }
    console.log(possibleArray)

    // possibleArray.forEach((element) => {
    //     document.querySelectorAll('.box').find((i) => i.row === element.r && i.column === element.c).classList.add('colour-change')
    // })

 

    // document.querySelectorAll('.box').forEach((element) => {
    //     const p = element.row
    //     if(possibleArray.includes(`${element.row}`)){
    //         if(possibleArray.includes(`${element.column}`)){
    //             console.log('hi')
    //         }
    //     }
    // })
}

//----------------------------------------------------------------------------------------------------------------------------
function pawnMove(piece){
    if(piece.colour === 'white'){
        possibleArray.push({r: piece.row - 1, c : piece.column})
    }else{
        possibleArray.push({r: piece.row - 1, c : piece.column})
    }
}

//----------------------------------------------------------------------------------------------------------------------------

function rookMove(piece){
    const rookMoves = [];
    for(let i = 1; i <=8 ; i++ ){
        rookMoves.push({r : piece.row, c : i})
        rookMoves.push({r : i, c : piece.column})
    }
    rookMoves.forEach((item) => {
        if(item.r != piece.row || item.c != piece.column){
            possibleArray.push(item)
        }
    })
}

//----------------------------------------------------------------------------------------------------------------------------

function knightMove(piece){
    let i = piece.row;
    let j = piece.column;
    const knightMoves = [
        {r: i-2, c : j+1},
        {r: i-2, c : j-1},
        {r: i-1, c : j+2},
        {r: i-1, c : j-2},
        {r: i+1, c : j+2},
        {r: i+1, c : j-2},
        {r: i+2, c : j+1},
        {r: i+2, c : j-1},
    ];

    knightMoves.forEach((item) => {
        if(item.r >= 1 && item.r <= 8 && item.c >=1 && item.c <= 8){
            possibleArray.push(item)
        }
    })
}

//----------------------------------------------------------------------------------------------------------------------------

function bishopMove(piece){
    let bishopMoves = [];
    let i = piece.row - 1;
    let j = piece.column - 1;
    let k = piece.column + 1;
    while(i >= 1){
        if(j >= 1){
            bishopMoves.push({r: i, c : j})
            j--;
        }
        if(k <=8){
            bishopMoves.push({r : i, c : k})
            k++;
        }
        i--;
    }

    i = piece.row + 1;
    j = piece.column - 1;
    k = piece.column + 1;
    while(i <= 8){
        if(j >= 1){
            bishopMoves.push({r: i, c : j})
            j--;
        }
        if(k <= 8){
            bishopMoves.push({r : i, c : k})
            k++;
        }   
        i++;
    }
    possibleArray = bishopMoves;
}

//----------------------------------------------------------------------------------------------------------------------------

function queenMove(piece){
    let queenMoves = [];

    let i = piece.row - 1;
    let j = piece.column - 1;
    let k = piece.column + 1;
    // loop for horizontal rows
    for(let l = 1; l <= 8; l++){
        if(l != piece.column){
            queenMoves.push({r : piece.row, c : l})
        }
    }
    // loop for upper part
    while(i >= 1){
    queenMoves.push({r : i, c : piece.column})
        if(j >= 1){
            queenMoves.push({r: i, c : j})
            j--;
        }
        if(k <=8){
            queenMoves.push({r : i, c : k})
            k++;
        }
        i--;
    }

    i = piece.row + 1;
    j = piece.column - 1;
    k = piece.column + 1;
    // loop for lower part
    while(i <= 8){
        queenMoves.push({r : i, c : piece.column})
        if(j >= 1){
            queenMoves.push({r: i, c : j})
            j--;
        }
        if(k <= 8){
            queenMoves.push({r : i, c : k})
            k++;
        }   
        i++;
    }
    possibleArray = queenMoves;
}

//----------------------------------------------------------------------------------------------------------------------------

function kingMove(piece){
    let i = piece.row;
    let j = piece.column;
    const kingMoves = [
        {r: i, c : j-1},
        {r: i, c : j+1},
        {r: i+1, c : j},
        {r: i-1, c : j},
        {r: i-1, c : j-1},
        {r: i+1, c : j+1},
        {r: i-1, c : j+1},
        {r: i+1, c : j-1},
    ];

    kingMoves.forEach((item) => {
        if(item.r >= 1 && item.r <= 8 && item.c >=1 && item.c <= 8){
            possibleArray.push(item)
        }
    })
}