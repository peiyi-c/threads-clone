import { getDownloadURL } from "firebase/storage";
export const downloadImageURLs = async (imageRefs, images) => {
  const imageIds = images.map((image) => image.id);
  const imageType = images.map((image) => image.type);

  let URLs = [];
  for (let i = 0; i < imageRefs.length; i++) {
    const downloadURL = await getDownloadURL(imageRefs[i]);
    URLs.push({
      id: imageIds[i],
      path: downloadURL,
      type: imageType[i],
    });
  }
  return URLs;
};
