import React, { forwardRef, useEffect } from "react";
import {
  XIcon,
  ExclamationCircleIcon,
  CheckCircleIcon,
  ExclamationIcon,
} from "@heroicons/react/outline";
import Button, { ButtonProps } from "components/ui/Button";

export type NotificationType = {
  id: string;
  title: string;
  message?: string;
  visible?: boolean;
  type: "success" | "error" | "info";
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
    setTimeout(() => {
      onClose(notification);
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      ref={ref}
      className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"
    >
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <NotificationIcon notification={notification} />
          </div>
          <div className="ml-3 w-0 flex-1 pt-0.5">
            <p className="text-sm font-medium text-gray-900">
              {notification.title}
            </p>
            <p className="mt-1 text-sm text-gray-500">{notification.message}</p>
            {notification.actions && (
              <div className="mt-3 flex space-x-7">
                {notification.actions.map((action, index) => (
                  <Button
                    key={index}
                    size="small"
                    variant="clear"
                    {...action}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="ml-4 flex-shrink-0 flex">
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
      </div>
    </div>
  );
};

export default forwardRef(Notification);
