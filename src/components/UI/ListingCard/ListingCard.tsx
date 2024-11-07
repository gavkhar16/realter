import React from 'react';
import { ListingCardContainer,ListingImage,ListingTitle,ListingPrice } from '../../../pages/MainPage/MainPage.style';

interface ListingCardProps {
  title: string;
  price: string;
  image: string;
}

const ListingCard: React.FC<ListingCardProps> = ({ title, price, image }) => (
  <ListingCardContainer>
    <ListingImage src={image} alt={title} />
    <ListingTitle>{title}</ListingTitle>
    <ListingPrice>{price}</ListingPrice>
  </ListingCardContainer>
);

export default ListingCard;
