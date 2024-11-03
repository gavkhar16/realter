import { StyledInput } from "./Input.style";

interface InputProps {
  type?: string;
  placeholder?: string;
  id?: string;
}

export const Input = ({ type, placeholder, id }: InputProps) => {
  return (
    <div>
      <StyledInput type={type} placeholder={placeholder} id={id} />
    </div>
  );
};
