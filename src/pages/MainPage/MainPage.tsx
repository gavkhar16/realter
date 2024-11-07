import React from 'react';
import { MainPageContainer, Title, ListingsContainer } from './MainPage.style';
import ListingCard from '../../components/UI/ListingCard/ListingCard';

 export const MainPage: React.FC = () => {
  const listings = [
    { id: 1, title: 'Роскошный пентхаус на Манхэттене', price: '$3,000,000', image: '/img/penthouse.jpg' },
    { id: 2, title: 'Апартаменты с видом на Центральный парк', price: '$2,200,000', image: '/img/apartment.jpg' },
    // Добавьте больше данных для примера
  ];

  return (
    <MainPageContainer>
      <Title>Недвижимость в Нью-Йорке</Title>
      <ListingsContainer>
        {listings.map((listing) => (
          <ListingCard key={listing.id} title={listing.title} price={listing.price} image={listing.image} />
        ))}
      </ListingsContainer>
    </MainPageContainer>
  );
};

// export default MainPage;
