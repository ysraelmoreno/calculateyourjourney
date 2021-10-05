import { SummaryContainer, SummaryItem } from "./styles";

function Summary() {
  return (
    <SummaryContainer>
      <SummaryItem>
        <p>Jornada (mensal)</p>
        <h3>176h</h3>
      </SummaryItem>
      <SummaryItem>
        <p>Entrada</p>
        <h3>08:00h</h3>
      </SummaryItem>
      <SummaryItem>
        <p>Saída</p>
        <h3>17:48h</h3>
      </SummaryItem>
    </SummaryContainer>
  );
}

export default Summary;
