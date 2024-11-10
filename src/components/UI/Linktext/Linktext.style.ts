import styled, { css } from "styled-components";

interface StyledLinktextProps {
  isNightMode?: boolean;
}

export const StyledLinktext = styled.div<StyledLinktextProps>`
  align-self: flex-end;
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: right;

  ${({ isNightMode }) =>
    isNightMode
      ? css`
          color: #f0f0f0; 
          
          a {
            color: #b0b0b0;
            &:hover {
              color: #d0d0d0;
            }
          }

          span {
            color: #b0b0b0;
            &:hover {
              color: #d0d0d0;
            }
          }
        `
      : css`
          color: #333333; 

          a {
            color: ${(props) => props.theme.colors.darkgray};
            &:hover {
              color: ${(props) => props.theme.colors.gray};
            }
          }

          span {
            color: ${(props) => props.theme.colors.darkgray};
            &:hover {
              color: ${(props) => props.theme.colors.gray};
            }
          }
        `}
`;
