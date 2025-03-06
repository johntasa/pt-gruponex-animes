'use client';

import Image from 'next/image';
import { Anime } from '@/interfaces/Anime';
import { useDispatch } from 'react-redux';
import { setSelectedAnime } from '@/redux/animeSlice';

interface AnimeCardProps {
  title: string;
  imageUrl: string;
  animeInfo: Anime;
}

export default function AnimeCard ({ title, imageUrl, animeInfo }: AnimeCardProps) {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="relative h-70 w-45">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-lg shadow-teal-500 shadow-lg hover:blur-sm transition-all duration-800 cursor-pointer"
          onClick={() => dispatch(setSelectedAnime(animeInfo))}
        />
      </div>
      <div className="pt-3 flex justify-between">
        <h3 className="text-sm font-semibold truncate">{title}</h3>
        <button type="button" className="text-[#FF4B77] hover:cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="none" stroke="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
  );
};