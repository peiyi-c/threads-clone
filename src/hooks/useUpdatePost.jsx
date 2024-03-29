import { useState } from "react";
import useThreadStore from "../store/threadStore";
import useShowToast from "./useShowToast";
import { doc, updateDoc } from "firebase/firestore";
import { firestore, storage } from "../firebase/firebase";
import { deleteObject, ref } from "firebase/storage";
import { uploadStrings } from "../utils/uploadStrings";
import { downloadImageURLs } from "../utils/downloadURLs";
import useAuthStore from "../store/authStore";
import { sortImages } from "../utils/sortImages";

const useUpdatePost = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthStore();
  const { updateThread } = useThreadStore();
  const showToast = useShowToast();

  const handleUpdatePost = async (post, text, images, type) => {
    if (isLoading || !user) return;

    if (!text && !images) {
      showToast("Error", "Please add text or image.", "error");
      return;
    }
    setIsLoading(true);

    let newPost = post;
    // check image
    const [deletedImageIds, remainingImages, newImages] = await sortImages(
      post.mediaURLs,
      images
    );
    // let originalImageIds = post.mediaURLs.map((img) => img.id);
    // let imageIds = images.map((img) => img.id);
    // let deletedImageIds = [];
    // let remainingImages = [];
    // let newImages = [];

    // for (let i = 0; i < originalImageIds.length; i++) {
    //   if (!imageIds.includes(originalImageIds[i])) {
    //     deletedImageIds.push(originalImageIds[i]);
    //   } else {
    //     remainingImages.push(images[i]);
    //   }
    // }
    // for (let j = 0; j < imageIds.length; j++) {
    //   if (!originalImageIds.includes(imageIds[j])) {
    //     newImages.push(images[j]);
    //   }
    // }

    try {
      const postDocRef = doc(firestore, type, post.id);
      // update text
      if (post.text !== text) {
        const postRef = doc(firestore, type, post.id);
        await updateDoc(postRef, {
          text: text,
        });
        // prepare for store
        newPost.text = text;
      }

      // delete image (thread/replies)
      if (deletedImageIds) {
        let deletedImageRefs;
        if (type === "threads") {
          deletedImageRefs = deletedImageIds.map((id) =>
            ref(storage, `threads/${post.id}/${id}`)
          );
        }
        if (type === "replies") {
          deletedImageRefs = deletedImageIds.map((id) =>
            ref(storage, `threads/${post.threadId}/${post.id}/${id}`)
          );
        }
        deletedImageRefs.forEach((image) => deleteObject(image));
      }

      // upload new images (thread / replies)
      if (newImages) {
        let newImageRefs;
        if (type === "threads") {
          newImageRefs = newImages.map((image) =>
            ref(storage, `threads/${post.id}/${image.id}`)
          );
        }

        if (type === "replies") {
          newImageRefs = newImages.map((image) =>
            ref(storage, `threads/${post.threadId}/${post.id}/${image.id}`)
          );
        }
        await uploadStrings(newImageRefs, newImages);

        const downloadURLs = await downloadImageURLs(newImageRefs, newImages);

        await updateDoc(postDocRef, {
          id: postDocRef.id,
          mediaURLs: [...remainingImages, ...downloadURLs],
        });

        // prepare for store
        newPost.mediaURLs = [...remainingImages, ...downloadURLs];
      } else {
        await updateDoc(postDocRef, {
          id: postDocRef.id,
          mediaURLs: [...remainingImages],
        });
        // prepare for store
        newPost.mediaURLs = [...remainingImages];
      }
      showToast("Success", "Updated!", "success");
      if (type === "threads") updateThread(newPost);
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsLoading(false);
    }
  };

  return { handleUpdatePost, isLoading };
};

export default useUpdatePost;
