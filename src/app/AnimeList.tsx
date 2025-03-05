'use client'; // Necesario para Next.js 13+ con el App Router

import { useQuery } from '@apollo/client';
import { GET_ANIMES } from '@/lib/queries';
import AnimeCard from './AnimeCard';

interface AnimeListProps {
  searchTerm: string;
  genre: string;
  year: string;
  status: string;
}

const AnimeList = ({ searchTerm, genre, year, status }: AnimeListProps) => {
  const { loading, error, data } = useQuery(GET_ANIMES, {
    variables: {
      search: searchTerm ? searchTerm : undefined,
      genreIn: genre !== 'Any' ? [genre] : undefined,
      seasonYear: year !== 'Any' ? parseInt(year) : undefined,
      status: status !== 'Any' ? status : undefined,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {data.Page.media.map((anime) => (
        <AnimeCard
          key={anime.id}
          title={anime.title.english || anime.title.native}
          imageUrl={anime.coverImage.large}
        />
      ))}
    </div>
  );
};

export default AnimeList;