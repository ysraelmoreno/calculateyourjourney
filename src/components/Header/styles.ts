import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: var(--primary);
  padding: 20px;
  min-height: 250px;
`;

export const Content = styled.div`
  max-width: 1240px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 20%;
  }

  h1 {
    margin-left: 10px;
  }
`;
