import styled from 'styled-components';

export const MainPageContainer = styled.div`
  background-color: #0d0d0d;
  color: #f0f0f0;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('/img/nyc-night-skyline.jpg');
  background-size: cover;
  background-position: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #e6e6e6;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`;

export const ListingsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;

export const ListingCardContainer = styled.div`
  background-color: #1a1a1a;
  color: #f0f0f0;
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
