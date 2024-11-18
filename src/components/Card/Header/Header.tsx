import React from "react";
import { StyleHeader } from "./Header.style";
import{ SearchBar} from "../SearchBar/SearchBar";
import { ChangeTheme } from "../../UI/ChangeTheme/ChangeTheme";
import { useTheme } from "styled-components"; 

export const Header: React.FC = () => {
  const { isNightMode, toggleTheme } = useTheme();

  return (
    <StyleHeader>
      <SearchBar onSearch={(value) => console.log("Поиск:", value)} />
      <ChangeTheme isNightMode={isNightMode} toggleTheme={toggleTheme} />
    </StyleHeader>
  );
};
