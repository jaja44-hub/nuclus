// src/backend/firestore/sectorFirestoreService.ts
import { getFirestore, collection, addDoc, getDocs, query, where, doc, setDoc } from "firebase/firestore";
import { NotebookPage } from "@/firestoreSchemas/NotebookPage";
import { EnterpriseItem, Sector } from "@/firestoreSchemas/SectorSchemas";
import { db } from "@/lib/firebase"; // your existing firebase init

const pagesCol = (sector: Sector) => collection(db, `sectors/${sector}/notebook_pages`);
const itemsCol = (sector: Sector) => collection(db, `sectors/${sector}/items`);

export async function upsertNotebookPage(sector: Sector, page: NotebookPage) {
  const ref = doc(db, `sectors/${sector}/notebook_pages/${page.id}`);
  await setDoc(ref, page, { merge: true });
  return page.id;
}

export async function getNotebookPages(sector: Sector): Promise<NotebookPage[]> {
  const snap = await getDocs(query(pagesCol(sector), where("sector", "==", sector)));
  return snap.docs.map(d => d.data() as NotebookPage);
}

export async function addEnterpriseItem(sector: Sector, item: EnterpriseItem) {
  await addDoc(itemsCol(sector), item);
}
