import React from 'react';
import { SButton } from './Button.style'; 
interface ButtonProps {
  buttonText: string;
  isPrimary?: boolean;
  type?: 'button' | 'submit' | 'reset'; 
}

export const Button: React.FC<ButtonProps> = ({ buttonText, isPrimary, type = 'button' }) => {
  return (
    <SButton isPrimary={isPrimary} type={type}>
      {buttonText}
    </SButton>
  );
};
