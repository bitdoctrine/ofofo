import { db } from '../firebase/config';
import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export const useCollection = (c) => {
  const [documents, setDocuments] = useState(null);

  useEffect(() => {
    let ref = collection(db, c);

    const unsub = onSnapshot(ref, (snapshot) => {
      let result = [];
      snapshot.docs.forEach((doc) =>
        result.push({ id: doc.id, ...doc.data() })
      );
      setDocuments(result.sort());
    });

    return () => unsub();
  }, [c]);

  return { documents };
};
