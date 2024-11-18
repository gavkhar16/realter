import styled, { keyframes } from 'styled-components';

const neonGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.8), 0 0 30px rgba(0, 0, 255, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 1), 0 0 40px rgba(0, 0, 255, 1);
  }
`;

export const FavoritesContainer = styled.div`
  background: radial-gradient(circle, #000 60%, #333 100%);
  color: #C6C3B5;
  min-height: 100vh;
  position: relative;
  padding: 20px;
  overflow: hidden;

  h1{
    color: ${(props)=>props.theme.colors.white};
    font-size: 3rem;
    font-weight: 800;
  text-align: center;
  margin-bottom: 40px;
  font-family: 'Courier New', Courier, monospace;
  text-shadow: 0 0 5px #fff, 0 0 10px rgba(0, 0, 255, 0.8);
  }
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


export const FavoritesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
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
