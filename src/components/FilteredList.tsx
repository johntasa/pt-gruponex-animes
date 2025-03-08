'use client';

import { useSelector } from 'react-redux';
import AnimeCard from './AnimeCard';
import { Anime } from '@/interfaces/Anime';
import { RootState } from '@/redux/store';

export default function FilteredList () {
  const { filteredAnimes } = useSelector((state: RootState) => state.anime);

  return (
    <div className="space-y-8">
      <section>
        <div>
          <h2 className="font-bold mb-8">Results for:</h2>
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4">
          {filteredAnimes.map((anime: Anime) => (
            <AnimeCard
              key={anime.id}
              animeInfo={anime}
            />
          ))}
        </div>
      </section>
    </div>
  );
};