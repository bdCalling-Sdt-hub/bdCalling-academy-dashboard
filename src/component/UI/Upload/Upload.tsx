/* eslint-disable @typescript-eslint/no-explicit-any */

import { message, Upload } from "antd";
import type {
  RcFile,
  UploadChangeParam,
  UploadFile,
  UploadProps,
} from "antd/es/upload/interface";

interface UploadPropss {
  name: string;
  disabled?: boolean;
  className?: string;
  showUploadList?: boolean;
  action?: string;
  listType?: any;
  setLoading: (action: boolean) => void;
  setImageUrl: (imageUrl: string) => void;
  setImageFile: (file: any) => void;
  children?: any;
}
export default function CustomUpload({
  name,
  disabled,
  className,
  showUploadList,
  setLoading,
  setImageUrl,
  setImageFile,
  listType,
  children,
  action = "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
}: UploadPropss) {
  const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 100;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    setImageFile(file);
    return isJpgOrPng && isLt2M;
  };
  const handleChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  return (
    <Upload
      listType={listType}
      maxCount={1}
      multiple={false}
      name={name}
      disabled={disabled}
      className={className}
      showUploadList={showUploadList}
      action={action}
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {children}
    </Upload>
  );
}
