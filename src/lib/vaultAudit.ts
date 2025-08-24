// Simple audit trail for credential access and modification

export async function logVaultAction(userId: string, action: string, vaultName: string) {
  // Store audit log in Firestore 'vault_audit' collection
  const db = getFirestore();
  await setDoc(doc(db, "vault_audit", `${userId}_${Date.now()}`), {
    action,
    vaultName,
    userId,
    timestamp: new Date().toISOString()
  });
}