import { Dialog as HeadlesUIDialog } from "@headlessui/react";
import Button, { ButtonProps } from "components/ui/Button";
import Modal, { ModalProps } from "components/ui/overlays/Modal";

interface Dialog extends ModalProps {
  title?: string;
  message?: string;
  icon?: React.ReactNode;
  accept?: ButtonProps;
  cancel?: ButtonProps;
}

function Dialog({ icon, title, message, cancel, accept, ...props }: Dialog) {
  return (
    <Modal {...props}>
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          {icon}
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            {title && (
              <HeadlesUIDialog.Title
                as="h3"
                className="text-lg leading-6 font-medium text-gray-900"
              >
                {title}
              </HeadlesUIDialog.Title>
            )}
            {message && (
              <div className="mt-2">
                <p className="text-sm text-gray-500">{message}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <Button
          type="button"
          {...accept}
          className="w-full sm:ml-3 sm:w-auto sm:text-sm"
        >
          {accept.children || "Accept"}
        </Button>
        {cancel && (
          <Button
            type="button"
            {...cancel}
            className="mt-3 w-full sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            {cancel.children || "Cancel"}
          </Button>
        )}
      </div>
    </Modal>
  );
}

export default Dialog;
