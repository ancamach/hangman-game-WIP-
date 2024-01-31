import { createSlice } from '@reduxjs/toolkit';

const hangmanSlice = createSlice({
  name: 'hangman',
  initialState: {
    word: '',
    guessedLetters: [],
    incorrectGuesses: 0,
    maxIncorrectGuesses: 6,
    isGameOver: false,
  },
  reducers: {
    setWord: (state, action) => {
      state.word = action.payload;
    },
    guessLetter: (state, action) => {
      const guessedLetter = action.payload.toLowerCase();

      if (!state.guessedLetters.includes(guessedLetter)) {
        state.guessedLetters.push(guessedLetter);

        const normalizedWord = state.word
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase();

        const normalizedGuessedLetter = guessedLetter
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '');

        if (!normalizedWord.includes(normalizedGuessedLetter)) {
          state.incorrectGuesses += 1;
        }
      }

      const normalizedWord = state.word
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();

      const allLettersGuessed = normalizedWord.split('').every((letter) => state.guessedLetters.includes(letter));
      state.isGameOver = state.incorrectGuesses >= state.maxIncorrectGuesses || allLettersGuessed;
    },
    checkGameOver: (state) => {
      const normalizedWord = state.word
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();

      state.isGameOver = state.incorrectGuesses >= state.maxIncorrectGuesses || normalizedWord.split('').every((letter) => state.guessedLetters.includes(letter));
    },
  },
});

export const { setWord, guessLetter, checkGameOver } = hangmanSlice.actions;
export default hangmanSlice.reducer;
