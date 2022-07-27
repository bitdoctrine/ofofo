import { db } from '../firebase/config';
import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore';

export const useFirestore = (c) => {
  let ref = collection(db, c);
  const addDocument = async (doc) => {
    await addDoc(ref, doc)
      .then(() => {
        console.log('Successfully Added New Document');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const deleteDocument = async (docId) => {
    await deleteDoc(doc(ref, docId)).catch((err) => console.log(err.message));
  };

  return { addDocument, deleteDocument };
};
