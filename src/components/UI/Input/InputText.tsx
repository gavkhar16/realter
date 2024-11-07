import React from "react";
import { StyledInput, ErrorText } from "./Input.style";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  errorText?: string;
  isError?: boolean;
  id?: string;
}

export const Input = ({
  type,
  placeholder,
  errorText,
  isError,
  id,
  ...props
}: IInput) => {
  return (
    <div>
      <StyledInput
        $isError={isError}
        type={type}
        placeholder={placeholder}
        id={id}
        {...props}
      />
      {isError && <ErrorText>{errorText}</ErrorText>}
    </div>
  );
};
