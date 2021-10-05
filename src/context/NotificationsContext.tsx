import { useEffect } from "react";
import { createContext, useState, useCallback } from "react";

interface INotifications {
  enabled?: boolean;
  sendNotification?: (title: string, message: string) => void;
  setNotification: () => void;
}

interface INotificationProvider {
  children: React.ReactNode;
}

export const NotificationsContext = createContext<INotifications>(
  {} as INotifications
);

export function NotificationProvider({ children }: INotificationProvider) {
  const [enabled, setEnabled] = useState(false);

  const sendNotification = useCallback(
    (title: string, message: string) => {
      if (!enabled) return;
      return new Notification(title, { body: message });
    },
    [enabled]
  );

  const setNotification = useCallback(() => {
    if (!enabled) {
      setEnabled(true);
      localStorage.setItem("notification-status", JSON.stringify(true));

      return new Notification("Notification activated", {
        body: "You can now receive notifications",
      });
    }

    setEnabled(false);
    localStorage.setItem("notification-status", JSON.stringify(false));
    return new Notification("Notifications disabled", {
      body: "You can activate any time notifications at the dashboard",
    });
  }, [enabled]);

  useEffect(() => {
    const status = localStorage.getItem("notification-status");
    if (status) {
      setEnabled(JSON.parse(status));
    }
  }, [setEnabled]);

  return (
    <NotificationsContext.Provider
      value={{ setNotification, enabled, sendNotification }}
    >
      {children}
    </NotificationsContext.Provider>
  );
}
