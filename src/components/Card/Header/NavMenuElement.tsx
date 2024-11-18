import { StyleNavMenuElement } from "./NavMenuElement.style";

interface INavMenuElementProps {
  href: string;
  viewBox: string;
  pathData: string;
  socialName: string;
}

export const NavMenuElement = ({
  href,
  viewBox,
  pathData,
  socialName,
}: INavMenuElementProps) => {
  return (
    <StyleNavMenuElement>
      <li className="nav_menu-item">
        <a href={href} target="_blank">
          <svg
            className="inline_icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox={viewBox}
          >
            <path d={pathData}></path>
          </svg>
          <span className="nav_menu-link-social_text">{socialName}</span>
        </a>
      </li>
    </StyleNavMenuElement>
  );
};
