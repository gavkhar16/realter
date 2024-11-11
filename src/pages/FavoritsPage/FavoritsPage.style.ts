import styled from "styled-components";

export const FavoritesContainer = styled.div<{ isNightMode: boolean }>`
  background-color: ${({ isNightMode }) => (isNightMode ? "#1a1a1a" : "#ffffff")};
  color: ${({ isNightMode }) => (isNightMode ? "#e6e6e6" : "#333333")};
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const FavoriteItem = styled.div<{ isNightMode: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ isNightMode }) => (isNightMode ? "#333333" : "#f9f9f9")};
  color: ${({ isNightMode }) => (isNightMode ? "#e6e6e6" : "#333333")};
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
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
