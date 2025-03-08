import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Anime } from '@/interfaces/Anime';
import { SearchFilters } from '@/interfaces/Filters';

interface AnimeState {
  favorites: Anime[];
  selectedAnime: Anime | null;
  filters: SearchFilters;
  filteredAnimes: Anime[];  // New property
  loading: boolean;    // New property
  error: string | null; // New property
}

const emptyState: AnimeState = {
  favorites: [],
  selectedAnime: null,
  filters: {
    searchTerm: '',
    genre: '',
    year: '',
    status: '',
    season: ''
  },
  filteredAnimes: [],
  loading: false,
  error: null
};

const loadState = (): AnimeState => {
  if (typeof window !== 'undefined') {
    try {
      const serializedState = sessionStorage.getItem('animeState');
      if (serializedState === null) {
        return emptyState;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      console.error('Error loading state from sessionStorage:', err);
      return emptyState;
    }
  }
  return emptyState;
};

const saveState = (state: AnimeState) => {
  if (typeof window !== 'undefined') {
    try {
      const serializedState = JSON.stringify(state);
      sessionStorage.setItem('animeState', serializedState);
    } catch (err) {
      console.error('Error saving state to sessionStorage:', err);
    }
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
    },
    setFilters: (state, action: PayloadAction<{ [key: string]: string }>) => {
      state.filters = {
        searchTerm: action.payload.searchTerm || '',
        genre: action.payload.genre || '',
        year: action.payload.year || '',
        status: action.payload.status || '',
        season: action.payload.season || ''
      };
    },
    setAnimeList: (state, action: PayloadAction<Anime[]>) => {
      state.filteredAnimes = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  },
});

export const { 
  addToFavorites, 
  removeFromFavorites, 
  setSelectedAnime, 
  setFilters,
  setAnimeList,
  setLoading,
  setError 
} = animeSlice.actions;
export default animeSlice.reducer;