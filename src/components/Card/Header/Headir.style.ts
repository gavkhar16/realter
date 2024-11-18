import styled from "styled-components";
import { colors } from "../../util/colors";

export const StyleHeadir = styled.div`
  min-width: 100%;

  .top_part {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    background-color: ${colors.yellow};
    height: 41px;
    justify-content: space-between;
    align-items: center;
    div {
      a:first-child {
        text-decoration: none;
        text-transform: uppercase;
        font-size: 0.75em;
        color: ${colors.black};
        font-family: Programme, sans-serif;
      }
      a:nth-child(2) {
        text-decoration: none;
        margin-right: 10px;
        margin-left: 10px;
        text-transform: uppercase;
        font-family: Programme, sans-serif;
        font-size: 0.75em;
        color: ${colors.black};
      }
    }
  }
  .bottom-part {
    height: 40px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${colors.black};
    .header-nav-menu {
      margin: 0;
      display: flex;
      flex-direction: row;
      list-style-type: none;
      align-items: center;
      li {
        padding: 0 16px;
        text-decoration: none;
        font-size: 13.125px;

        a {
          color: #fff;
          text-decoration: none;
        }
        a:hover {
          color: ${colors.yellow};
        }
      }
      span {
        background-color: #fff;
        width: 2px;
        height: 20px;
      }
    }
  }
`;
