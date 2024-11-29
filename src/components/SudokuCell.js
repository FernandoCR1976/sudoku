import React from "react";

const SudokuCell = ({ value, isInitial, onChange })=>{
    const handleChange = (e)=>{
        const val = e.target.value;

        if (!isNaN(val) && val >= 1 && val <=9){
            onChange(val);
        }
    };

    return (
        <input
            type="text"
            maxLength='1'
            className={`sodoku-cell ${isInitial ? "initial-cell" : "user-cell"}`}
            value={value === 0 ? "" : value}
            disabled={isInitial}
            onChange={handleChange}        
        />
    );
};

export default SudokuCell;