// Example LangChain tool for Firestore lookup

import { Tool } from "langchain/tools";
import { getFirestoreDoc } from "@/lib/firebase"; // Assume you have this

export const firestoreLookupTool = new Tool({
  name: "FirestoreLookup",
  description: "Lookup a document in Firestore by collection and doc ID.",
  func: async (input: string) => {
    // input: "collectionName:docId"
    const [collection, docId] = input.split(":");
    const doc = await getFirestoreDoc(collection, docId);
    return JSON.stringify(doc);
  }
});

// Add more tools as your app grows!