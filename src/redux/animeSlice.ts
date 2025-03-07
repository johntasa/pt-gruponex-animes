import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Anime, AnimeCard } from '@/interfaces/Anime';

interface AnimeState {
  favorites: AnimeCard[];
  topAnimes: {
    season: Anime[];
    popular: Anime[];
  };
  selectedAnime: Anime | null;
}

const initialState: AnimeState = {
  favorites: [],
  topAnimes: {
    season: [],
    popular: [],
  },
  selectedAnime: null,
};

const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<AnimeCard>) => {
      const anime = action.payload;
      if (!state.favorites.some((fav) => fav.id === anime.id)) {
        state.favorites.push(anime);
      }
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter((fav) => fav.id !== action.payload);
    },
    setTopAnimes: (state, action: PayloadAction<{ season: Anime[]; popular: Anime[] }>) => {
      state.topAnimes = action.payload;
    },
    setSelectedAnime: (state, action: PayloadAction<Anime | null>) => {
      state.selectedAnime = action.payload;
    },
  },
});

export const { addToFavorites, removeFromFavorites, setTopAnimes, setSelectedAnime } =
  animeSlice.actions;
export default animeSlice.reducer;