import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainPageContainer } from './MainPage.style';
import { ListingCard } from '../../components/UI/ListingCard/ListingCard';
import Heading from '../../components/UI/Heading/Heading';
import { Header } from '../../components/Card/Header/Header';

export const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const listings = [
    {
      id: 1,
      title: 'Роскошный пентхаус на Манхэттене',
      price: '$3,000,000',
      image: 'https://www.datocms-assets.com/121312/1710946359-53west53_gallery_28.jpg?auto=format%2Ccompress&fit=max&h=3000&w=2000',
      address: '53 West 53rd St, New York, NY',
    },
    {
      id: 2,
      title: 'Апартаменты с видом на Центральный парк',
      price: '$2,200,000',
      image: 'https://www.datocms-assets.com/121312/1710946399-53west53_gallery_30.jpg?auto=format%2Ccompress&fit=max&h=3000&w=2000',
      address: 'Central Park West, New York, NY',
    },
    // Добавьте больше данных для примера
  ];

  const [isNightMode, setIsNightMode] = useState(false);

  const toggleTheme = () => setIsNightMode(!isNightMode);

  const handleCardClick = (id: number) => {
    navigate(`/card/${id}`); // Переход по динамическому маршруту
  };

  return (
    <MainPageContainer>
      <Header />
      <Heading headingText="Недвижимость в Нью-Йорке" headingType="h1" />
      {listings.map((listing) => (
        <div key={listing.id} onClick={() => handleCardClick(listing.id)}>
          <ListingCard
            title={listing.title}
            price={listing.price}
            image={listing.image}
            address={listing.address}
          />
        </div>
      ))}
    </MainPageContainer>
  );
};
