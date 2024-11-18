import { headerNavMenuItem } from "../Arrays/HeaderNavMenuItem";
import { Logo } from "../Logo/Logo";
import { SearchForm } from "../Search Form/SearchForm";
import { StyleHeader } from "./Headir.style";
import { NavMenuElement } from "./NavMenuElement";

export const Headerstyletsts = () => {
  return (
    <StyleHeader>
      <div className="top_part">
        <SearchForm />
        <Logo />
        <div>
          <a href="sign-up">sign up</a>
          <a href="/">sign in</a>
        </div>
      </div>
      <div className="bottom-part">
        <ul className="header-nav-menu">
          <li>
            <a href="">FEATURED</a>
          </li>
          <li>
            <a href="">CHARTS</a>
          </li>
          <li>
            <a href="">VIDEOS</a>
          </li>
          <li>
            <a href="">COMMUNITY</a>
          </li>
          <span className="header-span"></span>
          <li>
            <a href="">PROMOTE YOUR MUSIC</a>
          </li>
          <span className="header-span"></span>
          {headerNavMenuItem.map((elem, index) => (
            <NavMenuElement
              href={elem.href}
              viewBox={elem.viewBox}
              pathData={elem.pathData}
              socialName={elem.socialName}
              key={index}
            />
          ))}
        </ul>
      </div>
    </StyleHeader>
  );
};
