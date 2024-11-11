import React, { useState } from "react";
import { FavoritesContainer, FavoriteItem,
    ThemeToggleButton } from "./FavoritsPage.style";
import { Heading } from "../../components/UI/Heading/Heading";
import { Button } from "../../components/UI/Button/ButtonBox";
import { Linktext } from "../../components/UI/Linktext/Linktext";

interface FavoriteProps {
  id: number;
  title: string;
  image: string;
}

interface FavoritesPageProps {
  favorites: FavoriteProps[];
}

export const FavoritesPage: React.FC<FavoritesPageProps> = ({ favorites }) => {
  const [isNightMode, setIsNightMode] = useState(true);

  const toggleTheme = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <FavoritesContainer isNightMode={isNightMode}>
      <Heading headingText="Избранное" isNightMode={isNightMode} />
      {favorites.map((favorite) => (
        <FavoriteItem key={favorite.id} isNightMode={isNightMode}>
          <img src={favorite.image} alt={favorite.title} style={{ width: "50px", borderRadius: "4px" }} />
          <p>{favorite.title}</p>
          <Button buttonText="Удалить" isNightMode={isNightMode} />
          <Linktext
            linkText="Подробнее"
            isNightMode={isNightMode}
            onLinkClick={() => { /* navigate to details page */ }}
          />
        </FavoriteItem>
      ))}
      <ThemeToggleButton onClick={toggleTheme}>
        {isNightMode ? "Переключить на дневной режим" : "Переключить на ночной режим"}
      </ThemeToggleButton>
    </FavoritesContainer>
  );
};
