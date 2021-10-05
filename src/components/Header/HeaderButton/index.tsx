import { useCallback } from "react";

import { MdNotificationsActive, MdNotificationsOff } from "react-icons/md";

import useNotifications from "../../../hooks/useNotifications";

import Button from "../../Button";

function HeaderButton() {
  const { setNotification, enabled } = useNotifications();

  const handleNotification = useCallback(() => {
    setNotification();
  }, [setNotification]);

  return (
    <>
      <Button onClick={handleNotification}>
        {enabled ? (
          <>
            <MdNotificationsActive /> NOTIFICATIONS ON
          </>
        ) : (
          <>
            <MdNotificationsOff /> NOTIFICATIONS OFF
          </>
        )}
      </Button>
    </>
  );
}

export default HeaderButton;
