export const sortImages = (initialImages, currentImages) => {
  let initialImageIds = initialImages.map((img) => img.id) || [];
  let currentImageIds = currentImages.map((img) => img.id) || [];
  let deletedImageIds = [];
  let remainingImages = [];
  let newImages = [];

  if (initialImages) {
    for (let i = 0; i < initialImageIds.length; i++) {
      if (!currentImageIds.includes(initialImageIds[i])) {
        deletedImageIds.push(initialImageIds[i]);
      } else {
        remainingImages.push(initialImages[i]);
      }
    }
  }

  for (let j = 0; j < currentImageIds.length; j++) {
    if (!initialImageIds.includes(currentImageIds[j])) {
      newImages.push(currentImages[j]);
    }
  }
  return [deletedImageIds, remainingImages, newImages];
};
