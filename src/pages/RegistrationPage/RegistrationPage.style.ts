import styled from 'styled-components';

export const StyleRegistrationPage = styled.div`
  background-color: #0d0d0d;
  color: #f0f0f0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-image: url('https://files.oaiusercontent.com/file-sFerhOiE8WauOrXItL8RUO2f?se=2024-11-07T14%3A11%3A09Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D9522db0f-19de-411f-ba19-4e81725df4e3.webp&sig=4b/makQ1yigL/BKeL4V6pvtgpm7opY2paBpBAzMjDGw%3D');
  background-size: cover;
  background-position: center;
  opacity: 0.9;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #f0f0f0;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(13, 13, 13, 0.9);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.7);
  max-width: 400px;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: #333333;
  color: #f0f0f0;
  font-size: 1rem;
  &::placeholder {
    color: #b0b0b0;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #4d4d4d;
  color: #f0f0f0;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #666666;
    transform: scale(1.05);
  }
`;

export const InfoText = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #b0b0b0;
`;
