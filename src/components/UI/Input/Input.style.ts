import styled, { css } from "styled-components";

interface StyledInputProps {
  $isError?: boolean;
  isNightMode?: boolean;
}
export const ErrorMeassage = styled.p`
  color: ${(props) => props.theme.colors.red};
  margin-top: 10px;
`;
export const StyledInput = styled.input<StyledInputProps>`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
  width: 300px;
  font-size: 1rem;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  ${(props) =>
    props.$isError &&
    css`
      border: 1px solid ${(props) => props.theme.colors.red};
      colors: ${(props) => props.theme.colors.red};
    `}

  ${({ isNightMode }) =>
    isNightMode
      ? css`
          background-color: #333333;
          color: #f0f0f0;
          &::placeholder {
            color: #b0b0b0;
          }
        `
      : css`
          background-color: #e0e0e0;
          color: #333333;
          &::placeholder {
            color: #808080;
          }
        `}
`;

export const ErrorText = styled.div`
  color: ${(props) => props.theme.colors.red};
  font-size: 0.875rem;
  margin-top: 5px;
`;
