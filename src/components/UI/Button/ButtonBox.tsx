import React from "react";
import { SButton } from "./Button.style";

interface ButtonProps {
  isPrimary?: boolean;
  buttonText: string;
}

export const Button: React.FC<ButtonProps> = ({ isPrimary, buttonText }) => (
  <SButton isPrimary={isPrimary}>{buttonText}</SButton>
);
