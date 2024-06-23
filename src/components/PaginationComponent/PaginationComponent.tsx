import React, { FC } from "react";
import styles from "./PaginationComponent.module.css";
import ButtonRight from "../ButtonLeftRight/ButtonRight";
import ButtonLeft from "../ButtonLeftRight/ButtonLeft";

interface IProps {
  page: number;
  totalPages: number;
  paginationAction: (pageChanged: number) => void;
}

const PaginationComponent: FC<IProps> = ({
  page,
  totalPages,
  paginationAction,
}) => {
  return (
    <div className={styles.paginationWrapper}>
      <button onClick={() => paginationAction(page - 1)} disabled={page === 1}>
        <ButtonLeft />
      </button>
      <div>
        <input
          className={styles.currentPage}
          value={page}
          type="number"
          min={1}
          max={totalPages}
          onChange={(e) => paginationAction(+e.currentTarget.value)}
        />{" "}
        of <span>{totalPages}</span>
      </div>
      <button
        onClick={() => paginationAction(page + 1)}
        disabled={page === totalPages}
      >
        <ButtonRight />
      </button>
    </div>
  );
};

export default PaginationComponent;
