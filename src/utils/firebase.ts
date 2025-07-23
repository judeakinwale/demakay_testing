import {
  doc,
  setDoc,
  query,
  collection,
  getDocs,
  orderBy,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/lib/firebase";

export const uploadReviewImage = async (file: File, id: string) => {
  const imageRef = ref(storage, `reviews/${id}/${file.name}`);
  const snap = await uploadBytes(imageRef, file);
  const url = await getDownloadURL(snap.ref);
  return url;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const saveReview = async (reviewData: any) => {
  try {
    await setDoc(doc(db, "reviews", reviewData.id), reviewData);
    return true;
  } catch {
    return false;
  }
};

export const getReviews = async () => {
  const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
