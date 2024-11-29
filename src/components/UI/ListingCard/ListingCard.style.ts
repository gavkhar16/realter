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
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
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
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;


export const PaginationButton = styled.button<{ isActive?: boolean }>`
  margin: 0 5px;
  padding: 10px;
  border: none;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? "#D5D5D5" : "#4D4D4D")};
  color: ${({ isActive }) => (isActive ? "#fff" : "#000")};
  border-radius: 4px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const Loader = styled.div`
/* HTML: <div class="loader"></div> */
.loader {
  width: 120px;
  height: 20px;
  -webkit-mask: radial-gradient(circle closest-side,#000 94%,#0000) left/20% 100%;
  background: linear-gradient(#000 0 0) left/0% 100% no-repeat #ddd;
  animation: l17 2s infinite steps(6);
}
@keyframes l17 {
    100% {background-size:120% 100%}
}`