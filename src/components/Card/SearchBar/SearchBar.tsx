import React, { useState } from "react";
import styles from "./SearchBar.style";

type SearchBarProps = {
  onSearch: (value: string) => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchValue);
  };

  return (
    <styles.SearchBarContainer>
      <styles.SearchInputWrapper>
        <styles.SearchIcon />
        <styles.SearchInput
          type="text"
          placeholder="Введите запрос"
          value={searchValue}
          onChange={handleInputChange}
        />
      </styles.SearchInputWrapper>
      <styles.SearchButton onClick={handleSearch}>Поиск</styles.SearchButton>
    </styles.SearchBarContainer>
  );
};


