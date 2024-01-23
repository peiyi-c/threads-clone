import { uploadString } from "firebase/storage";

export const uploadStrings = async (imageRefs, selectedFiles) => {
  for (let i = 0; i < imageRefs.length; i++) {
    await uploadString(imageRefs[i], selectedFiles[i], "data_url");
  }
};
