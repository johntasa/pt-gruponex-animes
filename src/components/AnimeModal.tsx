import { useDispatch } from "react-redux";
import Image from 'next/image';
import { setSelectedAnime } from "@/redux/animeSlice";
import { Anime } from "@/interfaces/Anime";

export default function AnimeModal ({ animeInfo }: { animeInfo: Anime }) {
  const dispatch = useDispatch();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4 z-50">
      <div className="bg-white rounded-lg w-11/12 md:w-3/4 lg:w-3/4 max-h-[90vh] overflow-y-auto">
        <Image className="w-full h-auto block" src={animeInfo.bannerImage || '/Background.png'} alt={`${animeInfo.title} Banner`} width={700} height={475} />
        <button
          onClick={() => dispatch(setSelectedAnime(null))}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
      </div>
    </div>
  );
}