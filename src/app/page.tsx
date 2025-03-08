'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import FiltersBar from '@/components/Filters/FiltersBar';
import AnimeList from '@/components/AnimeList';
import AnimeModal from '@/components/Modal/AnimeModal';
import FilteredList from '@/components/FilteredList';

export default function Home() {
  const { selectedAnime, loading, filteredAnimes } = useSelector((state: RootState) => state.anime);

  return (
    <div className="container mx-auto p-4">
      <FiltersBar />
      {
        filteredAnimes.length > 0
        ? (
          loading
            ? (
              <div className="text-center">
                <p>Loading...</p>
              </div>
            )
            : (
              <FilteredList />
            )
        )
        : <AnimeList />
      }
      {
        selectedAnime && (
          <AnimeModal />
        )
      }
    </div>
  );
}