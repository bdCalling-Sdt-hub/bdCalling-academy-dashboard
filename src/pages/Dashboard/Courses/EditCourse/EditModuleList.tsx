/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import UploadImage from "../../../../component/UI/Form/UploadImage";
import style from "../courses.module.css";
import { RiDeleteBinLine } from "react-icons/ri";

export default function EditModuleList() {
  const [files, setFilelist] = useState<any>();
  const handleUpload = async () => {
    console.log(files);
  };
  const handleDelete = () => {};

  return (
    <div className="h-screen ">
      <h1 className="text-[24px] mb-[30px] font-[600] text-customHeader ">
        UI/UX Designer Video Module List
      </h1>
      <div className={`${style.editCourseContainer} p-[30px]  flex flex-col  `}>
        <div className="">
          <UploadImage setFile={setFilelist} />
        </div>
        <div>
          <button
            onClick={handleUpload}
            className="bg-customPrimary text-[#fff] py-[16px] px-[30px] rounded-md	 font-medium my-[30px]"
          >
            Upload
          </button>
        </div>
        <div className="flex-grow">
          {files?.map((file: any, index: number) => (
            <div
              key={index}
              className="flex text-customHeader justify-between border mb-[20px] border-[#ADADAD] py-[16px] px-[30px]"
            >
              <p>{file?.name}</p>
              <button onClick={handleDelete}>
                {" "}
                <RiDeleteBinLine />
              </button>
            </div>
          ))}
        </div>
        <div className=" flex justify-between    ">
          <button className="bg-customPrimary  py-[16px] px-[30px]  rounded text-[#fff]">
            Submit
          </button>
          <button className="bg-[#D7263D]  py-[16px] px-[30px]  rounded text-[#fff]">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
