/* eslint-disable @typescript-eslint/no-explicit-any */

import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";

const { Dragger } = Upload;
interface UploadImageProps {
  setFile: (file: any) => void;
}
const UploadImage = ({ setFile }: UploadImageProps) => {
  const props: UploadProps = {
    name: "file",
    multiple: false,
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        setFile(info.file);
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  return (
    <Dragger
      {...props}
      style={{
        backgroundColor: "white",
      }}
    >
      <div className="flex justify-start px-4  gap-x-4 ">
        <Button>choose file</Button>
        <p className="ant-upload-text">or drag and drop file here</p>
      </div>
    </Dragger>
  );
};

export default UploadImage;
