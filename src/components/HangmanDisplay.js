import React from 'react';
import { useSelector } from 'react-redux';
import { selectHangmanState, selectDisplayWord } from '../store/selectors';

const HangmanDisplay = () => {
  const { guessedLetters, incorrectGuesses, maxIncorrectGuesses, isGameOver } = useSelector(selectHangmanState);
  const displayWord = useSelector(selectDisplayWord);

  return (
    <div>
      <p>{displayWord}</p>
      <p>Letras Adivinadas: {guessedLetters.join(', ')}</p>
      <p>Incorrectas: {incorrectGuesses}/{maxIncorrectGuesses}</p>
      {isGameOver && (
        <>
          <p>La palabra correcta era: {isGameOver && displayWord}</p>
          {incorrectGuesses >= maxIncorrectGuesses && <p>¡Has perdido!</p>}
        </>
      )}
    </div>
  );
};

export default HangmanDisplay;


