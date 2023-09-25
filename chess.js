const chessBoard = document.querySelector('.chessboard')

const start_chessArray = [
    {id : 'a1', row : 1, column : 1, player : 'rook', colour : 'black'},
    {id : 'b1', row : 1, column : 2, player : 'knight', colour : 'black'},
    {id : 'c1', row : 1, column : 3, player : 'bishop', colour : 'black'},
    {id : 'd1', row : 1, column : 4, player : 'queen', colour : 'black'},
    {id : 'e1', row : 1, column : 5, player : 'king', colour : 'black'},
    {id : 'f1', row : 1, column : 6, player : 'bishop', colour : 'black'},
    {id : 'g1', row : 1, column : 7, player : 'knight', colour : 'black'},
    {id : 'h1', row : 1, column : 8, player : 'rook', colour : 'black'},

    {id : 'a2', row : 2, column : 1, player : 'pawn', colour : 'black'},
    {id : 'b2', row : 2, column : 2, player : 'pawn', colour : 'black'},
    {id : 'c2', row : 2, column : 3, player : 'pawn', colour : 'black'},
    {id : 'd2', row : 2, column : 4, player : 'pawn', colour : 'black'},
    {id : 'e2', row : 2, column : 5, player : 'pawn', colour : 'black'},
    {id : 'f2', row : 2, column : 6, player : 'pawn', colour : 'black'},
    {id : 'g2', row : 2, column : 7, player : 'pawn', colour : 'black'},
    {id : 'h2', row : 2, column : 8, player : 'pawn', colour : 'black'},

    {id : 'a3', row : 3, column : 1}, 
    {id : 'b3', row : 3, column : 2}, 
    {id : 'c3', row : 3, column : 3}, 
    {id : 'd3', row : 3, column : 4}, 
    {id : 'e3', row : 3, column : 5}, 
    {id : 'f3', row : 3, column : 6}, 
    {id : 'g3', row : 3, column : 7}, 
    {id : 'h3', row : 3, column : 8},

    {id : 'a4', row : 4, column : 1}, 
    {id : 'b4', row : 4, column : 2}, 
    {id : 'c4', row : 4, column : 3}, 
    {id : 'd4', row : 4, column : 4}, 
    {id : 'e4', row : 4, column : 5}, 
    {id : 'f4', row : 4, column : 6}, 
    {id : 'g4', row : 4, column : 7}, 
    {id : 'h4', row : 4, column : 8},
    
    {id : 'a5', row : 5, column : 1}, 
    {id : 'b5', row : 5, column : 2}, 
    {id : 'c5', row : 5, column : 3}, 
    {id : 'd5', row : 5, column : 4}, 
    {id : 'e5', row : 5, column : 5}, 
    {id : 'f5', row : 5, column : 6}, 
    {id : 'g5', row : 5, column : 7}, 
    {id : 'h5', row : 5, column : 8},

    {id : 'a6', row : 6, column : 1},
    {id : 'b6', row : 6, column : 2}, 
    {id : 'c6', row : 6, column : 3}, 
    {id : 'd6', row : 6, column : 4}, 
    {id : 'e6', row : 6, column : 5}, 
    {id : 'f6', row : 6, column : 6}, 
    {id : 'g6', row : 6, column : 7}, 
    {id : 'h6', row : 6, column : 8},
    
    {id : 'a7', row : 7, column : 1, player : 'pawn', colour : 'white'},
    {id : 'b7', row : 7, column : 2, player : 'pawn', colour : 'white'},
    {id : 'c7', row : 7, column : 3, player : 'pawn', colour : 'white'},
    {id : 'd7', row : 7, column : 4, player : 'pawn', colour : 'white'},
    {id : 'e7', row : 7, column : 5, player : 'pawn', colour : 'white'},
    {id : 'f7', row : 7, column : 6, player : 'pawn', colour : 'white'},
    {id : 'g7', row : 7, column : 7, player : 'pawn', colour : 'white'},
    {id : 'h7', row : 7, column : 8, player : 'pawn', colour : 'white'},

    {id : 'a8', row : 8, column : 1, player : 'rook', colour : 'white'},
    {id : 'b8', row : 8, column : 2, player : 'knight', colour : 'white'},
    {id : 'c8', row : 8, column : 3, player : 'bishop', colour : 'white'},
    {id : 'd8', row : 8, column : 4, player : 'queen', colour : 'white'},
    {id : 'e8', row : 8, column : 5, player : 'king', colour : 'white'},
    {id : 'f8', row : 8, column : 6, player : 'bishop', colour : 'white'},
    {id : 'g8', row : 8, column : 7, player : 'knight', colour : 'white'},
    {id : 'h8', row : 8, column : 8, player : 'rook', colour : 'white'},
]


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
}


function pawnMove(piece){
    if(piece.colour === 'white'){
        possibleArray.push({r: piece.row - 1, col : piece.column})
    }else{
        possibleArray.push({r: piece.row - 1, col : piece.column})
    }
}

function rookMove(piece){
    for(let i = 1; i <=8 ; i++ ){
        possibleArray.push({r : piece.row, c : i})
        possibleArray.push({r : i, c : piece.column})
    }
}

function knightMove(piece){

}

function bishopMove(piece){

}

function queenMove(piece){

}

function kingMove(piece){

}