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

        if (!state.word.includes(guessedLetter)) {
            state.incorrectGuesses += 1
            }
        }
        const allLettersGuessed = state.word.split('').every(letter => state.guessedLetters.includes(letter));
      state.isGameOver = state.incorrectGuesses >= state.maxIncorrectGuesses || allLettersGuessed;
    },
    checkGameOver: (state) => {
        state.isGameOver = state.incorrectGuesses >= state.maxIncorrectGuesses ||
        state.word.split('').every(letter => state.guessedLetters.includes(letter));
    },
  },
});

export const { setWord, guessLetter, checkGameOver } = hangmanSlice.actions;
export default hangmanSlice.reducer;
