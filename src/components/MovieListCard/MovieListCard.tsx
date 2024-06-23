import React, { FC } from "react";
import IMovie from "../../models/IMovie";
import StarRatings from "react-star-ratings";
import styles from "./MovieListCard.module.css";
import { useAppDispatch } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import MovieImagePreview from "../MovieImagePreview/MovieImagePreview";
import { MoviesActions } from "../../redux/Slices/moviesSlice";
import { errorImage } from "../../constants/errorImagePath";

interface IProps {
  movie: IMovie;
}

const MovieListCard: FC<IProps> = ({ movie }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const movieChoseHandler = () => {
    dispatch(MoviesActions.setChosenMovie(movie));
    navigate("/movieInfo");
  };
  return (
    <div onClick={movieChoseHandler} className={styles.card}>
      <MovieImagePreview
        key={movie.id}
        poster_path={movie.poster_path}
        title={movie.title}
        error_image_path={errorImage.poster}
      />
      <div className={styles.stars}>
        <StarRatings
          rating={(movie.vote_average * 6) / 10}
          starDimension="20px"
          starSpacing="2px"
          numberOfStars={6}
          starRatedColor="#ff5600"
          starEmptyColor="#b1b1b1"
        />
      </div>
      <h4>{movie.title}</h4>
    </div>
  );
};

export default MovieListCard;
