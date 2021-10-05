import { useContext } from "react";
import { NotificationsContext } from "../context/NotificationsContext";

function useNotifications() {
  const context = useContext(NotificationsContext);
  return context;
}

export default useNotifications;
