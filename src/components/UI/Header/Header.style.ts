import styled from 'styled-components';

export const HeaderContainer = styled.header`
 position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  padding: calc(1vw + 6.4px) calc(12vw - 35px);
  background-color: #333;
  color: #fff;
  backdrop-filter: blur(8px);
  color: black;
  box-shadow: 0 0 10px white;
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const LogoContainer = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 5px;
  width: 100%;
  flex: 1 1 auto;
  position: relative;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  color: #fff;
  margin-left: 5px;
  width: 500px;
  padding-left: 63px;
  width: 100%;
    max-width: 360px;
`;
