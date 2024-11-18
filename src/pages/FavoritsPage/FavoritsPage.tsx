import React, { useContext } from 'react';
import {
  FavoritesContainer,
  FavoritesList,
  EmptyMessage,
} from './FavoritsPage.style';
import Heading from '../../components/UI/Heading/Heading';

const FavoritesPage: React.FC = () => {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

  return (
    <FavoritesContainer>
      <Heading headingType="h1" headingText="Избранное" />
      <FavoritesList>
        {favorites.length > 0 ? (
          favorites.map((favorite: any, index: number) => (
            <div key={index}>
              <h3>{favorite.title}</h3>
              <p>{favorite.price}</p>
              <img src={favorite.image} alt={favorite.title} />
            </div>
          ))
        ) : (
          <EmptyMessage>✨ Вы пока ничего не добавили в избранное. ✨</EmptyMessage>
        )}
      </FavoritesList>
    </FavoritesContainer>
  );
};

export default FavoritesPage;
