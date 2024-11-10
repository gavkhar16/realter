import React from 'react';
import { StyledInput,  ErrorMeassage, } from './Input.style';

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  errorText?: string;
  isError?: boolean;
  isNightMode?: boolean;
}

export const Input: React.FC<IInput> = ({ type, placeholder, errorText, isError, isNightMode, ...props }) => {
  return (
    <div>
      <StyledInput
        $isError={isError}
        type={type}
        placeholder={placeholder}
        isNightMode={isNightMode}
        {...props}
      />
      {isError && <ErrorMeassage>{errorText}</ErrorMeassage>}
    </div>
  );
};


