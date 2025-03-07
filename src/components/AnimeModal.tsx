import { useDispatch } from "react-redux";
import Image from 'next/image';
import { setSelectedAnime } from "@/redux/animeSlice";
import { Anime } from "@/interfaces/Anime";
import { FavButton } from "./FavButton";

export default function AnimeModal ({ animeInfo }: { animeInfo: Anime }) {
  const dispatch = useDispatch();
  const cleanDescription = animeInfo.description.replace(/<[^>]*>?/gm, '');

  const formatDate = (date: { year: number; month: number; day: number }) => {
    if (!date.year) return 'N/A';
    const semiFormattedDate =  `${date.year}-${date.month}-${date.day}`;
    const formattedDate = new Date(semiFormattedDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
    return formattedDate;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4 z-50">
      <div className="relative bg-white rounded-lg w-11/12 md:w-3/4 max-h-auto overflow-y-auto">
        <Image className="w-full h-auto block" src={animeInfo.bannerImage || '/Background.png'} width={700} height={475} alt={`${animeInfo.title.english} Banner`} />
        <button
          onClick={() => dispatch(setSelectedAnime(null))}
          className="rounded-full w-10 h-10 top-2.5 right-2.5 bg-teal-700 absolute text-white hover:text-gray-700 cursor-pointer"
        >
          X
        </button>
        <div className="p-8 text-black">
          <div className="flex justify-between items-center">
            <div className="text-[#282828] text-3xl font-bold ">
              <h2>
                {animeInfo.title.english}
              </h2>
              <h2>
                {animeInfo.title.native}
              </h2>
            </div>
            <FavButton animeInfo={animeInfo} size={70} />
          </div>
          <p className="my-6 text-sm text-justify">{cleanDescription}</p>
          <div className="flex gap-1 sm:gap-8 mb-4">
            <div>
              <p className="font-semibold">Episodes</p>
              <p>{animeInfo.episodes}</p>
            </div>
            <div>
              <p className="font-semibold">Average Score</p>
              <p>{animeInfo.averageScore}%</p>
            </div>
            <div>
              <p className="font-semibold">Status</p>
              <p>{animeInfo.status}</p>
            </div>
            <div>
              <p className="font-semibold">Start Date</p>
              <p>
                {formatDate(animeInfo.startDate)}
              </p>
            </div>
            <div>
              <p className="font-semibold">End Date</p>
              <p>
                {formatDate(animeInfo.endDate)}
              </p>
            </div>
          </div>
          {animeInfo.trailer && (
            <div className="flex justify-center">
              <iframe
                src={`https://www.youtube.com/embed/${animeInfo.trailer.id}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-3/5 h-3/5 md:h-80 rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}