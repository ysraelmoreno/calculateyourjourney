import useSummary from "../../hooks/useSummary";
import { SummaryContainer, SummaryItem } from "./styles";
import moment from "moment";
import { useEffect, useState } from "react";
function Summary() {
  const [entry, setEntry] = useState("0");
  const [leave, setLeave] = useState("0");
  const { journey } = useSummary();

  useEffect(() => {
    if (journey) {
      if (journey.length === 0) return;
      const entryHour = moment(journey[journey.length - 1].hour).format("LT");
      const leaveHour = moment(journey[journey.length - 1].leaveHour).format(
        "LT"
      );

      setEntry(entryHour);
      setLeave(leaveHour);
    }
  }, [journey]);

  return (
    <>
      <SummaryContainer>
        <SummaryItem>
          <p>Journey (mensal)</p>
          <h3>{`${journey ? 8 * journey.length : 0}h`}</h3>
        </SummaryItem>
        <SummaryItem>
          <p>Entry</p>
          <h3>{entry}</h3>
        </SummaryItem>
        <SummaryItem>
          <p>Hour to leave</p>
          <h3>{leave}</h3>
        </SummaryItem>
      </SummaryContainer>
    </>
  );
}

export default Summary;
