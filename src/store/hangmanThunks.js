import { setWord } from './hangmanSlice';

async function obtenerPalabraAlAzar() {
    try {
      const apiKey = 'YOUR_API_KEY';
      const apiUrl = `https://random-word-api.herokuapp.com/word`;
  
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      const palabra = Array.isArray(data) ? data[0] : data;
  
      return palabra;
    } catch (error) {
      console.error('Error al obtener la palabra:', error);
      throw error;
    }
  }
  

export const iniciarNuevoJuego = () => async (dispatch) => {
  try {
    const palabraAlAzar = await obtenerPalabraAlAzar();
    dispatch(setWord(palabraAlAzar));
  } catch (error) {
    console.error('Error al iniciar un nuevo juego:', error);
  }
};
