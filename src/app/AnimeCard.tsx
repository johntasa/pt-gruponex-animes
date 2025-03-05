'use client';

import Image from 'next/image';

interface AnimeCardProps {
  title: string;
  imageUrl: string;
}

const AnimeCard = ({ title, imageUrl }: AnimeCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">{title}</h3>
      </div>
    </div>
  );
};

export default AnimeCard;