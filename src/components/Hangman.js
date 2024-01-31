import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { iniciarNuevoJuego} from '../store/hangmanThunks';
import { guessLetter, checkGameOver } from '../store/hangmanSlice';
import { selectHangmanState } from '../store/selectors';

const HangmanGame = () => {
  const dispatch = useDispatch();
  const { isGameOver } = useSelector(selectHangmanState);

  useEffect(() => {
    dispatch(iniciarNuevoJuego());
  }, [dispatch]);

  const handleGuess = (letter) => {
    dispatch(guessLetter(letter));
    dispatch(checkGameOver());
  };

  return (
    <div>
      {isGameOver ? <p>¡Juego terminado!</p> : <p>¡Buena suerte!</p>}
        <button onClick={() => handleGuess('A')}>A</button>
        <button onClick={() => handleGuess('B')}>B</button>
        <button onClick={() => handleGuess('C')}>C</button>
        <button onClick={() => handleGuess('D')}>D</button>
        <button onClick={() => handleGuess('E')}>E</button>
        <button onClick={() => handleGuess('F')}>F</button>
        <button onClick={() => handleGuess('G')}>G</button>
        <button onClick={() => handleGuess('H')}>H</button>
        <button onClick={() => handleGuess('I')}>I</button>
        <button onClick={() => handleGuess('J')}>J</button>
        <button onClick={() => handleGuess('K')}>K</button>
        <button onClick={() => handleGuess('L')}>L</button>
        <button onClick={() => handleGuess('M')}>M</button>
        <button onClick={() => handleGuess('N')}>N</button>
        <button onClick={() => handleGuess('Ñ')}>Ñ</button>
        <button onClick={() => handleGuess('O')}>O</button>
        <button onClick={() => handleGuess('P')}>P</button>
        <button onClick={() => handleGuess('Q')}>Q</button>
        <button onClick={() => handleGuess('R')}>R</button>
        <button onClick={() => handleGuess('S')}>S</button>
        <button onClick={() => handleGuess('T')}>T</button>
        <button onClick={() => handleGuess('U')}>U</button>
        <button onClick={() => handleGuess('V')}>V</button>
        <button onClick={() => handleGuess('W')}>W</button>
        <button onClick={() => handleGuess('X')}>X</button>
        <button onClick={() => handleGuess('Y')}>Y</button>
        <button onClick={() => handleGuess('Z')}>Z</button>
        <button onClick={() => handleGuess(' ')}>ESPACIO</button>
    </div>
  );
};

export default HangmanGame;


