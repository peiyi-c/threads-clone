import { useState } from "react";
import useShowToast from "./useShowToast";

const usePreviewImg = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [type, setType] = useState("image");
  const showToast = useShowToast();
  const MAX_FILE_SIZE_BYTES = 2 * 1024 * 1024; // 2MB

  const handleImgChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const accept =
      file.type.startsWith("image/") || file.type.startsWith("video/mp4");

    if (file && accept) {
      if (file.size > MAX_FILE_SIZE_BYTES) {
        showToast("Error", "File size must be less than 2MB", "error");
        setSelectedFile(null);
        return;
      }

      if (file.type.startsWith("image/")) {
        setType("image");
      } else if (file.type.startsWith("video/")) {
        setType("video");
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

  return {
    handleImgChange,
    selectedFile,
    setSelectedFile,
    type,
  };
};

export default usePreviewImg;
