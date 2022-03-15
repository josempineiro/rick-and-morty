import React, { forwardRef, useEffect } from "react";
import {
  XIcon,
  ExclamationCircleIcon,
  CheckCircleIcon,
  ExclamationIcon,
} from "@heroicons/react/outline";
import Button, { ButtonProps } from "components/ui/Button";
import styles from "./Notification.module.css";

export type NotificationType = {
  id: string;
  title?: string;
  message?: string;
  visible?: boolean;
  type?: "success" | "error" | "info";
  actions?: ButtonProps[];
  audio?: string;
};

type NotificationProps = {
  notification: NotificationType;
  onClose: Function;
};

const NotificationIcon = ({
  notification,
}: {
  notification: NotificationType;
}) => {
  switch (notification.type) {
    case "success":
      return (
        <CheckCircleIcon
          className="h-6 w-6 text-green-400"
          aria-hidden="true"
        />
      );
    case "info":
      return (
        <ExclamationCircleIcon
          className="h-6 w-6 text-blue-400"
          aria-hidden="true"
        />
      );
    case "error":
      return (
        <ExclamationIcon className="h-6 w-6 text-red-400" aria-hidden="true" />
      );
    default:
      return null;
  }
};

const Notification = (
  { notification, onClose }: NotificationProps,
  ref: React.RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    if (notification.audio) {
      new Audio(notification.audio).play();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (notification.message || notification.actions || notification.title) {
    return (
      <div ref={ref} className={styles.wrapper}>
        <div className={styles.icon}>
          <NotificationIcon notification={notification} />
        </div>
        <div className={styles.body}>
          <p className={styles.title}>{notification.title}</p>
          <p className={styles.message}>{notification.message}</p>
          {notification.actions && (
            <div className={styles.footer}>
              {notification.actions.map((action, index) => (
                <Button key={index} size="small" variant="clear" {...action} />
              ))}
            </div>
          )}
        </div>
        <div className={styles.closeBtn}>
          <button
            className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            onClick={() => {
              onClose(notification);
            }}
          >
            <span className="sr-only">Close</span>
            <XIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    );
  }
  return <div ref={ref}></div>;
};

export default forwardRef(Notification);
