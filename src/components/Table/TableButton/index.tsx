import React, { ButtonHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons";
import { TableButtonContainer } from "./styles";

type TableButtonProps = {
  icon?: React.ComponentType<IconBaseProps>;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function TableButton({ icon: Icon, ...props }: TableButtonProps) {
  return (
    <TableButtonContainer variation="secondary" {...props}>
      {Icon && <Icon />}
    </TableButtonContainer>
  );
}

export default TableButton;
