'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import FiltersBar from '@/components/Filters/FiltersBar';
import AnimeList from '@/components/AnimeList';
import AnimeModal from '@/components/Modal/AnimeModal';
import FilteredList from '@/components/FilteredList';
import Loader from '@/components/UI/Loader';

export default function Home() {
  const { selectedAnime, loading, filteredAnimes, error, noResults } = useSelector((state: RootState) => state.anime);

  const renderContent = () => {
    if (loading) {
      return <Loader />;
    }

    if (error) {
      return (
        <div className="text-center py-8">
          <p className="text-red-500">{error}</p>
        </div>
      );
    }

    return filteredAnimes.length > 0 || noResults ? <FilteredList /> : <AnimeList />;
  };

  return (
    <main className="container mx-auto p-4 min-h-screen">
      <FiltersBar />
      <div className="my-8">
        {renderContent()}
      </div>
      {selectedAnime && <AnimeModal />}
    </main>
  );
}