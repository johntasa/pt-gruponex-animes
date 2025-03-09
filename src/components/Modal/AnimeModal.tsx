import { useDispatch, useSelector } from "react-redux"
import Image from 'next/image'
import { setSelectedAnime } from "@/redux/animeSlice"
import { RootState } from '@/redux/store'
import AnimeDetails from './AnimeDetails'
import FavButton from "@/components/UI/FavButton"
import CrossButton from '@/components/UI/CrossButton'

export default function AnimeModal() {
  const dispatch = useDispatch();

const selectedAnime = useSelector((state: RootState) => {
  const anime = state.anime.selectedAnime;
  if (!anime) {
    throw new Error('AnimeModal should not be rendered when selectedAnime is null');
  }
  return anime;
});

  const cleanDescription = selectedAnime?.description.replace(/<[^>]*>?/gm, '') || '';
  const handleClose = () => dispatch(setSelectedAnime(null));

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4 z-50">
      <div className="relative bg-white rounded-lg w-11/12 md:w-3/4 max-h-auto overflow-y-auto">
        <Image 
          className="w-full h-auto object-cover"
          src={selectedAnime.bannerImage || '/Background.png'}
          width={1200}
          height={675}
          alt={`${selectedAnime.title.english} Banner`}
          priority
        />
        <CrossButton exectFunct={handleClose} calledFrom={"modal"} />
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="text-[#282828]">
              <h2 className="text-3xl font-bold mb-2">{selectedAnime.title.english}</h2>
              <h3 className="text-2xl font-medium">{selectedAnime.title.native}</h3>
            </div>
            <FavButton animeInfo={selectedAnime} size={70} />
          </div>
          <p className="my-6 text-sm text-justify leading-relaxed">{cleanDescription}</p>
          <AnimeDetails animeInfo={selectedAnime} />
          {selectedAnime.trailer && (
            <div className="flex justify-center mt-8">
              <iframe
                src={`https://www.youtube.com/embed/${selectedAnime.trailer.id}`}
                title={`${selectedAnime.title.english} trailer`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full md:w-4/5 aspect-video rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}