import React from "react";
import { ButtonWrapper } from "./ChangeTheme.style";

 type ChangeThemeProps = {
  isNightMode: boolean;
  toggleTheme: () => void;
};

export const ChangeTheme: React.FC<ChangeThemeProps> = ({ isNightMode, toggleTheme }) => {
  return (
    <ButtonWrapper onClick={toggleTheme}>
      <img
        src={isNightMode ? "/public/day.png" : "/public/nig.png"}
        alt={isNightMode ? "Ночной режим" : "Дневной режим"}
      />
    </ButtonWrapper>
  );
};


