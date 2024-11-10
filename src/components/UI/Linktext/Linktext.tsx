import React from "react";
import { StyledLinktext } from "./Linktext.style";

interface TLinkText {
  regularText?: string;
  linkText: string;
  onLinkClick?: () => void;
  isNightMode?: boolean;
}

export const Linktext: React.FC<TLinkText> = ({
  regularText,
  linkText,
  onLinkClick,
  isNightMode,
}) => {
  return (
    <StyledLinktext isNightMode={isNightMode}>
      <span>
        {regularText}
        <a onClick={onLinkClick} role="button" tabIndex={0}>
          {linkText}
        </a>
      </span>
    </StyledLinktext>
  );
};
