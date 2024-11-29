import React,{useState,useEffect} from "react";
import SudokuCell from "./SudokuCell";
import { generateSudoku } from "../utils/sudokuUtils";



const SudokuBoard = ({difficulty, onError})=>{
    const [board, setBoard] = useState([]);
    const[solution,setSolution] = useState([]);
    
    useEffect(()=>{
        const { initialBoard, solvedBoard} = generateSudoku(difficulty);
        setBoard(initialBoard);
        setSolution(solvedBoard);
    },[difficulty]);

    const handleCellChange = (row,col,value)=>{
        if (solution[row][col] !== parseInt(value,10)) {
            onError();
        }else{
            const newBoard = [...board];
            newBoard[row][col] = parseInt(value,10);
            setBoard(newBoard);
        }
    };

    return (
        <div className="sudoku-board">
            {board.map((row, rowIndex)=>
                row.map((cell, colIndex)=>(
                    <SudokuCell
                        key={`${rowIndex}-${colIndex}`}
                        value={cell}
                        isInitial={cell !==0}
                        onChange={(value)=> handleCellChange(rowIndex, colIndex,value)}                    
                    />
                ))
            )}
        </div>
    );
};

export default SudokuBoard;