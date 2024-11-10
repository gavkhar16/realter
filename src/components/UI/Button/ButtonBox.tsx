import React from "react";
import { SButton } from "./Button.style";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  isPrimary?: boolean;
  isNightMode?: boolean;
}

export const Button = ({
  buttonText,
  isPrimary,
  isNightMode,
  ...props
}: ButtonProps) => {
  return (
    <SButton $isPrimary={isPrimary} $isNightMode={isNightMode} {...props}>
      {buttonText}
    </SButton>
  );
};
