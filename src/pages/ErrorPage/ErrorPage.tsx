import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";

const ErrorPage: FC = () => {
  return (
    <div className={styles.errorPageWrapper}>
      <h1>Something went wrong, this page doesn't exist</h1>
      <div>
        <Link to={"/movies"}>Return to HOME Page</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
