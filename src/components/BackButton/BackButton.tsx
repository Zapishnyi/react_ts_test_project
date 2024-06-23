import React, { FC } from "react";
import styles from "./BackButton.module.css";

const BackButton: FC = () => {
  return (
    <svg className={styles.backButton} viewBox="0 0 472.615 472.615">
      <g>
        <g>
          <path
            d="M167.158,117.315l-0.001-77.375L0,193.619l167.157,153.679v-68.555c200.338,0.004,299.435,153.932,299.435,153.932
			c3.951-19.967,6.023-40.609,6.023-61.736C472.615,196.295,341.8,117.315,167.158,117.315z"
          />
        </g>
      </g>
    </svg>
  );
};

export default BackButton;
