import React, { FC } from "react";
import { useAppSelector } from "../../redux/store";
import SearchComponent from "../SearchComponent/SearchComponent";
import UserInfo from "../UserInfo/UserInfo";
import ColorThemeToggle from "../ColorThemeToggle/ColorThemeToggle";
import SearchMenuButtonMobile from "../SearchMenuButtonMobile/SearchMenuButtonMobile";
import GenresBadgeSet from "../GenresBadgeSet/GenresBadgeSet";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header: FC = () => {
  const { chosenGenresId } = useAppSelector((state) => state.Search);

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link to={"/movies"}>
          <img
            className={styles.logo}
            src={require("../../assets/images/TMDB_logo.png")}
            alt="Logo"
          />
        </Link>
        <SearchMenuButtonMobile />
        <SearchComponent />
        <div className={styles.themeUserContainer}>
          <ColorThemeToggle />
          <UserInfo />
        </div>
      </div>
      <div className={styles.badgesContainerMobile}>
        <GenresBadgeSet genres_ids={chosenGenresId} />
      </div>
    </div>
  );
};

export default Header;
