import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Anime } from '@/interfaces/Anime';

interface AnimeState {
  favorites: Anime[];
  selectedAnime: Anime | null;
}

const loadState = (): AnimeState => {
  try {
    const serializedState = sessionStorage.getItem('animeState');
    if (serializedState === null) {
      return {
        favorites: [],
        selectedAnime: null
      };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading state from sessionStorage:', err);
    return {
      favorites: [],
      selectedAnime: null
    };
  }
};

const saveState = (state: AnimeState) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem('animeState', serializedState);
  } catch (err) {
    console.error('Error saving state to sessionStorage:', err);
  }
};

const initialState: AnimeState = loadState();

const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Anime>) => {
      const anime = action.payload;
      if (!state.favorites.some((fav) => fav.id === anime.id)) {
        state.favorites.push(anime);
        saveState(state);
      }
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter((fav) => fav.id !== action.payload);
      saveState(state);
    },
    setSelectedAnime: (state, action: PayloadAction<Anime | null>) => {
      state.selectedAnime = action.payload;
      saveState(state);
    },
  },
});

export const { addToFavorites, removeFromFavorites, setSelectedAnime } =
  animeSlice.actions;
export default animeSlice.reducer;