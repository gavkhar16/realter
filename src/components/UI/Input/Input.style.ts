import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
  width: 300px; /* Ширина поля ввода */
  font-size: 1rem;

  &::placeholder {
    color: #aaa; /* Цвет текста в placeholder */
  }
`;
