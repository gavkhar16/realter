import styled, { css } from "styled-components";

export const StyleLoginPage = styled.div<{ isNightMode: boolean }>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-size: cover;
  background-position: center;
  opacity: 0.95;

  ${({ isNightMode }) =>
    isNightMode
      ? css`
          background-color: #121212;
          color: #e0e0e0;
          background-image: url('https://new-york.realestate/ru/uploads/images/2022-04/manh001.jpg');
          filter: grayscale(100%);
        `
      : css`
          background-color: #ffffff;
          color: #000000;
          background-image: url('/public/first.webp');
        `}
`;

export const ThemeToggleButton = styled.button`
  margin-top: 2rem;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 5px;
  background-color: #005fa3;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #004080;
    transform: scale(1.05);
  }
`;
