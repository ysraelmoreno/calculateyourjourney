import styled, { css } from "styled-components";

import Button from "../../Button";

export const TableButtonContainer = styled(Button)`
  ${(props) =>
    props.variation &&
    css`
      border: none;
      font-size: 25px;
      color: var(--primary-dark);
    `}
`;
