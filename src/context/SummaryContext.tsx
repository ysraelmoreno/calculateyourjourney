import { useEffect } from "react";
import { createContext, useState } from "react";
import { IData } from "../components/Table";

interface ISummaryContext {
  journey?: IData[];
  setJourney: (journey: IData[]) => void;
}

interface ISummaryProvider {
  children: React.ReactNode;
}

export const SummaryContext = createContext<ISummaryContext>(
  {} as ISummaryContext
);

export function SummaryProvider({ children }: ISummaryProvider) {
  const [journey, setJourney] = useState<IData[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("data");
    if (data) {
      setJourney(JSON.parse(data));
    }
  }, []);

  return (
    <SummaryContext.Provider value={{ journey, setJourney }}>
      {children}
    </SummaryContext.Provider>
  );
}
