import { useEffect, useState, Fragment } from "react";
import { Transition } from "@headlessui/react";
import Notification, { NotificationType } from "./Notification";

type NotifierProps = {};

const Notifier = (props: NotifierProps) => {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);
  function handleNotification(notificationEvent) {
    const notification = notificationEvent.detail;
    setNotifications((notifications) => [
      ...notifications.filter(
        (notificationItem) => notificationItem.id !== notification.id
      ),
      { ...notification, visible: true },
    ]);
  }

  function handleCloseNotification(notification) {
    setNotifications((notifications) =>
      notifications.map((notificationItem) =>
        notificationItem.id === notification.id
          ? { ...notification, visible: false }
          : notificationItem
      )
    );
  }

  const visibleNotifications = notifications.filter(
    (notification) => notification.visible
  );

  useEffect(() => {
    document.addEventListener("notification", handleNotification);
  }, []);

  return (
    <div
      aria-live="assertive"
      className="z-10 fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:pt-24 sm:items-start"
    >
      <div className="w-full z-10 flex flex-col items-center space-y-4 sm:items-end">
        {visibleNotifications.map((notification) => (
          <Transition
            key={notification.id}
            show={notification.visible}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Notification
              notification={notification}
              onClose={handleCloseNotification}
            />
          </Transition>
        ))}
      </div>
    </div>
  );
};

Notifier.notify = function (notification: NotificationType) {
  document.dispatchEvent(
    new CustomEvent("notification", {
      bubbles: true,
      cancelable: true,
      composed: false,
      detail: { id: new Date().getTime(), ...notification },
    })
  );
};

export default Notifier;
