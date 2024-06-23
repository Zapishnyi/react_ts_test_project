import React, { FC } from "react";
import styles from "./GenresBadgeSet.module.css";
import { useGenresIdToName } from "../../customHooks/useGenresIdToNames";

interface IProps {
  genres_ids: number[];
}

const GenresBadgeSet: FC<IProps> = ({ genres_ids }) => {
  return (
    <div className={styles.badgeWrapper}>
      {useGenresIdToName(genres_ids).map((e, i) => (
        <span key={i} className={styles.badge}>
          {e}
        </span>
      ))}
    </div>
  );
};

export default GenresBadgeSet;
