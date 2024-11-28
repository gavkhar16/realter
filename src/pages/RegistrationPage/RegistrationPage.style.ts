import styled, { css } from "styled-components";

export const StyleRegistrationPage = styled.div<{ isNightMode: boolean }>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-size: cover;
  background-position: center;
  opacity: 0.9;

  ${({ isNightMode }) =>
    isNightMode
      ? css`
          background-color: #0d0d0d;
          color: #f0f0f0;
          background-image: url('/public/image.png');
        `
      : css`
          background-color: #f5f5f5;
          color: #0d0d0d;
          background-image: url('/centraPark.png');

        `} 
`;

export const ThemeToggleButton = styled.button`
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #007acc;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005fa3;
  }
`;
