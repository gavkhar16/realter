import styled from "styled-components";

export const StyleHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  padding: calc(1vw + 6.4px) calc(12vw - 35px); 
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) =>props.theme.colors.white };
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  
  .logo{
    font-size: 24px;
    font-weight: bold;
  }
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }
`;

export const SearchBaro = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin: 0 20px;
  max-width: 500px;

  input {
    flex: 1;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 4px 0 0 4px;
    background-color: ${({ theme }) => theme.inputBackground};
    color: ${({ theme }) => theme.text};

    &::placeholder {
      color: ${({ theme }) => theme.placeholder};
    }
  }

  img {
    width: 20px;
    height: 20px;
    padding: 5px;
    background-color: ${({ theme }) => theme.inputBackground};
    border: 1px solid ${({ theme }) => theme.border};
    border-left: none;
    border-radius: 0 4px 4px 0;
  }
`;

export const ThemeToggleButton = styled.button`
  margin-right: 20px;
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const FavoritesButton = styled.div`
  a {
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.buttonBackground};
    color: ${({ theme }) => theme.text};
    font-weight: bold;

    &:hover {
      background-color: ${({ theme }) => theme.buttonHoverBackground};
    }
  }
`;
