import React, { FC } from "react";
import styles from "./SearchMenuButtonMobile.module.css";
import { useNavigate } from "react-router-dom";
import MagnifyingGlassBtn from "../MagnifyingGlassBtn/MagnifyingGlassBtn";

const SearchMenuButtonMobile: FC = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/search");
      }}
      className={styles.burgerMenu}
    >
      <MagnifyingGlassBtn />
    </div>
  );
};

export default SearchMenuButtonMobile;
