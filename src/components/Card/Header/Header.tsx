import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { StyleHeader, ThemeToggleButton, Logo, FavoritesButton } from "./Header.style";
import { Link } from "react-router-dom";

interface HeaderProps {
  isNightMode: boolean;
  setIsNightMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<HeaderProps> = ({ isNightMode, setIsNightMode }) => {
  const toggleTheme = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <StyleHeader>
      {/* Логотип */}
      <Logo>
        <Link to="/">
          <img src='/public/logo.svg' alt="RealEstate Logo" />
          RealEstate
        </Link>
      </Logo>

      {/* Поле поиска */}
      <SearchBar onSearch={(value) => console.log("Поиск:", value)} />

      {/* Кнопки: Переключение темы и переход в избранное */}
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Кнопка "Перейти в избранное" */}
        <FavoritesButton>
          <Link to="/favorits-page">Избранное</Link>
        </FavoritesButton>

        {/* Кнопка переключения темы */}
        <ThemeToggleButton onClick={toggleTheme} aria-label="Toggle theme">
          <img
            src={isNightMode ? "/public/night.png" : "/public/day.png"}
            alt={isNightMode ? "Ночной режим" : "Дневной режим"}
          />
        </ThemeToggleButton>
      </div>
    </StyleHeader>
  );
};
