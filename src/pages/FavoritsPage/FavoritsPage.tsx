import React, { useEffect, useState } from "react";
import {
  ListingCardContainer,
  ListingImage,
  ListingTitle,
  ListingPrice,
  ErrorText,
} from "../../components/UI/ListingCard/ListingCard.style";

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

  if (favorites.length === 0) {
    return <ErrorText>Нет объектов в избранном.</ErrorText>;
  }

  return (
    <div>
      {favorites.map((apartment) => (
        <ListingCardContainer key={apartment.id}>
          <div style={{ marginBottom: "15px" }}>
            {apartment.coverPhoto ? (
              <ListingImage
                src={apartment.coverPhoto.url}
                alt={apartment.coverPhoto.title || "Изображение"}
              />
            ) : (
              <ErrorText>Фото отсутствует</ErrorText>
            )}
          </div>
          <ListingTitle>{apartment.title}</ListingTitle>
          <ListingPrice>{apartment.price} AED</ListingPrice>
        </ListingCardContainer>
      ))}
    </div>
  );
};
