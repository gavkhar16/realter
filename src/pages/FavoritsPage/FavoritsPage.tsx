import React, { useEffect, useState } from "react";
import {
  FavoritesContainer,
  NeonBorder,
  FavoritesTitle,
  FavoritesList,
  FavoriteCard,
  EmptyMessage,
} from "./FavoritsPage.style";
import { ListingCard } from "../../components/UI/ListingCard/ListingCard";
interface Apartment {
  id: string;
  title: string;
  price: string;
  coverPhoto?: { url: string; title?: string };
}

export const FavoritesPage: React.FC = () => {
  const [favorites, setFavorites] = useState<Apartment[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const removeFavorite = (id: string) => {
    const updatedFavorites = favorites.filter(
      (apartment) => apartment.id !== id
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  if (favorites.length === 0) {
    return (
      <FavoritesContainer>
        <NeonBorder />
        <FavoritesTitle>Избранное</FavoritesTitle>
        <EmptyMessage>Нет объектов в избранном.</EmptyMessage>
      </FavoritesContainer>
    );
  }

  return (
    <FavoritesContainer>
      <NeonBorder />
      <FavoritesTitle>Избранное</FavoritesTitle>
      <FavoritesList>
        {favorites.map((apartment) => (
          <FavoriteCard >
            <ListingCard/>
          </FavoriteCard>
          
        ))}
      </FavoritesList>
    </FavoritesContainer>
  );
};
