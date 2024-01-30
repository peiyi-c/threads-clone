import { getDownloadURL } from "firebase/storage";
export const downloadImageURLs = async (imageRefs, images) => {
  const imageIds = images.map((image) => image.id);
  let URLs = [];
  for (let i = 0; i < imageRefs.length; i++) {
    const downloadURL = await getDownloadURL(imageRefs[i]);
    URLs.push({
      id: imageIds[i],
      path: downloadURL,
    });
  }
  return URLs;
};
