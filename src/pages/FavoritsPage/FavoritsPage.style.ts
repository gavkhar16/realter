import styled, { keyframes } from "styled-components";

const neonGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.8), 0 0 30px rgba(0, 0, 255, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 1), 0 0 40px rgba(0, 0, 255, 1);
  }
`;

export const FavoritesContainer = styled.div`
  background: radial-gradient(circle, #0d0d0d 60%, #333 100%);
  color: #c6c3b5;
  min-height: 100vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const NeonBorder = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 10px rgba(0, 0, 255, 0.7);
  animation: ${neonGlow} 2s infinite alternate;
  pointer-events: none;
`;

export const FavoritesTitle = styled.h1`
  color: #ffffff;
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 40px;
  font-family: "Courier New", Courier, monospace;
  text-shadow: 0 0 5px #fff, 0 0 10px rgba(0, 0, 255, 0.8);
`;

export const FavoritesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  padding: 20px;
`;

export const FavoriteCard = styled.div`
  background: #1a1a1a;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.5);
  }

  h2 {
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    color: #bbb;
    margin: 5px 0;
  }

  button {
    background-color: #ff4d4d;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background-color: #ff6666;
    }
  }
`;

export const EmptyMessage = styled.p`
  font-size: 1.5rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  animation: blink 1.5s infinite;

  @keyframes blink {
    50% {
      opacity: 0.5;
    }
  }
`;
