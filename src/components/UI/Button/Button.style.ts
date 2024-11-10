import styled, { css } from 'styled-components';

interface StyledButtonProps {
  $isPrimary?: boolean;
  $isNightMode?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const SButton = styled.button<StyledButtonProps>`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  width: 200px;

  ${(props) =>
    props.$isPrimary
      ? css`
          background-color: ${props.$isNightMode ? '#333' : '#fff'};
          color: ${props.$isNightMode ? '#f0f0f0' : '#333'};
        `
      : css`
          background-color: ${props.$isNightMode ? '#555' : '#7f8b6a'};
          color: ${props.$isNightMode ? '#f0f0f0' : '#000'};
        `}

  &:hover {
    background-color: ${props => props.$isNightMode ? '#D5D5D5' : '#587c52'};
    color:${props => props.$isNightMode ? '#4D4D4D' : '#C9CED1'};
  }
`;
