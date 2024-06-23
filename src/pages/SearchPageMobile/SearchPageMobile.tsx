import React from "react";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import styles from "./SearPageMobile.module.css";
import { useNavigate } from "react-router-dom";

const SearchPageMobile = () => {
  const navigate = useNavigate();

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 800 && window.location.pathname === "/search") {
      navigate("/movies");
    }
  });

  return (
    <div className={styles.searchPage}>
      <SearchComponent />
    </div>
  );
};

export default SearchPageMobile;
