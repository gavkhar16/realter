import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { StyleHeader, ThemeToggleButton } from "./Header.style";

// Пропсы для Header
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
      {/* Ваш компонент SearchBar */}
      <SearchBar onSearch={(value) => console.log("Поиск:", value)} />

      {/* Кнопка для переключения темы с вашими иконками */}
      <ThemeToggleButton onClick={toggleTheme} aria-label="Toggle theme">
        <img
          src={isNightMode ? "public/night.png" : "/public/day.png"}
          alt={isNightMode ? "Ночной режим" : "Дневной режим"}
        />
      </ThemeToggleButton>
    </StyleHeader>
  );
};
