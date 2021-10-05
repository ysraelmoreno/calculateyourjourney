import React, { ButtonHTMLAttributes } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { TableButtonContainer } from "./styles";

type TableButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function TableButton({ ...props }: TableButtonProps) {
  return (
    <TableButtonContainer variation="secondary" {...props}>
      <FiPlusCircle />
    </TableButtonContainer>
  );
}

export default TableButton;
