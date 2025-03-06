'use client';

import { useQuery } from '@apollo/client';
import { GET_TOP_ANIMES } from '@/lib/queries';
import AnimeCard from './AnimeCard';
import { Key } from 'react';

interface AnimeListProps {
  searchTerm: string;
  genre: string;
  year: string;
  status: string;
}

export default function AnimeList ({ searchTerm, genre, year, status }: AnimeListProps) {
  const { loading, error, data } = useQuery(GET_TOP_ANIMES, {
    variables: {
      season: "WINTER",
      seasonYear: 2025,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div>
        <h2 className="font-semibold py-4">POPULAR THIS SEASON</h2>
        <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 gap-4">
          {data.season.media.map((anime: { id: Key | null | undefined; title: { english: string; }; coverImage: { large: string; }; }) => (
            <AnimeCard
              key={anime.id}
              title={anime.title.english}
              imageUrl={anime.coverImage.large}
              animeInfo={anime}
            />
          ))}
        </div>
        <h2 className="font-semibold mt-8 py-4">ALL TIME POPULAR</h2>
        <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 gap-4">
          {data.popular.media.map((anime: { id: Key | null | undefined; title: { english: string; }; coverImage: { large: string; }; }) => (
            <AnimeCard
              key={anime.id}
              title={anime.title.english}
              imageUrl={anime.coverImage.large}
            />
          ))}
        </div>
      </div>
    </>
  );
};