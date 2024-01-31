export const selectHangmanState = (state) => state.hangman;

export const selectDisplayWord = (state) => {
    const { word, isGameOver, guessedLetters } = selectHangmanState(state);
  
    return isGameOver ? word : word
      .split('')
      .map(letter => (guessedLetters.includes(letter) ? letter : '_'))
      .join(' ');
  };
