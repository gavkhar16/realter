import styled from "styled-components";

export const StyledLinktext = styled.div`
  align-self: flex-end;
  margin-top: 10px;
  margin-bottom: 20px;
  text-decoration: none;

  a {
    cursor: pointer;
    color: ${(props) => props.theme.colors.darkgray};
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.colors.darkgray}; /* Серый цвет при наведении */
    }
  }

  span {
    color: ${(props) => props.theme.colors.darkgray};

    &:hover {
      color: ${(props) => props.theme.colors.darkgray}; /* Серый цвет при наведении */
    }
  }
`;
