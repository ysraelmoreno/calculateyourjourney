import styled from "styled-components";

export const TableItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 40px;

  border-radius: 0.5rem;

  width: 100%;
  background-color: var(--white);
  min-height: 60px;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

  & + div {
    margin-top: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
