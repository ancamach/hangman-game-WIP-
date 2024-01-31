import React from 'react';
import { useSelector } from 'react-redux';
import { selectHangmanState, selectDisplayWord } from '../store/selectors';

const HangmanDisplay = () => {
  const { guessedLetters, incorrectGuesses, maxIncorrectGuesses, isGameOver } = useSelector(selectHangmanState);
  const displayWord = useSelector(selectDisplayWord);

  return (
    <div>
      <p className="text-2xl font-bold mb-4">{displayWord}</p>
      <p>Letras Adivinadas: {guessedLetters.join(', ')}</p>
      <p>Incorrectas: {incorrectGuesses}/{maxIncorrectGuesses}</p>
      {isGameOver && (
        <>
          <p>La palabra correcta era: {isGameOver && displayWord}</p>
          {incorrectGuesses >= maxIncorrectGuesses && <p className="text-red-600 font-bold">¡Has perdido!</p>}
        </>
      )}
    </div>
  );
};

export default HangmanDisplay;


