import React, { FC } from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";
import { useAppSelector } from "../../redux/store";

const MainLayout: FC = () => {
  const { lightThemeOn } = useAppSelector((state) => state.Theme);

  return (
    <div
      className={[
        styles.wrapper,
        lightThemeOn ? styles.light : styles.dark,
      ].join(" ")}
    >
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
