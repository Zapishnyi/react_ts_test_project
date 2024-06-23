import React, { FC } from "react";
import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setTheme } from "../../redux/Slices/themeSlice";
import styles from "./ColorThemeToggle.module.css";

const ColorThemeToggle: FC = () => {
  const { lightThemeOn } = useAppSelector((state) => state.Theme);
  const dispatch = useAppDispatch();
  const onToggle = () => {
    dispatch(setTheme(!lightThemeOn));
    localStorage.setItem("lightThemeOn", JSON.stringify(!lightThemeOn));
  };

  return (
    <Classic
      className={styles.theme_toggle}
      duration={1000}
      onToggle={onToggle}
      toggled={!lightThemeOn}
      placeholder={undefined}
      // onPointerEnterCapture ={undefined}
      // onPointerLeaveCapture ={undefined}
    />
  );
};

export default ColorThemeToggle;
