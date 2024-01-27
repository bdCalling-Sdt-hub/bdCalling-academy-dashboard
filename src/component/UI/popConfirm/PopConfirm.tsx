/* eslint-disable @typescript-eslint/no-explicit-any */
import { Popconfirm } from "antd";
import { ReactNode } from "react";
interface PopConfirmProps {
  children: ReactNode;
  title?: string;
  description?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  okText?: string;
  cancelText?: string;
}
const PopConfirm = ({
  children,
  title = "Are you sure?",
  description,
  onConfirm,
  onCancel,
  okText = "Yes",
  cancelText = "No",
}: PopConfirmProps) => {
  return (
    <Popconfirm
      okButtonProps={{ style: { backgroundColor: "#2492EB", color: "white" } }}
      title={title}
      description={description}
      onConfirm={onConfirm}
      onCancel={onCancel}
      okText={okText}
      cancelText={cancelText}
    >
      {children}
    </Popconfirm>
  );
};

export default PopConfirm;
