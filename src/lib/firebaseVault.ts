// Firestore integration for storing encrypted credentials

import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

export async function storeEncryptedCredential(userId: string, vaultName: string, encrypted: string) {
  const db = getFirestore();
  await setDoc(doc(db, "vaults", `${userId}_${vaultName}`), {
    encrypted,
    updatedAt: new Date().toISOString()
  });
}

export async function fetchEncryptedCredential(userId: string, vaultName: string): Promise<string | null> {
  const db = getFirestore();
  const docRef = doc(db, "vaults", `${userId}_${vaultName}`);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data().encrypted;
  }
  return null;
}