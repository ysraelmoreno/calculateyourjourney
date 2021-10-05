import styled from "styled-components";

export const SummaryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  margin-top: -4rem;
`;

export const SummaryItem = styled.div`
  max-width: 320px;

  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;

  background-color: white;
  color: var(--text-color);

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

  h3 {
    font-size: 3rem;
    text-align: center;
  }
`;
