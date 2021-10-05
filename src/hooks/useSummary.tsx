import { useContext } from "react";
import { SummaryContext } from "../context/SummaryContext";

function useSummary() {
  const context = useContext(SummaryContext);
  return context;
}

export default useSummary;
