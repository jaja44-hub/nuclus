 // functions/src/index.ts
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();
const db = admin.firestore();

// Scheduled ingestion (every 6 hours) – adjust to free-tier needs
export const scheduledIngestion = functions.pubsub.schedule("every 6 hours").onRun(async () => {
  // Pull pending sources from a config collection and ingest
  const cfgSnap = await db.collection("ingestion_sources").get();
  const jobs = cfgSnap.docs.map(async d => {
    const { sector, sourceUrl, sourceType } = d.data();
    // TODO: call your ingestKnowledge via HTTPS endpoint or reimplement here
    console.log("Ingest placeholder:", sector, sourceUrl, sourceType);
  });
  await Promise.all(jobs);
  return null;
});
