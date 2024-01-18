import { useState } from "react";
import useShowToast from "./useShowToast";

const usePreviewImg = () => {
  const [selectedFile, setSelectedFile] = useState();
  const showToast = useShowToast();
  const maxFileSizeInBytes = 2 * 1024 * 1024; // 2MB

  const handleImgChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith("image/")) {
      if (file.size > maxFileSizeInBytes) {
        showToast("Error", "File size must be less than 2MB", "error");
        setSelectedFile(null);
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      showToast("Error", "Please select an image file", "error");
      setSelectedFile(null);
    }
  };

  return { handleImgChange, selectedFile, setSelectedFile };
};

export default usePreviewImg;
