import React from "react";

const DifficultySelector = ({ onChange })=>{
    return (
        <div className="difficulty-selector">
            <button onClick={()=> onChange('easy')}>Facil</button>
            <button onClick={()=> onChange('medium')}>Medio</button>
            <button onClick={()=> onChange('hard')}>Dificil</button>
        </div>
    );
};

export default DifficultySelector;