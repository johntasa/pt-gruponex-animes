'use client';

import { useQuery } from '@apollo/client';
import { GET_TOP_ANIMES } from '@/api/queries';
import AnimeCard from './AnimeCard';
import { Anime } from '@/interfaces/Anime';
import Loader from './UI/Loader';

export default function AnimeList () {
  const { loading, error, data } = useQuery(GET_TOP_ANIMES, {
    variables: {
      season: "WINTER",
      seasonYear: 2025,
    },
  });

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="space-y-8">
      <section>
        <h2 className="font-semibold py-4 text-xl">POPULAR THIS SEASON</h2>
        <div className="grid grid-cols-2 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4">
          {data.season.media.map((anime: Anime) => (
            <AnimeCard
              key={anime.id}
              animeInfo={anime}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-semibold py-4 text-xl">ALL TIME POPULAR</h2>
        <div className="grid grid-cols-2 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4">
          {data.popular.media.map((anime: Anime) => (
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