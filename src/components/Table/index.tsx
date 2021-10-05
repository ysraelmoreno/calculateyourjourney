import { useState, useCallback, useEffect } from "react";
import { v4 } from "uuid";
import moment from "moment";
import useNotifications from "../../hooks/useNotifications";
import toast from "react-hot-toast";
import { TableContainer, TableHeader, TableContent } from "./styles";

import TableButton from "./TableButton";
import TableItem from "./TableItem";

export interface IData {
  id: string;
  type: string;
  hour: string;
  leaveHour: string;
  date: Date;
  sent: boolean;
}

function Table() {
  const [data, setData] = useState<IData[]>([]);
  const { sendNotification, enabled } = useNotifications();

  const handleEntry = useCallback(() => {
    if (!enabled) {
      toast(
        "Oops, it looks like you don't had enabled the notifications, if you want to receive a notificatio, please, press the button on the header"
      );
    }

    const entryHour = moment().format("LT");
    const leaveHour = moment().add(9, "hours").add(48, "minutes").format("LT");

    const newData = {
      id: v4(),
      type: "Entrada",
      date: new Date(),
      hour: entryHour,
      leaveHour,
      sent: false,
    };

    if (sendNotification) {
      sendNotification(
        "Batida realizada",
        `Agora lembre de bater o pontos às ${leaveHour}`
      );
    }

    localStorage.setItem("data", JSON.stringify([...data, newData]));
    setData([...data, newData]);
  }, [data, enabled, sendNotification]);

  useEffect(() => {
    const dataLocal = localStorage.getItem("data");

    if (dataLocal) {
      setData(JSON.parse(dataLocal));
    }
  }, []);

  useEffect(() => {
    let sent = false;

    if (data.length === 0) return;

    const intervalId = setInterval(() => {
      if (sent) return;
      const now = moment().format("LT");

      if (now >= data[data.length - 1].leaveHour) {
        sent = true;
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
  }, [sendNotification, data]);

  return (
    <TableContainer>
      <TableHeader>
        <span>Lista de batidas ({`${data.length} batidas feitas`})</span>
        <TableButton onClick={handleEntry} />
      </TableHeader>
      <TableContent>
        <TableItem entry={data} />
      </TableContent>
    </TableContainer>
  );
}

export default Table;
