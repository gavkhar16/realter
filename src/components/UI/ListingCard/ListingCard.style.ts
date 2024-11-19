import styled from 'styled-components';

export const ListingsContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 1.5rem;
justify-content: center;
`;

export const ListingCardContainer = styled.div`
background-color: #1a1a1a;
color: #f0f0f0;
display: flex;
flex-wrap: wrap;
justify-content: center;
width: 300px;
padding: 1.5rem;
border-radius: 10px;
box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.6);
transition: transform 0.3s, box-shadow 0.3s;

&:hover {
  transform: scale(1.05);
  box-shadow: 0px 0px 20px rgba(255, 215, 0, 0.6);
}
`;

export const ListingImage = styled.img`
width: 100%;
height: 200px;
border-radius: 8px;
object-fit: cover;
`;

export const ListingTitle = styled.h2`
font-size: 1.5rem;
margin: 1rem 0;
color: #f8f8f8;
`;

export const ListingPrice = styled.p`
font-size: 1.2rem;
color: #d4af37;
font-weight: bold;
`;
export const LikeButton = styled.button`
  background-color: #ff4d4f; /* Красный цвет для кнопки */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e84142; /* Цвет при наведении */
  }

  &:active {
    background-color: #c73133; /* Цвет при нажатии */
  }
`;
export const PhotoGallery = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Photo = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 12px;
`;