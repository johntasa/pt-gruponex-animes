"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import AnimeCard from "@/components/AnimeCard";
import AnimeModal from "@/components/Modal/AnimeModal";
import NoResults from "@/components/UI/NoResultsMessage";

export default function FavoritesPage() {
  const favorites = useSelector((state: RootState) => state.anime.favorites);
  const isSelectedAnime = useSelector((state: RootState) => state.anime.selectedAnime);

  return (
    <>
      {
        favorites.length === 0
          ? <NoResults message="No favorites yet!" />
          :
            <div className="container mx-auto p-4 mt-8 grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 gap-4">
              {
                favorites.map((anime) => (
                  <AnimeCard key={anime.id} animeInfo={anime} />
                ))
              }
            </div>
      }
      {
        isSelectedAnime && (
          <AnimeModal />
        )
      }
    </>
  );
}