"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import AnimeCard from "@/components/AnimeCard";
import AnimeModal from "@/components/Modal/AnimeModal";

export default function FavoritesPage() {
  const favorites = useSelector((state: RootState) => state.anime.favorites);
  const isSelectedAnime = useSelector((state: RootState) => state.anime.selectedAnime);

  return (
    <div className="container mx-auto p-4 mt-8 grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 gap-4">
      {
        favorites.length === 0
          ? (<h2 className="text-center text-2xl">No favorites yet</h2>)
          : favorites.map((anime) => (
            <AnimeCard key={anime.id} animeInfo={anime} />
          ))
      }
      {
        isSelectedAnime && (
          <AnimeModal />
        )
      }
    </div>
  );
}