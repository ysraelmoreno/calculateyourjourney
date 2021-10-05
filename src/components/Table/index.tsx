import { useState, useCallback, useEffect } from "react";
import { v4 } from "uuid";
import moment from "moment";
import useNotifications from "../../hooks/useNotifications";
import toast from "react-hot-toast";
import { TableContainer, TableHeader, TableContent } from "./styles";
import { FiPlusCircle, FiXCircle } from "react-icons/fi";

import TableButton from "./TableButton";
import TableItem from "./TableItem";
import useSummary from "../../hooks/useSummary";

export interface IData {
  id: string;
  type: string;
  hour: Date;
  leaveHour: Date;
  date: Date;
  sent: boolean;
}

function Table() {
  const [data, setData] = useState<IData[]>([]);
  const { sendNotification, enabled } = useNotifications();
  const { setJourney } = useSummary();

  const handleClean = useCallback(() => {
    toast.success("Data cleaned with success");
    setData([]);
    setJourney([]);
    localStorage.setItem("data", JSON.stringify([]));
  }, [setJourney]);

  const handleEntry = useCallback(() => {
    if (!enabled) {
      toast(
        "Oops, it looks like you don't had enabled the notifications, if you want to receive a notification, please press the button on the header"
      );
    }

    if (enabled) {
      toast.success("Entry registered with success");
    }

    const entryHour = moment().toDate();
    const leaveHour = moment().add(9, "hours").add(48, "minutes").toDate();

    const newData = {
      id: v4(),
      type: "Entrada",
      date: entryHour,
      hour: entryHour,
      leaveHour,
      sent: false,
    };

    if (sendNotification) {
      sendNotification(
        "Batida realizada",
        `Agora lembre de bater o pontos às ${moment(leaveHour).format("LT")}`
      );
    }

    localStorage.setItem("data", JSON.stringify([...data, newData]));

    setData([...data, newData]);
    setJourney([...data, newData]);
  }, [data, enabled, sendNotification, setJourney]);

  useEffect(() => {
    const dataLocal = localStorage.getItem("data");

    if (dataLocal) {
      setJourney(JSON.parse(dataLocal));
      setData(JSON.parse(dataLocal));
    }
  }, [setJourney]);

  useEffect(() => {
    let sent = false;

    if (data.length === 0) return;

    const intervalId = setInterval(() => {
      if (sent) return;
      const now = moment().hour();

      if (now >= moment(data[data.length - 1].leaveHour).hour()) {
        sent = true;

        const newData = data.map((item) => {
          item.sent = true;

          return item;
        });

        setData(newData);
        setJourney(newData);

        if (sendNotification) {
          sendNotification(
            "Expediente acabou",
            "Bata o ponto agora na Tardis e finalize o expediente"
          );
        }
      }
    }, 5000);

    if (sent) {
      const formatedTimes = data.map((item) => {
        return {
          ...item,
          sent: true,
        };
      });

      localStorage.setItem("data", JSON.stringify(formatedTimes));

      setData(formatedTimes);
      clearInterval(intervalId);
    }
  }, [sendNotification, data, setJourney]);

  return (
    <TableContainer>
      <TableHeader>
        <span>Lista de batidas ({`${data.length} batidas feitas`})</span>
        <div style={{ display: "flex" }}>
          <TableButton icon={FiXCircle} onClick={handleClean} />
          <TableButton icon={FiPlusCircle} onClick={handleEntry} />
        </div>
      </TableHeader>
      <TableContent>
        <TableItem entry={data} />
      </TableContent>
    </TableContainer>
  );
}

export default Table;
