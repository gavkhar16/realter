import styled, { css } from "styled-components";

interface StyledButtonProps {
  isPrimary?: boolean;
  type?: 'button' | 'submit' | 'reset'; // Добавляем тип
}

export const SButton = styled.button<StyledButtonProps>`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 200px;

  ${(props) =>
    props.isPrimary
      ? css`
          background-color: ${(props) => props.theme.colors.white};
          color: red; /* Черный текст для видимости */
        `
      : css`
          background-color: ${(props) => props.theme.colors.black};
          color: white; /* Белый текст */
        `}

  &:hover {
    background-color: #0056b3; /* Цвет кнопки при наведении */
  }
`;
