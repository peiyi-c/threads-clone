import { getDownloadURL } from "firebase/storage";
export const downloadImageURLs = async (imageRefs) => {
  let URLs = [];
  for (let i = 0; i < imageRefs.length; i++) {
    const downloadURL = await getDownloadURL(imageRefs[i]);
    URLs.push({
      id: i,
      path: downloadURL,
    });
  }
  return URLs;
};
