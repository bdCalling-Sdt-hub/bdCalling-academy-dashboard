/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Modal } from "antd";
import { ReactElement, ReactNode } from "react";
interface IModal {
  isOpen: boolean;
  closeModal: () => void;
  title: string | ReactNode;
  children: ReactElement;
  handleOk?: () => void;
  showCancelButton?: boolean;
  showOkButton?: boolean;
  confirmLoading?: any;
}
export default function CustomModal({
  isOpen,
  closeModal,
  title,
  children,
  handleOk,
  showOkButton = true,
  showCancelButton = true,
  confirmLoading,
}: IModal) {
  return (
    <div>
      <Modal
        confirmLoading={confirmLoading}
        title={title}
        open={isOpen}
        onOk={handleOk}
        onCancel={closeModal}
        cancelButtonProps={{
          style: { display: showCancelButton ? "inline" : "none" },
        }}
        okButtonProps={{ style: { display: showOkButton ? "inline" : "none" } }}
      >
        {children}
      </Modal>
    </div>
  );
}
