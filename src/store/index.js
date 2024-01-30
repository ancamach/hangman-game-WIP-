import { combineReducers } from '@reduxjs/toolkit';
import hangmanReducer from './hangmanSlice';

const rootReducer = combineReducers({
  hangman: hangmanReducer,
});

export default rootReducer;
