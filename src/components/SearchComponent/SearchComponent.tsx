import React, { FC, useEffect } from "react";
import { useAppDispatch } from "../../redux/store";

import SearchForm from "../../forms/SearchForm/SearchForm";
import { SearchActions } from "../../redux/Slices/searchSlice";

const SearchComponent: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(SearchActions.loadGenres());
  }, []);

  return <SearchForm key={Math.random()} />;
};

export default SearchComponent;
