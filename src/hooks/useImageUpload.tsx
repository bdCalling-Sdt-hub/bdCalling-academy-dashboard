/* eslint-disable @typescript-eslint/no-explicit-any */
// useImageUpload.js
import { useState, useEffect } from "react";

const useImageUpload = (initialImage = null) => {
  const [imageUrl, setImageUrl] = useState<string | null>(initialImage);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const convertToBase64 = () => {
    if (imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(imageFile);
    }
  };

  useEffect(() => {
    convertToBase64();
  }, [imageFile]);

  const setFile = (file: File) => {
    setImageFile(file);
  };

  return {
    imageUrl,
    setFile,
    imageFile,
    setImageUrl,
  };
};

export default useImageUpload;
