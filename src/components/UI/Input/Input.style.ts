import styled, { css } from "styled-components";

interface StyledInputProps {
  $isError?: boolean; // Используйте знак доллара перед именем, если это необходимо для стилевого компонента
}

export const StyledInput = styled.input<StyledInputProps>`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
  width: 300px; /* Ширина поля ввода */
  font-size: 1rem;

  ${(props) =>
    props.$isError &&
    css`
      border: 2px solid ${(props) => props.theme.colors.red};
      color: ${(props) => props.theme.colors.red};
    `}

  &::placeholder {
    color: #aaa; 
  }
`;
