import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore";

export async function logDeployment(userId: string, platform: string, status: string, url: string, message: string) {
  const db = getFirestore();
  await addDoc(collection(db, "deployment_logs"), {
    userId,
    platform,
    status, // "success" or "error"
    url,
    message,
    timestamp: new Date().toISOString()
  });
}

export async function fetchDeploymentLogs(userId: string) {
  const db = getFirestore();
  const q = query(collection(db, "deployment_logs"), where("userId", "==", userId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => doc.data());
}