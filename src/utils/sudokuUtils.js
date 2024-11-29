export const generateSudoku = (difficulty)=>{
    const difficulties = { easy: 40, medium: 50, hard: 60 };
    const emptyCells = difficulties[difficulty];

    const solvedBoard = generateSolvedBoard();
    const initialBoard = removeNumbers(solvedBoard, emptyCells);

    return { initialBoard, solvedBoard };
}

const generateSolvedBoard = ()=>{

    const board = Array(9)
    .fill(null)
    .map(()=> Array(9).fill(0));

    for (let i =0 ; i < 9; i++){
        for (let j = 0; j < 9; j++){
            board[i][j] = ((i * 3 + Math.floor(i / 3) + j ) % 9) + 1;
        }
    }
    return board;
};

const removeNumbers = (board, count)=> {
    const newBoard = board.map((row)=> [... row]);

    let removed = 0;
    while (removed < count){
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);

        if (newBoard[row][col] !== 0){
            newBoard[row][col] = 0;
            removed++;
        }
    }
    return newBoard;

}