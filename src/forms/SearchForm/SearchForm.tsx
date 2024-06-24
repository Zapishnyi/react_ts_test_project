import React, { ChangeEvent, FC } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import styles from "./SearchForm.module.css";
import { SearchActions } from "../../redux/Slices/searchSlice";
import { useLocation, useNavigate } from "react-router-dom";
import GenresBadgeSet from "../../components/GenresBadgeSet/GenresBadgeSet";
import { setPage } from "../../redux/Slices/paginationSlice";
import MagnifyingGlassBtn from "../../components/MagnifyingGlassBtn/MagnifyingGlassBtn";

type FormType = {
  [key: string]: boolean | string;
};

const SearchForm: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { genres, movieSearchName, chosenGenresId } = useAppSelector(
    (state) => state.Search,
  );
  const genresBoolean = genres
    .filter((e) => chosenGenresId.includes(e.id))
    .map((e) => ({ [e.name]: e.id }));

  const { register, handleSubmit } = useForm<FormType>({
    defaultValues: Object.assign({ movieSearchName }, ...genresBoolean),
  });

  const moviesSearch = (formData: FormType) => {
    dispatch(SearchActions.setMovieSearchName(formData.movieSearchName));
    dispatch(setPage(1));
    navigate("/movies");
  };

  const genreChoiceNone = () => {
    dispatch(SearchActions.setChosenGenresId([]));
    for (let item of Array.from(
      document.getElementsByClassName(styles.genreInput),
    ) as HTMLInputElement[]) {
      item.checked = false;
    }
  };

  const genreChoiceHandler = (element: ChangeEvent<HTMLInputElement>) => {
    const chosenGenreId = genres
      .filter((e) => e.name === element.currentTarget.name)
      .map((e) => e.id)[0];
    const chosenGenresIdUpdated = [...chosenGenresId];
    chosenGenresIdUpdated.push(chosenGenreId);
    dispatch(
      SearchActions.setChosenGenresId(
        chosenGenresId.includes(chosenGenreId)
          ? chosenGenresId.filter((e) => e !== chosenGenreId)
          : chosenGenresIdUpdated,
      ),
    );
    dispatch(setPage(1));
    if (location.pathname !== "/movies") {
      navigate("/movies");
    }
  };

  return (
    <form onSubmit={handleSubmit(moviesSearch)} className={styles.searchForm}>
      <div className={styles.searchField}>
        <div className={styles.chosenGenres}>
          <GenresBadgeSet genres_ids={chosenGenresId} />
        </div>
        <div className={styles.searchInputButton}>
          <input type="text" {...register("movieSearchName")} />
          <button className={styles.searchButton}>
            <MagnifyingGlassBtn />
          </button>
        </div>
      </div>
      <div className={styles.genresToChose}>
        <label>
          <input
            type={"checkbox"}
            checked={!chosenGenresId.length}
            className={[styles.none, "genresNotChosen"].join(" ")}
            onChange={genreChoiceNone}
          />
          None
        </label>
        {genres.map((genre) => (
          <label key={genre.id}>
            <input
              className={styles.genreInput}
              type={"checkbox"}
              {...register(`${genre.name}`)}
              onChange={genreChoiceHandler}
            />
            {genre.name}
          </label>
        ))}
      </div>
    </form>
  );
};

export default SearchForm;
