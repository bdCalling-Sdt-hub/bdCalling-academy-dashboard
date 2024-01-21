/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const UploadImage = ({ setFile }: any) => {
  return (
    <div className="w-100 border py-4 px-4 border-[#ebe5e5]">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
      />
    </div>
  );
};

export default UploadImage;
