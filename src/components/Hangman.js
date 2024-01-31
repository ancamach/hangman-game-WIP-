import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { iniciarNuevoJuego } from '../store/hangmanThunks';
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

  const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', 'Á', 'É', 'Í', 'Ó', 'Ú', 'Ü'];

  return (
    <div>
      {isGameOver ? <p>¡Juego terminado!</p> : <p>¡Buena suerte!</p>}

      {letras.map((letra) => (
        <button key={letra} onClick={() => handleGuess(letra)}>
          {letra}
        </button>
      ))}
    </div>
  );
};

export default HangmanGame;