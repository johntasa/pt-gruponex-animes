'use client';

import { useState } from 'react';
import SearchBar from './SearchBar';
import AnimeList from './AnimeList';

export default function Home() {
  const [filters, setFilters] = useState({
    searchTerm: '',
    genre: 'Any',
    year: 'Any',
    status: 'Any',
    season: 'Any',
  });

  const handleSearch = (newFilters: { searchTerm: string; genre: string; year: string; status: string; season: string }) => {
    setFilters(newFilters);
  };

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={handleSearch} />
      <AnimeList {...filters} />
    </div>
  );
}