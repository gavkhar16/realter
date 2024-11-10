import React from "react";
import {
  HeaderContainer,
  IconsContainer,
  LogoContainer,
  SearchContainer,
  SearchInput,
} from "./Header.style";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <IconsContainer>
        <img src="/path/to/icon-search.svg" alt="Search Icon" />
        <img src="/path/to/icon-favorites.svg" alt="Favorites Icon" />
        <img src="/path/to/icon-profile.svg" alt="Profile Icon" />
      </IconsContainer>

      <SearchContainer>
        <img src="/path/to/icon-search.svg" alt="Search Icon" />
        <SearchInput type="text" placeholder="Поиск..." />
      </SearchContainer>

      <LogoContainer>Ваш Логотип</LogoContainer>
    </HeaderContainer>
  );
};

export default Header;
