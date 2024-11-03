import styled from "styled-components";

export const StyledLinktext=styled.div`

  align-self: flex-end; 
  margin-top: 10px;
  text-decoration: none;
  margin-bottom: 20px;
  
  &:hover {
    background-color: ${(props)=>props.theme.colors.white};
  }
a{
    cursor: pointer;
    color:${(props)=>props.theme.colors.darkgray}; 
}
span{
    color: ${(props)=>props.theme.colors.darkgray}; 
}`


