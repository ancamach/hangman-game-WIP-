export const selectHangmanState = (state) => state.hangman;

export const selectDisplayWord = (state) => {
  const { word, guessedLetters } = selectHangmanState(state);

  return word
    .split('')
    .map(letter => (guessedLetters.includes(letter) ? letter : '_'))
    .join(' ');
};
