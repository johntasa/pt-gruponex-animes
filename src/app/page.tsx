'use client';

import { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import AnimeList from '@/components/AnimeList';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import AnimeModal from '@/components/Modal/AnimeModal';

export default function Home() {
  const [filters, setFilters] = useState({
    searchTerm: '',
    genre: 'Any',
    year: 'Any',
    status: 'Any',
    season: 'Any',
  });

  const isSelectedAnime = useSelector((state: RootState) => state.anime.selectedAnime);

  const handleSearch = (newFilters: { searchTerm: string; genre: string; year: string; status: string; season: string }) => {
    setFilters(newFilters);
  };

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={handleSearch} />
      <AnimeList {...filters} />
      {
        isSelectedAnime && (
          <AnimeModal />
        )
      }
    </div>
  );
}