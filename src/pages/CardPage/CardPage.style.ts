import styled from "styled-components";

export const SCarsPage = styled.div`
  background-image: url('/public/cardpage.webp');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center; // Центрирование контента по горизонтали
  justify-content: center; // Центрирование контента по вертикали
  min-height: 100vh;

  p {
    margin-top: 20px;
    color: #646B63;
  }

  h1 {
    color: #ECF0F1;
    font-weight: bold;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  }
`;

export const CardTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: #ECF0F1;
`;

export const CardPrice = styled.p`
  font-size: 1.5rem;
  color: #F39C12;
  margin-top: 10px;
`;

export const CardLocation = styled.p`
  font-size: 1.2rem;
  color: #7F8C8D;
  margin-top: 10px;
`;

export const CardArea = styled.p`
  font-size: 1.2rem;
  color: #7F8C8D;
  margin-top: 10px;
`;

export const CardImage = styled.img`
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 2rem;
  color: #ECF0F1;
`;
