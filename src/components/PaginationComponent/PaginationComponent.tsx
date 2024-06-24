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
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (true) {
      case +e.currentTarget.value < 1:
        paginationAction(1);
        break;
      case +e.currentTarget.value > totalPages:
        paginationAction(totalPages);
        break;
      default:
        paginationAction(+e.currentTarget.value);
    }
  };

  return (
    <div className={styles.paginationWrapper}>
      <button
        className={styles.prev}
        onClick={() => paginationAction(page - 1)}
        disabled={page === 1}
      >
        <ButtonLeft />
      </button>
      <div>
        <input
          className={styles.currentPage}
          value={page}
          type="number"
          min={1}
          max={totalPages}
          onChange={onChangeHandler}
        />{" "}
        of <span>{totalPages}</span>
      </div>
      <button
        className={styles.next}
        onClick={() => paginationAction(page + 1)}
        disabled={page === totalPages}
      >
        <ButtonRight />
      </button>
    </div>
  );
};

export default PaginationComponent;
