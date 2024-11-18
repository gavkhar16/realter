// src/pages/CardPage/CardPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { ListingCard } from '../../components/UI/ListingCard/ListingCard';
import Heading from '../../components/UI/Heading/Heading';
import { SCarsPage } from './CardPage.style'; 

const listings = [
  {
    id: 1,
    title: 'Роскошный пентхаус на Манхэттене',
    price: '$3,000,000',
    image: 'https://www.datocms-assets.com/121312/1710946359-53west53_gallery_28.jpg?auto=format%2Ccompress&fit=max&h=3000&w=2000',
    address: '53 West 53rd St, New York, NY',
    description: 'Роскошный пентхаус с уникальными видами на Манхэттен.',
  },
  {
    id: 2,
    title: 'Апартаменты с видом на Центральный парк',
    price: '$2,200,000',
    image: 'https://www.datocms-assets.com/121312/1710946399-53west53_gallery_30.jpg?auto=format%2Ccompress&fit=max&h=3000&w=2000',
    address: 'Central Park West, New York, NY',
    description: 'Апартаменты с панорамным видом на Центральный парк.',
  },
];

const CardPage: React.FC = () => {
  const { id } = useParams(); // Получаем id из URL
  const property = listings.find((listing) => listing.id === Number(id)); // Преобразуем id в число

  if (!property) {
    return <div>Карточка не найдена</div>;
  }

  return (
    <SCarsPage>
      <Heading headingText={property.title} headingType="h1" />
      <ListingCard
        title={property.title}
        price={property.price}
        image={property.image}
        address={property.address}
      />
      <p>{property.description}</p>
    </SCarsPage>
  );
};

export default CardPage;
