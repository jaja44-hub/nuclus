// Service to interact with Firestore for sector-specific enterprise platform

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { EnterpriseItem, Sector } from "../../firestoreSchemas/SectorSchemas";
import { NotebookPage } from "../../firestoreSchemas/NotebookPage";

// Firebase config should be replaced with your actual credentials
const firebaseConfig = {
  apiKey: "YOUR_REAL_API_KEY",
  authDomain: "YOUR_REAL_AUTH_DOMAIN",
  projectId: "YOUR_REAL_PROJECT_ID",
  storageBucket: "YOUR_REAL_STORAGE_BUCKET",
  messagingSenderId: "YOUR_REAL_SENDER_ID",
  appId: "YOUR_REAL_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Add new item to sector collection
export async function addEnterpriseItem<T extends EnterpriseItem>(item: T, sector: Sector) {
  const colRef = collection(db, sector);
  const docRef = await addDoc(colRef, item);
  return docRef.id;
}

// Get all items for a sector
export async function getEnterpriseItems(sector: Sector): Promise<EnterpriseItem[]> {
  const colRef = collection(db, sector);
  const snapshot = await getDocs(colRef);
  const items: EnterpriseItem[] = [];
  snapshot.forEach(doc => {
    items.push(doc.data() as EnterpriseItem);
  });
  return items;
}

// Add notebook page to Firestore
export async function addNotebookPage(page: NotebookPage) {
  const colRef = collection(db, "notebookPages");
  const docRef = await addDoc(colRef, page);
  return docRef.id;
}

// Get notebook pages for a sector
export async function getNotebookPages(sector: Sector): Promise<NotebookPage[]> {
  const colRef = collection(db, "notebookPages");
  const q = query(colRef, where("sector", "==", sector));
  const snapshot = await getDocs(q);
  const pages: NotebookPage[] = [];
  snapshot.forEach(doc => {
    pages.push(doc.data() as NotebookPage);
  });
  return pages;
}