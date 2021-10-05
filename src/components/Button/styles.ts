import styled, { css } from "styled-components";
interface IButtonProps {
  variation: "primary" | "secondary";
}

export const ButtonContainer = styled.button<IButtonProps>`
  height: 40px;
  padding: 10px 15px;
  display: flex;
  align-items: center;

  background-color: var(--primary-dark);

  color: var(--white);
  font-weight: bold;

  border: none;
  border-radius: 5px;

  transition: all 0.2s ease;
  &:hover {
    box-shadow: 0 0 15px 2px rgba(79, 77, 212, 0.5);
    filter: brightness(0.9);
  }

  svg {
    margin-right: 5px;
  }

  ${(props) =>
    props.variation === "secondary" &&
    css`
      background-color: transparent;
      color: var(--white);
      border: 1px solid var(--white);

      &:hover {
        filter: brightness(0.7);
      }
    `}
`;
