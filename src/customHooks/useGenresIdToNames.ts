import { useAppSelector } from "../redux/store";

export const useGenresIdToName = (genres_ids: number[]) => {
  const { genres } = useAppSelector((state) => state.Search);
  return genres_ids.map(
    (genre_id) => genres.filter((genreSet) => genreSet.id === genre_id)[0].name,
  );
};
