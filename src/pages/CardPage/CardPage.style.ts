import styled from "styled-components";

export const CardPageContainer = styled.div<{ isNightMode: boolean }>`
  background-color: ${({ isNightMode }) => (isNightMode ? "#1a1a1a" : "#ffffff")};
  color: ${({ isNightMode }) => (isNightMode ? "#e6e6e6" : "#333333")};
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const CardItem = styled.div<{ isNightMode: boolean }>`
  background-color: ${({ isNightMode }) => (isNightMode ? "#333333" : "#f9f9f9")};
  color: ${({ isNightMode }) => (isNightMode ? "#e6e6e6" : "#333333")};
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`;

export const ThemeToggleButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  background-color: #4a4a4a;
  color: #ffffff;

  &:hover {
    opacity: 0.8;
  }
`;
