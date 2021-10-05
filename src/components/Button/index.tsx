import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variation?: "primary" | "secondary";
}

function Button({ children, variation = "primary", ...props }: IButton) {
  return (
    <>
      <ButtonContainer variation={variation} {...props}>
        {children}
      </ButtonContainer>
    </>
  );
}

export default Button;
