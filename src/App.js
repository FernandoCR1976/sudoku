import React, {useState} from "react";
import SudokuBoard from "./components/SudokuBoard";
import './index.css';

const App = ()=>{
  const [difficulty, setDifficulty] = useState("easy");
  const [errors,setErrors] = useState(0);

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
    setErrors(0);
  };

  const handleError = ()=> {
    setErrors((prev) => prev +1);
  };

  return(
    <div className="app">
      <h1>Sudoku Game</h1>
      <div className="controls">
        <label htmlFor="difficulty">Dificultad</label>
        <select
          id="difficulty"
          value={difficulty}
          onChange={handleDifficultyChange}
        >
        <option value="easy">Facil</option>
        <option value="medium">Medio</option>
        <option value="hard">Dificil</option>
        </select>
      </div>
      <div className="error-counter">Errores: {errors} / 3</div>
      {errors < 3 ? (
        <SudokuBoard difficulty={difficulty} onError={handleError} />
      ):(
        <div className="game-over">¡Juego terminado!</div>
      )}

    </div>
  );
};

export default App;