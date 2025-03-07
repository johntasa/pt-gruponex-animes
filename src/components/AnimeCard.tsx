'use client';

import Image from 'next/image';
import { AnimeCardProps } from '@/interfaces/Anime';
import { useDispatch } from 'react-redux';
import { setSelectedAnime } from '@/redux/animeSlice';
import { FavButton } from './FavButton';

export default function AnimeCard ({ animeInfo }: AnimeCardProps) {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="relative h-70 w-45">
        <Image
          src={animeInfo.coverImage.large}
          alt={animeInfo.title.english}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-lg shadow-teal-500 shadow-lg hover:blur-sm transition-all duration-800 cursor-pointer"
          onClick={() => dispatch(setSelectedAnime(animeInfo))}
        />
      </div>
      <div className="pt-3 flex justify-between">
        <h3 className="text-sm font-semibold truncate">{animeInfo.title.english}</h3>
        <FavButton animeInfo={animeInfo}/>
      </div>
    </div>
  );
};