import styled, { css } from "styled-components";

interface StyledInputProps {
  $isError?: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
  width: 300px;
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

export const ErrorText = styled.div`
  color: ${(props) => props.theme.colors.red};
  font-size: 0.875rem;
  margin-top: 5px;
`;
