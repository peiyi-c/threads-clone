import { uploadString } from "firebase/storage";

export const uploadStrings = async (imageRefs, images) => {
  const selectedFiles = images.map((image) => image.path);

  for (let i = 0; i < imageRefs.length; i++) {
    await uploadString(imageRefs[i], selectedFiles[i], "data_url");
  }
};
